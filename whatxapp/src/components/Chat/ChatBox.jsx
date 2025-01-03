import React, { useEffect } from 'react';
import { useChat } from '../../contexts/Chatcontext';
import MessageTypingIndicator from '../Shared/MessageTypingIndicator';

const ChatBox = () => {
  const { messages, getMessages } = useChat();

  useEffect(() => {
    const roomId = 1; // Replace with actual room ID
    getMessages(roomId);
  }, [getMessages]);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <span>{msg.sender}</span>: {msg.message}
          </div>
        ))}
      </div>
      <MessageTypingIndicator />
    </div>
  );
};

export default ChatBox;
