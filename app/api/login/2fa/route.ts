import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { rateLimit } from '@/lib/rateLimit';
import redis from '@/lib/redis';
import speakeasy from 'speakeasy';
import { v4 as uuidv4 } from 'uuid';
import { generateFingerprint } from '@/lib/fingerprint';

export async function POST(req: NextRequest) {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

    try {
        const { tempToken, code } = await req.json();

        if (!tempToken || !code) {
            return NextResponse.json({ error: 'Missing token or code' }, { status: 400 });
        }

        // 1. Rate Limit
        const { success } = await rateLimit(`2fa:${ip}`, 3, 60);
        if (!success) {
            return NextResponse.json({ error: 'Too many attempts' }, { status: 429 });
        }

        // 2. Validate Temp Token
        const userId = await redis.get(`2fa_pending:${tempToken}`);
        if (!userId) {
            return NextResponse.json({ error: 'Invalid or expired session' }, { status: 401 });
        }

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user || !user.twoFactorSecret) {
            return NextResponse.json({ error: 'User invalid' }, { status: 401 });
        }

        // 3. Verify TOTP
        const verified = speakeasy.totp.verify({
            secret: user.twoFactorSecret,
            encoding: 'base32',
            token: code
        });

        if (!verified) {
            return NextResponse.json({ error: 'Invalid code' }, { status: 401 });
        }

        // 4. Create Session
        await redis.del(`2fa_pending:${tempToken}`);

        const sessionToken = uuidv4();
        const userAgent = req.headers.get('user-agent') || 'unknown';
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
        console.error('2FA error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
