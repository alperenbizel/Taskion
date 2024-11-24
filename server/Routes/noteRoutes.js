const express=require('express');
const { createNote, getNotes, getNoteById, updateNote, deleteNote } = require('../controllers/NoteControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Yeni bir not oluştur
router.post('/', authMiddleware, createNote);

// Kullanıcının tüm notlarını getir
router.get('/', authMiddleware, getNotes);

// Belirli bir notun detaylarını getir
router.get('/:id', authMiddleware, getNoteById);

// Belirli bir notu günceller
router.put('/:id', authMiddleware, updateNote);

// Belirli bir notu siler
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;