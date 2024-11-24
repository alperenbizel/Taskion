const express = require('express');
const { shareNote,shareProject,getShareWithMe,removeSharing} = require('../controllers/SharingControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Bir notu başka bir kullanıcıyla paylaşır
router.post('/note', authMiddleware, shareNote);

// Bir projeyi paylaşır
router.post('/project', authMiddleware, shareProject);

// Kullanıcıya paylaşılan tüm notları ve projeleri getirir
router.get('/sharedWithMe', authMiddleware, getShareWithMe);

// Bir notun veya projenin paylaşımını kaldırır
router.delete('/remove', authMiddleware, removeSharing);

module.exports = router;
