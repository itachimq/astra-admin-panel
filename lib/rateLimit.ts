import redis from './redis';

export async function rateLimit(key: string, limit: number, windowSeconds: number): Promise<{ success: boolean; remaining: number }> {
    const current = await redis.incr(key);
    if (current === 1) {
        await redis.expire(key, windowSeconds);
    }

    if (current > limit) {
        return { success: false, remaining: 0 };
    }

    return { success: true, remaining: limit - current };
}
