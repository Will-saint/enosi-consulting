// Persists within the same serverless instance — catches most simple spam bursts.
export function createRateLimiter(limit: number, windowMs: number) {
  const store = new Map<string, { count: number; resetAt: number }>();

  return (ip: string): boolean => {
    const now = Date.now();
    const record = store.get(ip);
    if (!record || now > record.resetAt) {
      store.set(ip, { count: 1, resetAt: now + windowMs });
      return true;
    }
    if (record.count >= limit) return false;
    record.count++;
    return true;
  };
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}
