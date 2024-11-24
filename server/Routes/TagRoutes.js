const express = require('express');
const { createTag, getTags, deleteTag } = require('../controllers/tagControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Yeni bir etiket oluştur
router.post('/', authMiddleware, createTag);

// Kullanıcının tüm etiketlerini getir
router.get('/', authMiddleware, getTags);

// Belirli bir etiketi siler
router.delete('/:id', authMiddleware, deleteTag);

module.exports = router;
