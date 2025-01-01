import React, { useContext } from "react";
import { SocketContext } from "../App";

const MessageList = () => {
  const { messages } = useContext(SocketContext); // Access messages from context

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <strong>{msg.user}: </strong>
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
