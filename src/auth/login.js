// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call with a timeout
    setTimeout(() => {
      setLoading(false);
      if (email === 'john@gmail.com' && password === '123456') {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Invalid email or password.');
      }
    }, 5000); // Loader visible for 5 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(https://source.unsplash.com/1600x900/?technology)` }}>
      <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4zm12-4a8 8 0 01-8 8v-4a4 4 0 014-4h4z"></path>
                </svg>
                <span className="ml-3">Logging in...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don’t have an account? <a href="#" className="text-blue-400 hover:text-blue-500 font-medium">Sign Up</a>
          </p>
        </div>
        
        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
