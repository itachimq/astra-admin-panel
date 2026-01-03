import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { rateLimit } from '@/lib/rateLimit';
import { verifyPassword } from '@/lib/auth';
import { generateFingerprint } from '@/lib/fingerprint';
import redis from '@/lib/redis';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // 1. Rate Limiting
    const { success } = await rateLimit(`login:${ip}`, 5, 60);
    if (!success) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await verifyPassword(password, user.passwordHash))) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 2. Check 2FA
        if (user.twoFactorEnabled) {
            const tempToken = uuidv4();
            await redis.set(`2fa_pending:${tempToken}`, user.id, 'EX', 300);

            return NextResponse.json({
                requires2FA: true,
                tempToken
            });
        }

        // 3. No 2FA - Create Session
        const sessionToken = uuidv4();
        const fingerprint = generateFingerprint(ip, userAgent);

        await prisma.session.create({
            data: {
                userId: user.id,
                token: sessionToken,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
                ipAddress: ip,
                userAgent: userAgent,
                fingerprint
            }
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set('session_token', sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
