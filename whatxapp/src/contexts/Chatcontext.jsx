import React, { createContext, useContext, useState } from 'react';
import { chatService } from '../services/chatService';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);

  const getMessages = async (roomId) => {
    const response = await chatService.getMessages(roomId);
    if (response.success) {
      setMessages(response.messages);
      setActiveRoom(roomId);
    }
  };

  const sendMessage = async (roomId, message) => {
    const response = await chatService.sendMessage(roomId, message);
    if (response.success) {
      setMessages((prevMessages) => [...prevMessages, response.message]);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, activeRoom, getMessages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
