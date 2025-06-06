import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      {/* Round Logo on the left */}
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Round Profile and Subscription Button on the right */}
      <div className="flex items-center space-x-4">
        <button className=" text-white font-semibold py-2 px-4 rounded-full transition duration-300">
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