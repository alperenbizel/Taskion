const express = require('express');
const { register, login, getProfile, updateProfile, deleteUser } = require('../Controllers/UserControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');
const validationMiddleware = require('../Middleware/ValidationMiddleware'); // Validation middleware
const router = express.Router();

// Kullanıcı kaydı için rota
router.post('/register', validationMiddleware, register);

// Kullanıcı girişi için rota
router.post('/login', login);

// Profil görüntüleme rotası (authMiddleware gerekli)
router.get('/profile', authMiddleware, getProfile);

// Profil güncelleme rotası (authMiddleware gerekli)
router.put('/profile', authMiddleware, updateProfile);

// Kullanıcı silme rotası (authMiddleware gerekli)
router.delete('/', authMiddleware, deleteUser);

module.exports = router;
