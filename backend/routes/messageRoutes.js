// backend/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController'); // Correctly import the functions
const authMiddleware = require('../middleware/authMiddleware');

// Define the POST route to send messages, with authentication middleware
router.post('/', authMiddleware, sendMessage);

// Define the GET route to fetch messages for a specific chat
router.get('/:chatId', authMiddleware, getMessages);

module.exports = router;
