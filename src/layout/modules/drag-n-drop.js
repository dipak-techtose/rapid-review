// src/components/DragAndDrop.jsx

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DragAndDrop = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      // Navigate to the /loader screen
      navigate('/loader');
    }
  };

  return (
    <div className="upload-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white shadow-lg">
          Upload Your Legal Documents for AI Review
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Fast, Secure, and AI-Driven Legal Document Analysis
        </p>
      </div>

      {/* Main Upload Section */}
      <div className="relative w-full max-w-4xl flex justify-center items-center">
        {/* Image upload area */}
        <div className="bg-gray-800 p-10 rounded-xl shadow-2xl border-2 border-dashed border-gray-700 flex flex-col justify-center items-center">
          <div className="w-64 h-40 bg-gray-700 border-2 border-dashed border-gray-600 rounded-lg flex flex-col justify-center items-center shadow-lg">
            <button
              onClick={handleFileUploadClick}
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-all shadow-md"
            >
              Upload your file
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <p className="text-gray-400 mt-2">Or drop a file here</p>
          </div>
          <p className="text-gray-400 mt-5">Supported file formats: PDF, DOCX, TXT, .jpeg</p>
        </div>

        {/* Left floating image */}
        <div className="absolute -left-20 top-20 shadow-lg">
          <img
            src="https://ironcladapp.com/wp-content/uploads/2021/08/legal-document-review-hero.png"
            alt="Floating left"
            className="w-32 h-32 rounded-xl transform rotate-6"
          />
        </div>

        {/* Right floating image */}
        <div className="absolute -right-20 top-20 shadow-lg">
          <img
            src="https://media.licdn.com/dms/image/C4D12AQG7MZBH9sajRA/article-cover_image-shrink_720_1280/0/1623153085007?e=2147483647&v=beta&t=MZkvtE1ECUfptGO11HRpqZWf_AWszH5BfMwL915UkYg"
            alt="Floating right"
            className="w-32 h-32 rounded-xl transform -rotate-6"
          />
        </div>
      </div>

      {/* Footer section with additional sample images */}
      <div className="mt-12 text-center text-gray-400">
        <p className="text-lg">Your files are encrypted end-to-end 🔒</p>
        <div className="flex justify-center space-x-4 mt-4">
          <p>
            Protected with AES-256 encryption for maximum data security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
