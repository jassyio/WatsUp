import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css"; // Include custom styles here

// Use environment variable for backend URL
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
const socket = io(BACKEND_URL);

const App = () => {
  const [message, setMessage] = useState(""); // Message input state
  const [messages, setMessages] = useState([]); // Messages list state

  // Set up Socket.IO listeners
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]); // Append new messages to state
    });

    // Cleanup on component unmount
    return () => socket.off("message");
  }, []);

  // Handle sending messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", message); // Send message to server
      setMessage(""); // Clear input field
    }
  };

  return (
    <div className="app-container">
      {/* App Header */}
      <header className="app-header">
        <h1>WhatXapp</h1>
      </header>

      {/* Chat Container */}
      <main className="chat-container">
        {/* Messages Display */}
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>

        {/* Message Input Form */}
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
      </main>
    </div>
  );
};

export default App;
