import React, { useState, useRef } from 'react';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import MoodIcon from '@mui/icons-material/Mood';

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const inputRef = useRef(null);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            onSendMessage(message.trim());
            setMessage('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    const handleEmojiClick = (emojiObject) => {
        setMessage(prevMessage => prevMessage + emojiObject.emoji);
        setShowEmojiPicker(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <Box sx={{ p: 2, borderTop: '1px solid #eee' }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                inputRef={inputRef} // Set the ref
                InputProps={{
                    endAdornment: (
                        <React.Fragment>
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                    <MoodIcon />
                                </IconButton>
                            </InputAdornment>
                            <InputAdornment position="end">
                                <IconButton onClick={handleSendMessage}>
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        </React.Fragment>
                    ),
                }}
            />
            {showEmojiPicker && (
                <Box sx={{ position: 'absolute', bottom: '80px', right: '20px', zIndex: 1000 }}>
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </Box>
            )}
        </Box>
    );
};

export default MessageInput;