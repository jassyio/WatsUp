import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Welcome to WhatXapp</h1>
      <p className="text-lg mb-6">Select an option to continue:</p>
      <div className="navigation-links space-y-4">
        <Link
          to="/profile"
          className="block px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition"
        >
          Go to Profile
        </Link>
        <Link
          to="/chatroom"
          className="block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Start Chatting
        </Link>
      </div>
    </div>
  );
};

export default Home;
