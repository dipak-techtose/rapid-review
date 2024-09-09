// src/components/InReviewDocument.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const messages = [
  'End-to-End Encrypted. Please wait...',
  'Securing Your Data...',
  'Processing Your Upload...',
  'Analyzing with AI...',
  'Validating Information...',
  'Generating Report...',
  'Almost There...',
  'Finalizing Process...',
];

const InReviewDocument = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(() => {
            navigate('/report'); // Navigate to the /report screen
          }, 500); // Short delay before redirect
          return 100;
        }
        return prevProgress + 100 / (12 * 10); // 100% over 12 seconds
      });
    }, 100); // Update progress every 100ms

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
      <div className="relative flex flex-col items-center w-100">
        {/* Circular Loader */}
        <div className="relative flex items-center justify-center w-32 h-32">
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="10"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={283 - (progress / 100) * 283}
              className="transition-transform duration-[12000ms]"
            />
          </svg>
          <div className="absolute w-16 h-16 rounded-full border-4 border-gray-700 bg-gray-900 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-400 border-t-4 border-t-white rounded-full animate-spin"></div>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="bg-gray-700 h-2 w-full rounded mt-4 relative">
          <div
            className="bg-white h-2 rounded absolute top-0 left-0"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* Message */}
        <p className="mt-4 text-lg text-center">{messages[messageIndex]}</p>
      </div>
    </div>
  );
};

export default InReviewDocument;
