import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ContactList from "./components/ContactList"; // Import the ContactList component
import "./App.css";

// Replace with the backend URL when deployed
const socket = io("https://watsup-6ofq.onrender.com");

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alice" },
  ]); // Example static contacts, this can be fetched from the backend

  // Set user name function
  const setUser = () => {
    if (userName.trim()) {
      setIsNameSet(true);
    }
  };

  // Socket.io messages setup
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = { user: userName, text: message, to: selectedContact?.name };
      socket.emit("message", msg);
      setMessages((prev) => [...prev, msg]);
      setMessage("");
    }
  };

  const selectContact = (contact) => {
    setSelectedContact(contact);
    setMessages([]); // Clear messages when a new contact is selected
  };

  return (
    <div className="app-container">
      {!isNameSet ? (
        <div className="name-input">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={setUser}>Set Name</button>
        </div>
      ) : (
        <>
          <header className="app-header">
            <h1>WhatXapp</h1>
          </header>
          <main className="chat-container">
            {/* Contact List */}
            <ContactList contacts={contacts} selectContact={selectContact} />
            
            {/* Chat Window */}
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.user === userName ? 'sent' : 'received'}`}>
                  <strong>{msg.user}: </strong>{msg.text}
                </div>
              ))}
            </div>

            {/* Message Input */}
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
        </>
      )}
    </div>
  );
};

export default App;
