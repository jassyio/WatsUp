import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const BACKEND_URL = "http://localhost:3001"; // Backend URL
const socket = io(BACKEND_URL);

const ChatBox = ({ loggedInUser, selectedUser }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      if (
        (msg.sender === loggedInUser && msg.receiver === selectedUser) ||
        (msg.sender === selectedUser && msg.receiver === loggedInUser)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.off("message");
  }, [loggedInUser, selectedUser]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { sender: loggedInUser, receiver: selectedUser, message };
      socket.emit("message", msg);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === loggedInUser ? "sent" : "received"
            }`}
          >
            <strong>{msg.sender}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={sendMessage}>
        <input
          type="text"
          className="message-input"
          placeholder={`Message ${selectedUser}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
