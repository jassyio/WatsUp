import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="left-content">
        <div className="profile-icon"></div>
        <h1>WhatXapp</h1>
      </div>
      <nav className="icons">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/chatroom">Chats</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </header>
  );
};

export default Navbar;
