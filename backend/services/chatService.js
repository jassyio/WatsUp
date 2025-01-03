// C:\Users\user\Desktop\watsUp\WatsUp\backend\services\chatService.js

import Message from "../models/messageModel.js";

const sendMessage = async (chatId, senderId, content) => {
  const message = new Message({ chatId, senderId, content });
  return await message.save();
};

const getMessagesByChatId = async (chatId) => {
  return await Message.find({ chatId }).sort({ createdAt: -1 });
};

export default { sendMessage, getMessagesByChatId };
