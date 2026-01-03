import crypto from 'crypto';

export function generateFingerprint(ip: string, userAgent: string, acceptLanguage: string = ''): string {
    const data = `${ip}|${userAgent}|${acceptLanguage}`;
    return crypto.createHash('sha256').update(data).digest('hex');
}
