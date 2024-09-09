// src/components/UserProfileSettings.jsx

import React, { useState } from 'react';
import { FaSave, FaEdit, FaTimes, FaLock, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const UserProfileSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    notification: true,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleToggleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, notification: e.target.checked }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePasswordChange = () => {
    setIsChangingPassword(false);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className=" bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">User Profile & Settings</h2>

        {/* Profile Information & Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Profile Information */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaUser className="text-2xl text-blue-400 mr-4" />
                <div className="flex-1">
                  <label className="block text-lg font-semibold">Name:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                      className="bg-gray-600 text-white p-2 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-lg">{user.name}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-green-400 mr-4" />
                <div className="flex-1">
                  <label className="block text-lg font-semibold">Email:</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                      className="bg-gray-600 text-white p-2 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-lg">{user.email}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-2xl text-orange-400 mr-4" />
                <div className="flex-1">
                  <label className="block text-lg font-semibold">Phone:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputChange}
                      className="bg-gray-600 text-white p-2 rounded-md w-full"
                    />
                  ) : (
                    <p className="text-lg">{user.phone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-6">Settings</h3>
            <div className="flex items-center">
              <label className="text-lg font-semibold">Enable Notifications:</label>
              <input
                type="checkbox"
                checked={user.notification}
                onChange={handleToggleChange}
                className="ml-4"
              />
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-6">Change Password</h3>
          {isChangingPassword ? (
            <div>
              <div className="mb-4">
                <label className="block text-lg font-semibold">Current Password:</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={user.currentPassword}
                  onChange={handleInputChange}
                  className="bg-gray-600 text-white p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold">New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={user.newPassword}
                  onChange={handleInputChange}
                  className="bg-gray-600 text-white p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold">Confirm New Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-gray-600 text-white p-2 rounded-md w-full"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePasswordChange}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  onClick={() => setIsChangingPassword(false)}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsChangingPassword(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaLock className="mr-2" /> Change Password
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaSave className="mr-2" /> Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FaTimes className="mr-2" /> Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaEdit className="mr-2" /> Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
