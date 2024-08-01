import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="top-bar bg-white p-4 shadow flex justify-between items-center">
      <button onClick={toggleSidebar} className="bg-gray-200 p-2">
        <FaBars />
      </button>
      <div className="flex items-center flex-grow mx-4">
        <FaSearch className="text-gray-400 absolute ml-3" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input px-10 py-2 border rounded w-full"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-sm font-medium">Stebin Ben</span>
        <img
          src="avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default TopBar;
