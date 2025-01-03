// src/routes/chatRoutes.js
import express from 'express';
import { getChats, sendMessage } from '../controllers/chatController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getChats);
router.post('/:chatId/messages', protect, sendMessage);

export default router;
