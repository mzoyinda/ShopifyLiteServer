const getRateLimitHeaders = (req) => ({
  "X-RateLimit-Limit": req.rateLimit?.limit || 100,
  "X-RateLimit-Remaining": req.rateLimit?.remaining ?? "unknown",
  "X-RateLimit-Reset": req.rateLimit?.resetTime
    ? Math.floor(req.rateLimit.resetTime.getTime() / 1000)
    : null,
});

module.exports = getRateLimitHeaders;
