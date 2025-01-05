// backend/controllers/messageController.js

const Message = require('../models/messageModel');

// Function to send a message
const sendMessage = async (req, res, next) => {
    try {
        const { content, sender, receiver, chat } = req.body; // Add chat id

        const message = new Message({
            content,
            sender,
            receiver,
            chat,
        });

        await message.save();
        res.status(201).json(message); // Return the created message as response
    } catch (error) {
        next(error); // Pass error to error middleware
    }
};

// Function to get messages from a specific chat
const getMessages = async (req, res, next) => {
    try {
        const { chatId } = req.params; // Extract chatId from request params
        const messages = await Message.find({ chat: chatId }).sort('createdAt'); // Fetch messages from DB and sort them
        res.json(messages); // Return messages as JSON
    } catch (error) {
        next(error); // Pass error to error middleware
    }
}

module.exports = { sendMessage, getMessages }; // Export functions as named exports
