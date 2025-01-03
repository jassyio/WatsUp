// src/components/ChatList/ChatItem.jsx
import React from "react";

const ChatItem = ({ chat }) => {
  return (
    <div className="chat-item">
      <div className="chat-item-icon"></div> {/* Add user icon here */}
      <div className="chat-item-details">
        <div className="chat-item-name">{chat.name}</div>
        <div className="chat-item-last-message">{chat.lastMessage}</div>
      </div>
      <div className="chat-item-time">{chat.time}</div>
    </div>
  );
};

export default ChatItem;
