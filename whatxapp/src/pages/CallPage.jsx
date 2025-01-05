import React, { useContext } from 'react';
import ChatList from '../components/Chat/ChatList';
import ChatWindow from '../components/Chat/ChatWindow';
import { ChatContext } from '../context/ChatContext';
import { Box } from '@mui/material'; // Import MUI Box

const ChatPage = () => {
    const { selectedChat } = useContext(ChatContext);
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}> {/* Use MUI Box for layout */}
            <ChatList />
            {selectedChat && <ChatWindow />}
        </Box>
    );
};

export default ChatPage;