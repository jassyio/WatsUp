import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username); // Set logged-in user
    }
  };

  return (
    <div className="signin-container">
      <h1>Welcome to WhatXapp</h1>
      <form className="signin-form" onSubmit={handleLogin}>
        <input
          type="text"
          className="username-input"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
