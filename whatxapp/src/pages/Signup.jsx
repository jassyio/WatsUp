import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call to register user
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="block w-full border rounded-md p-2 mb-4"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full border rounded-md p-2 mb-4"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block w-full border rounded-md p-2 mb-4"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            Sign Up
          </button>
        </form>
      </motion.div>
    </div>
  );
}
