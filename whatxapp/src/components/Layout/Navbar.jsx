import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-whatsapp-dark text-white py-3 px-6 shadow-md">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-bold">WhatXapp</h1>
      <button className="bg-whatsapp px-4 py-2 rounded text-sm font-medium hover:bg-whatsapp-dark">
        Logout
      </button>
    </div>
  </nav>
);

export default Navbar;

