const express = require('express');
const router = express.Router();
const { getDashboard } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Dashboard Route
router.get('/dashboard', authMiddleware, getDashboard);

module.exports = router;
