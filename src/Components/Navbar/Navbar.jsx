// src/Components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center gap-4">
      
      {/* Logo on the left */}
      <Link to="/" className="h-16 w-30 overflow-hidden rounded-full flex items-center justify-center ml-2">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Center Nav Options */}
      <div className="flex space-x-6 text-black font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/provider" className="hover:underline">Provider</Link>
      </div>

      {/* Profile and Subscribe on the right */}
      <div className="flex items-center space-x-4 mr-2">
        <button className="text-white font-semibold py-2 px-4 rounded-full transition duration-300 border border-white hover:bg-white hover:text-blue-800">
          Subscribe
        </button>
        <img
          src="/Profile.svg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </nav>
  );
};