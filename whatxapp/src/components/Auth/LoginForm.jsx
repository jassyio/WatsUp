import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-whatsapp-dark mb-6">
          Welcome to WhatXapp
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-whatsapp"
          />
          <button
            type="submit"
            className="w-full bg-whatsapp text-white py-3 rounded-lg font-medium hover:bg-whatsapp-dark"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
  export default Login;
  