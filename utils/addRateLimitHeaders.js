const addRateLimitHeaders = (req, res, next) => {
  if (req.rateLimit) {
    res.set({
      "X-RateLimit-Limit": req.rateLimit.limit,
      "X-RateLimit-Remaining": req.rateLimit.remaining,
      "X-RateLimit-Reset": req.rateLimit.resetTime
        ? Math.floor(req.rateLimit.resetTime.getTime() / 1000) // Convert to UNIX timestamp
        : null,
    });
  }
  next();
};

module.exports = addRateLimitHeaders;
