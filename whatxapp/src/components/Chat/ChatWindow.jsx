import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import { Box } from '@mui/material';

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { type: 'text', content: 'Hello!', sender: 'other' },
    ]);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, { type: 'text', content: newMessage, sender: 'me' }]);
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto' }}>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </Box>
            <MessageInput onSendMessage={handleSendMessage} />
        </Box>
    );
};

export default ChatWindow;