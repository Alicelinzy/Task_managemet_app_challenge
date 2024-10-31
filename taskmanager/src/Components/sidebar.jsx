// components/Sidebar.jsx
import React from 'react';
import { FiHome, FiClipboard, FiFolder, FiMessageCircle, FiSettings } from 'react-icons/fi';
import {FaBookOpen,} from 'react-icons/fa6';


const Sidebar = () => {
    return (
      <div className="flex flex-col h-screen w-64 bg-gray-50 p-4 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
          <FaBookOpen className=" text-gray-100" />
          </div>
          <span className="ml-3 text-xl font-semibold">Nuegas</span>
        </div>
       
      {/* Navigation Links */}
      <nav className="flex flex-col space-y-5 ">
        <a href="#overview" className="flex items-center text-gray-700 hover:text-black-500 hover:bg-gray-200 p-1 transition duration-200">
          <FiHome className="mr-3" /> Overview
        </a>
        <a href="#tasks" className="flex items-center text-gray-700 hover:text-black-500  hover:bg-gray-200 p-1 transition duration-200">
          <FiClipboard className="mr-3" /> Tasks
        </a>
        <a href="#projects" className="flex items-center text-gray-700 hover:text-black-500  hover:bg-gray-200 p-1 transition duration-200">
          <FiFolder className="mr-3" /> Projects
        </a>
        <a href="#messages" className="flex items-center text-gray-700 hover:text-black-500  hover:bg-gray-200 p-1 transition duration-200">
          <FiMessageCircle className="mr-3" /> Messages
        </a>
        <a href="#settings" className="flex items-center text-gray-700 hover:text-black-500  hover:bg-gray-200 p-1 transition duration-200">
          <FiSettings className="mr-3" /> Settings
        </a>
      </nav>

      
      {/* Button at the Bottom */}
      <div className="mt-auto">
        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full mt-10">
          Go to Center
        </button>
      </div>
    </div>
  );
};

export default Sidebar;