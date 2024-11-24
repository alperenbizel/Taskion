const express = require('express');
const { uploadFile, getFiles, deleteFile } = require('../controllers/fileControllers');
const authMiddleware = require('../middleware/authMiddleware');
const fileUploadMiddleware = require('../middleware/FileMiddleware');

const router = express.Router();

// Belirli bir nota veya projeye dosya yükler
router.post('/', authMiddleware, fileUploadMiddleware, uploadFile);

// Belirli bir nota veya projeye ait tüm dosyaları getir
router.get('/', authMiddleware, getFiles);

// Bir dosyayı siler
router.delete('/:id', authMiddleware, deleteFile);

module.exports = router;
