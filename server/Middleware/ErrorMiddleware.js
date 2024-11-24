const errorHandler = (err, req, res, next) => {
    console.error(err); // Hataları logla

    const statusCode = err.statusCode || 500;
    const message = process.env.NODE_ENV === 'development' ? err.message : 'An error occurred';

    res.status(statusCode).json({ message });
};

module.exports = errorHandler;
