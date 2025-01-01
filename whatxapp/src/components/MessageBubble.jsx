// src/components/MessageBubble.jsx

import React from "react";

const MessageBubble = ({ message }) => {
  return (
    <div className={`message ${message.sender === "user" ? "sent" : "received"}`}>
      {message.text}
    </div>
  );
};

export default MessageBubble;

