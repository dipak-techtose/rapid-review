// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here if needed (e.g., clearing tokens)

    // Navigate to the login screen
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        <h1><i className='fa fa fa-500px'></i>&nbsp; Rapid Review</h1>
      </div>
      
      {/* Profile and Logout */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyP62RjdtcYgudg0AhQvEOKf75k1zlUvNtTw&s"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-600"
          />
          <span className="ml-2">John Doe</span>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
