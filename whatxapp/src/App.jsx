import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css"; // Include custom styles here

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
const socket = io(BACKEND_URL);

const App = () => {
  const [username, setUsername] = useState(""); // Store username
  const [users, setUsers] = useState([]); // Store list of users
  const [selectedUser, setSelectedUser] = useState(null); // User selected to chat with
  const [message, setMessage] = useState(""); // Message input state
  const [messages, setMessages] = useState([]); // Messages list state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Fetch users once the user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetch(`${BACKEND_URL}/users`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data); // Set the users list
        })
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [isLoggedIn]);

  // Set up Socket.IO listeners
  useEffect(() => {
    socket.on("message", (msg) => {
      // Add the message to the local state (both sender and receiver should see the message)
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("users", (userList) => {
      setUsers(userList.filter((user) => user !== username));
    });

    return () => {
      socket.off("message");
      socket.off("users");
    };
  }, [username]);

  // Emit join event when user logs in
  useEffect(() => {
    if (isLoggedIn) {
      socket.emit("join", username);
    }
  }, [isLoggedIn, username]);

  // Handle sending messages
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && selectedUser) {
      const msg = { sender: username, receiver: selectedUser, message };
      socket.emit("message", msg); // Emit message event
      setMessages((prev) => [...prev, msg]); // Add message locally
      setMessage(""); // Clear input field
    }
  };

  // Handle user sign-in
  const handleSignIn = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  // Handle user logout
  const handleLogout = () => {
    socket.emit("leave", username); // Notify server of logout
    setIsLoggedIn(false);
    setUsername("");
    setSelectedUser(null);
    setMessages([]);
  };

  return (
    <div className="app-container">
      {/* Sign-in form */}
      {!isLoggedIn ? (
        <div className="signin-container">
          <h1>Welcome to WhatXapp</h1>
          <form className="signin-form" onSubmit={handleSignIn}>
            <input
              type="text"
              className="username-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <>
          {/* App Header */}
          <header className="app-header">
            <h1>WhatXapp</h1>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </header>

          {/* Main Container */}
          <main className="main-container">
            {/* User List */}
            <aside className="user-list">
              <h2>Users</h2>
              <ul>
                {users.length > 0 ? (
                  users.map((user) => (
                    <li
                      key={user.username}
                      className={`user-item ${selectedUser === user.username ? "selected" : ""}`}
                      onClick={() => setSelectedUser(user.username)}
                    >
                      {user.username}
                    </li>
                  ))
                ) : (
                  <li>No other users available to chat right now.</li>
                )}
              </ul>
            </aside>

            {/* Chat Container */}
            <section className="chat-container">
              {selectedUser ? (
                <>
                  {/* Messages Display */}
                  <div className="messages">
                    {messages
                      .filter(
                        (msg) =>
                          (msg.sender === username && msg.receiver === selectedUser) ||
                          (msg.sender === selectedUser && msg.receiver === username)
                      )
                      .map((msg, index) => (
                        <div
                          key={index}
                          className={`message ${msg.sender === username ? "sent" : "received"}`}
                        >
                          <strong>{msg.sender}:</strong> {msg.message}
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
                      placeholder={`Message ${selectedUser}`}
                    />
                    <button type="submit" className="send-button">
                      Send
                    </button>
                  </form>
                </>
              ) : (
                <div className="no-chat">
                  <p>Select a user to start chatting!</p>
                </div>
              )}
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
