const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 dakika
    max: 100, // Her IP için maksimum 100 istek
    message: 'Too many requests, please try again later.'
});

module.exports = limiter;
