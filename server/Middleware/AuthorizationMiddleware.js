const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next(); // Yetkili ise işlemin devam etmesine izin ver
};

module.exports = adminMiddleware;
