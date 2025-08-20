type Key = string;
const BUCKET = new Map<Key, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 10, windowMs = 5 * 60 * 1000) {
  const now = Date.now();
  const entry = BUCKET.get(key);
  if (!entry || entry.resetAt < now) {
    BUCKET.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, resetAt: now + windowMs };
  }
  if (entry.count >= limit) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }
  entry.count += 1;
  return { ok: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

export function getClientIp(reqHeaders: Headers) {
  return (
    reqHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    reqHeaders.get("cf-connecting-ip") ||
    "unknown"
  );
}
