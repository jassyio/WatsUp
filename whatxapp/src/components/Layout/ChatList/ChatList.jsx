// src/components/ChatList/ChatList.jsx
import React from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem"; // You can create a ChatItem component for each individual chat

const ChatList = () => {
  // Example chat list data
  const chats = [
    { id: 1, name: "GHOST", lastMessage: "Hey... Nataka kuenda saa saba so unaweza...", time: "9:15 AM" },
    { id: 2, name: "John Doe", lastMessage: "Mambo vipi?", time: "8:45 AM" },
    // Add more chats as needed
  ];

  return (
    <div id="chat-list">
      {chats.map((chat) => (
        <Link to={`/chatroom/${chat.id}`} key={chat.id} className="chat-item">
          <ChatItem chat={chat} />
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
