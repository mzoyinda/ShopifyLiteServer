const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per window
  message: {
    status: "error",
    code: 429,
    message: "Too many requests, please try again later.",
  },
  headers: true, // Include rate limit headers
  keyGenerator: (req) => req.ip, // Use IP address for tracking
});

module.exports = limiter;
