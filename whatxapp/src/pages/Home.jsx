import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to WhatXapp</h1>
      <p>Select an option to continue:</p>
      <div className="navigation-links">
        <Link to="/profile">Go to Profile</Link>
        <Link to="/chatroom">Start Chatting</Link>
      </div>
    </div>
  );
};

export default Home;
