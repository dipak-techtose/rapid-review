// src/components/RecentDocumentReviews.jsx

import React, { useState } from 'react';
import { FaFilter, FaFileAlt, FaCalendarAlt, FaUser, FaInfoCircle, FaDownload, FaSearch } from 'react-icons/fa';

const RecentDocumentReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const documents = [
    {
      title: 'Contract Agreement',
      uploadDate: '2024-09-01',
      author: 'Alice Johnson',
      status: 'Reviewed',
      reviewer: 'Bob Smith',
      reviewDate: '2024-09-05',
    },
    {
      title: 'Non-Disclosure Agreement',
      uploadDate: '2024-09-02',
      author: 'Carol White',
      status: 'Pending',
      reviewer: 'David Brown',
      reviewDate: '',
    },
    {
      title: 'Employment Contract',
      uploadDate: '2024-09-03',
      author: 'Eve Davis',
      status: 'Reviewed',
      reviewer: 'Frank Wilson',
      reviewDate: '2024-09-06',
    },
    {
      title: 'Lease Agreement',
      uploadDate: '2024-09-04',
      author: 'Grace Lee',
      status: 'In Progress',
      reviewer: 'Hannah Green',
      reviewDate: '',
    },
    {
      title: 'Service Agreement',
      uploadDate: '2024-09-05',
      author: 'Ivy Moore',
      status: 'Reviewed',
      reviewer: 'Jack Taylor',
      reviewDate: '2024-09-07',
    },
    // Add more dummy data as needed for pagination
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedDocuments = filteredDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <div className="mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">Recent Document Reviews</h2>

        {/* Filters and Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Documents List</h3>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
              <FaFilter className="mr-2" /> Filters
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md pl-10"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Document Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-3 px-6 text-left text-sm font-medium">Title</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Upload Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Author</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Status</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Reviewer</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Review Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedDocuments.map((doc, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="py-3 px-6 text-sm">{doc.title}</td>
                  <td className="py-3 px-6 text-sm">{doc.uploadDate}</td>
                  <td className="py-3 px-6 text-sm">{doc.author}</td>
                  <td className="py-3 px-6 text-sm">
                    <span className={`px-2 py-1 rounded-md ${doc.status === 'Reviewed' ? 'bg-green-500' : doc.status === 'Pending' ? 'bg-yellow-500' : 'bg-blue-500'}`}>{doc.status}</span>
                  </td>
                  <td className="py-3 px-6 text-sm">{doc.reviewer}</td>
                  <td className="py-3 px-6 text-sm">{doc.reviewDate || '-'}</td>
                  <td className="py-3 px-6 text-sm text-center">
                    <FaDownload className="text-gray-400 cursor-pointer hover:text-gray-200" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            Previous
          </button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentDocumentReviews;
