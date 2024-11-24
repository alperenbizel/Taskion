const File = require('../models/FileModel');
const multer= require('multer');
const path = require('path');

const storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Dosya adını benzersiz hale getir
    }
})

const upload = multer({ storage });


const fileController = {
    uploadFile: upload.single('file'),
    getFiles: async (req, res) => {
        try {
            const files = await File.find({ note: req.params.noteId }); // Belirli bir nota ait dosyaları al
            res.status(200).json(files);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteFile: async (req, res) => {
        try {
            const file = await File.findById(req.params.id);
            if (!file || file.user.toString() !== req.user.id) {
                return res.status(403).json({ message: 'Unauthorized action' });
            }

      
            const fs = require('fs');
            fs.unlinkSync(file.filePath);

            await File.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'File deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = fileController;
