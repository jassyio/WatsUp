// src/components/ChatWindow.jsx

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const socket = io("http://localhost:3001"); // Replace with your backend URL

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    return () => socket.off("newMessage");
  }, []);

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput socket={socket} chatId={chatId} />
    </div>
  );
};

export default ChatWindow;
