const express = require('express');
const { getActivities, deleteAcyivity } = require('../controllers/ActivityControllers');
const authMiddleware = require('../Middleware/AuthMiddleware');

const router = express.Router();

// Kullanıcının yaptığı tüm işlemleri getir
router.get('/', authMiddleware, getActivities);

// Belirli bir aktiviteyi siler
router.delete('/:id', authMiddleware, deleteAcyivity);

module.exports = router;
