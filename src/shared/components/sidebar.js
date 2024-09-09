// src/components/Sidebar.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-gray-300 w-64 ${
        isCollapsed ? "w-20" : "w-64"
      } h-screen transition-all duration-300`}
    >
      {/* Menu */}
      <nav className="mt-4">
        <ul className="mt-10">
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-dashboard mr-5"></li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-file mr-5"></li>
            <Link to="/upload">Document Upload</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="	fa fa-file-excel-o mr-5"></li>
            <Link to="/report">Reports</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-search mr-5"></li>
            <Link to="/document-details">Document in review</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-history mr-5"></li>
            <Link to="/account">Account</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-lock mr-5"></li>
            <Link to="/document-upload">Security</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-link mr-5"></li>
            <Link to="/document-upload">Integration</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-tasks mr-5"></li>
            <Link to="/document-upload">Activities</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-check-circle-o mr-5"></li>
            <Link to="/document-upload">Terms & Conditions</Link>
          </li>
          <li className="hover:bg-gray-700 rounded">
            <li className="fa fa-comments-o mr-5"></li>
            <Link to="/document-upload">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
