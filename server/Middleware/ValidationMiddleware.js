const { body, validationResult } = require('express-validator');

const validationMiddleware = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // İşlemin devam etmesine izin ver
    }
];

module.exports = validationMiddleware;