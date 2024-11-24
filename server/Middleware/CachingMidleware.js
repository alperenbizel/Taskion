const cache = {};

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl; // İsteğin URL'sini anahtar olarak kullan
    if (cache[key]) {
        return res.status(200).json(cache[key]); // Önbellekten döndür
    }
    res.sendResponse = res.send; // Orijinal send metodunu kaydet
    res.send = (body) => {
        cache[key] = body; // Yanıtı önbelleğe al
        res.sendResponse(body); // Orijinal send metodunu çağır
    };
    next(); // İşlemin devam etmesine izin ver
};

module.exports = cacheMiddleware;
