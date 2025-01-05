import React, { createContext, useState } from 'react';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]); // Array of chats
    const [selectedChat, setSelectedChat] = useState(null); // Currently selected chat

    const value = {
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export { ChatContext, ChatProvider };