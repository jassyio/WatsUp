import React, { useState } from 'react';
import { Box, TextField, IconButton, List, ListItem, ListItemText, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'John Doe', content: 'Hello there!' },
    { sender: 'You', content: 'Hi! How’s it going?' },
  ]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { sender: 'You', content: message }]);
      setMessage('');
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5">Chat with John Doe</Typography>
      <Paper elevation={3} sx={{ marginTop: 2, padding: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={msg.sender}
                secondary={msg.content}
                sx={{ textAlign: msg.sender === 'You' ? 'right' : 'left' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          sx={{ marginRight: 2 }}
        />
        <IconButton color="primary" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatPage;
