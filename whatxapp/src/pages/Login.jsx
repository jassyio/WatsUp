import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
    <div className="text-center">
      <img
        src="/path/to/funny-animal.gif" // Replace with your loading animation image
        alt="Loading..."
        className="w-32 h-32 mx-auto mb-4"
      />
      <p className="text-xl font-bold">Don't spoil the tea... Booting up!</p>
    </div>
  </div>
);

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Simulate loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3-second loading
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/chatroom");
    } else {
      alert("Please enter a username!");
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white"
    >
      <h1 className="text-3xl font-bold mb-6">Welcome to WhatXapp</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 mb-4 w-80 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleLogin}
        className="bg-green-500 px-6 py-3 rounded-lg font-medium hover:bg-green-600"
      >
        Login
      </button>
    </motion.div>
  );
};

export default Login;
