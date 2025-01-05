const express = require('express');
const router = express.Router();
const { getUser, getAllUsers } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, getUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;