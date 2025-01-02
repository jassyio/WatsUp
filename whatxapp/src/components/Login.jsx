import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(true); // Flag to switch between email login and username creation

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        // Call API to check if the email exists
        const response = await axios.post("http://localhost:3001/login/email", { email });
        
        if (response.data.error) {
          setError(response.data.error); // Display error if user is not found
        } else {
          setIsEmailLogin(false); // After email login, proceed to create a username
        }
      } catch (err) {
        setError("There was an error logging in, please try again.");
        console.error(err);
      }
    } else {
      setError("Please enter a valid email.");
    }
  };

  const handleUsernameCreation = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      try {
        // Call API to create the username after email login
        const response = await axios.post("http://localhost:3001/signup", { email, username });

        if (response.data.error) {
          setError(response.data.error); // Display error if username is taken
        } else {
          onLogin(username); // Set logged-in user with the created username
        }
      } catch (err) {
        setError("There was an error creating the username, please try again.");
        console.error(err);
      }
    } else {
      setError("Please enter a username.");
    }
  };

  return (
    <div className="signin-container">
      <h1>Welcome to WhatXapp</h1>

      {isEmailLogin ? (
        // Step 1: Email Login Form
        <form className="signin-form" onSubmit={handleEmailLogin}>
          <input
            type="email"
            className="email-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="signin-button">
            Sign In with Email
          </button>
        </form>
      ) : (
        // Step 2: Username Creation Form
        <form className="signin-form" onSubmit={handleUsernameCreation}>
          <input
            type="text"
            className="username-input"
            placeholder="Create your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="signin-button">
            Create Username
          </button>
        </form>
      )}

      {error && <div className="error-message">{error}</div>} {/* Display error message */}
    </div>
  );
};

export default Login;

