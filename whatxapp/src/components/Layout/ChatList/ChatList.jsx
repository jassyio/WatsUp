import React from "react";
import { Link } from "react-router-dom";
import ChatItem from "./ChatItem"; // Reusable component for chat items

const ChatList = () => {
  // Example chat list data
  const chats = [
    { id: 1, name: "GHOST", lastMessage: "Hey... Nataka kuenda saa saba so unaweza...", time: "9:15 AM" },
    { id: 2, name: "John Doe", lastMessage: "Mambo vipi?", time: "8:45 AM" },
    { id: 3, name: "Jane Smith", lastMessage: "Got your email!", time: "7:30 AM" },
    // Add more chats as needed
  ];

  return (
    <div id="chat-list" className="space-y-2 p-4 bg-gray-50 h-full overflow-y-auto">
      {chats.map((chat) => (
        <Link
          to={`/chatroom/${chat.id}`}
          key={chat.id}
          className="block rounded-lg hover:bg-gray-100 transition"
        >
          <ChatItem chat={chat} />
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
