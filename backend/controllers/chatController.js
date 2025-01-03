// src/controllers/chatController.js
import asyncHandler from 'express-async-handler';
import Chat from '../models/chatModel.js';

// @desc    Get user chats
// @route   GET /api/chats
// @access  Private
export const getChats = asyncHandler(async (req, res) => {
  const chats = await Chat.find({ users: { $in: [req.user._id] } }).populate('users', 'name email');
  res.json(chats);
});

// @desc    Send a message
// @route   POST /api/chats/:chatId/messages
// @access  Private
export const sendMessage = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const chat = await Chat.findById(req.params.chatId);

  if (chat) {
    const message = {
      sender: req.user._id,
      content,
      timestamp: new Date(),
    };
    chat.messages.push(message);
    await chat.save();
    res.status(201).json(message);
  } else {
    res.status(404);
    throw new Error('Chat not found');
  }
});
