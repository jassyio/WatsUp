import React, { useState } from 'react';
import { useChat } from '../../hooks/useChat';
import Button from '../Shared/Button';

const MessageInput = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(roomId, message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default MessageInput;
