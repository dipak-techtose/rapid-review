import React, { useState } from 'react';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('English');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};

    if (!file) formErrors.file = 'File is required.';
    if (!description) formErrors.description = 'Description is required.';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 5000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Upload File</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-dashed border-2 border-gray-500 p-4 rounded-lg">
          <label className="block text-sm font-medium mb-2">Upload File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="bg-gray-700 p-2 rounded-lg w-full"
          />
          {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Enter Description:</label>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            className="bg-gray-700 p-2 rounded-lg w-full"
            rows="4"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select Language:</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-700 p-2 rounded-lg w-full"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white p-4 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="w-6 h-6 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              <p className="ml-4">Submitting your data...</p>
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-2">Submission Report</h3>
            <p className="mb-4">Your file has been successfully uploaded. Below are the details of your submission:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>File:</strong> {file ? file.name : 'No file selected'}</li>
              <li><strong>Description:</strong> {description}</li>
              <li><strong>Language:</strong> {language}</li>
            </ul>
            <button
              onClick={handleClosePopup}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
