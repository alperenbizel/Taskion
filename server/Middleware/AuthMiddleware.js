const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    console.log('Authorization Header:', req.headers.authorization);
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;


// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     console.log('Received token:', token); // Token'ı logla

//     if (!token) {
//         return res.status(401).json({ message: 'Access denied. No token provided.' });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         console.error('Token doğrulama hatası:', error); // Hata logla
//         return res.status(400).json({ message: 'Invalid token.' });
//     }
// };
