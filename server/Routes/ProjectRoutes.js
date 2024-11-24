const express = require('express');
const { createProject, getProject, getProjectById, updateProject, deleteProject } = require('../controllers/ProjectControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Yeni bir proje oluştur
router.post('/', authMiddleware, createProject);

// Kullanıcının tüm projelerini getir
router.get('/', authMiddleware, getProject);

// Belirli bir projenin detaylarını getir
router.get('/:id', authMiddleware, getProjectById);

// Belirli bir projeyi günceller
router.put('/:id', authMiddleware, updateProject);

// Belirli bir projeyi siler
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;
