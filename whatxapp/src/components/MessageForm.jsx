import React, { useState, useContext } from "react";
import { SocketContext } from "../App";

const MessageForm = () => {
  const [message, setMessage] = useState(""); // Message input state
  const { socket, username } = useContext(SocketContext); // Access socket and username from context

  // Handle sending messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", { user: username, content: message }); // Send message to server with username
      setMessage(""); // Clear input field
    }
  };

  return (
    <form className="message-form" onSubmit={sendMessage}>
      <input
        type="text"
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
};

export default MessageForm;
