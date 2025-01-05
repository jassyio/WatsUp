import React from 'react';
import { Paper, Typography, Box, Avatar, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const MessageContent = styled(Typography)(({ theme, isSent }) => ({
    wordWrap: 'break-word',
    color: isSent ? 'white' : 'black',
}));

const Message = ({ message }) => {
    const isSent = message.sender === 'me';
    const messageStyle = {
        p: 1.5,
        borderRadius: isSent ? '10px 0 10px 10px' : '0 10px 10px 10px',
        backgroundColor: isSent ? '#008069' : 'white', // WhatsApp Green
        maxWidth: '60%',
        wordWrap: 'break-word',
    };

    const messageContainerStyle = {
        display: 'flex',
        justifyContent: isSent ? 'flex-end' : 'flex-start',
        mb: 1,
    };

    switch (message.type) {
        case 'text':
            return (
                <Box sx={messageContainerStyle}>
                    <Paper elevation={1} sx={messageStyle}>
                        <MessageContent isSent={isSent} variant="body1">{message.content}</MessageContent>
                    </Paper>
                </Box>
            );
        case 'image':
            return (
                <Box sx={messageContainerStyle}>
                    <Paper elevation={1} sx={messageStyle}>
                        <img src={message.url} alt="Message Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </Paper>
                </Box>
            );
        case 'link':
            return (
                <Box sx={messageContainerStyle}>
                    <Paper elevation={1} sx={messageStyle}>
                        <Link href={message.url} target="_blank" rel="noopener noreferrer">
                            <MessageContent isSent={isSent} variant="body1">{message.content}</MessageContent>
                        </Link>
                    </Paper>
                </Box>
            );
        default:
            return (
                <Box sx={messageContainerStyle}>
                    <Paper elevation={1} sx={messageStyle}>
                        <Typography variant="body1">Unsupported message type</Typography>
                    </Paper>
                </Box>
            );
    }
};

export default Message;