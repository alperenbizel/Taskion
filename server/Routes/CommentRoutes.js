const express = require('express');
const { createComment, getComments, deleteComment } = require('../controllers/commentControllers');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Yeni bir yorum oluştur
router.post('/', authMiddleware, createComment);

// Belirli bir not veya projeye ait tüm yorumları getir
router.get('/', authMiddleware, getComments);

// Bir yorumu siler
router.delete('/:id', authMiddleware, deleteComment);

module.exports = router;
