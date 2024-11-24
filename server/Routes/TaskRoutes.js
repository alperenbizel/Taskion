const express = require('express');
const { createTask, getTask, updateTask, deleteTask } = require('../controllers/TaskControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Yeni bir görev oluştur
router.post('/', authMiddleware, createTask);

// Belirli bir proje veya not için tüm görevleri getir
router.get('/', authMiddleware, getTask);

// Belirli bir görevi günceller
router.put('/:id', authMiddleware, updateTask);

// Belirli bir görevi siler
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
