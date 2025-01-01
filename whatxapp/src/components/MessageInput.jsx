// src/components/MessageInput.jsx

import React, { useState } from "react";

const MessageInput = ({ socket, chatId }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("sendMessage", { chatId, message });
      setMessage("");
    }
  };

  return (
    <form className="message-input" onSubmit={sendMessage}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
