import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import speakeasy from 'speakeasy';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@astra.com';
    const password = 'password123';
    const secret = speakeasy.generateSecret({ length: 20 });

    console.log(`Seeding user: ${email}`);
    console.log(`2FA Secret (Base32): ${secret.base32}`);
    console.log(`2FA OTPAuth URL: ${secret.otpauth_url}`);

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
        where: { email },
        update: {
            passwordHash,
            twoFactorSecret: secret.base32,
            twoFactorEnabled: true, // Enable 2FA for testing
        },
        create: {
            email,
            passwordHash,
            twoFactorSecret: secret.base32,
            twoFactorEnabled: true,
        },
    });

    console.log('User created:', user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
