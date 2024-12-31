import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css"; // Include custom styles here

const socket = io("http://localhost:3001"); // Replace with your backend's local URL

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>WhatXapp</h1>
      </header>
      <main className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
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
