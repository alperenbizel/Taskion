const multer = require('multer');
const path = require('path');

// Dosya yükleme yapılandırması
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Yükleme dizini
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Dosya adını benzersiz hale getir
    }
});

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|pdf/; // İzin verilen dosya formatları
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true); // Geçerli dosya
    }
    cb('Error: File type not supported'); // Geçersiz dosya
};

const upload = multer({
    storage,
    limits: { fileSize: 1000000 }, // 1 MB dosya boyut limiti
    fileFilter
});

module.exports = upload.single('file'); // Tek bir dosya yükleme
