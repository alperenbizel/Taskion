const fs = require('fs');
const path = require('path');

const requestLogger = (req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url} - IP: ${req.ip}\n`;
    fs.appendFile(path.join(__dirname, 'requests.log'), log, (err) => {
        if (err) console.error('Failed to log request:', err);
    });
    next(); // İşlemin devam etmesine izin ver
};

module.exports = requestLogger;
