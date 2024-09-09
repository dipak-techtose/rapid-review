// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./shared/components/header";
import Footer from "./shared/components/footer";
import Sidebar from "./shared/components/sidebar";
import Dashboard from "./layout/modules/dashboard";
import DocumentUpload from "./layout/modules/document-upload";
import Login from "./auth/login";
import DragAndDrop from "./layout/modules/drag-n-drop";
import ReportScreen from "./layout/modules/report-screen";
import InReviewDocument from "./layout/modules/in-review-document";
import UserProfileSettings from "./layout/modules/user-profile-setting";
import DocumentDetails from "./layout/modules/document-details";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes - no Header, Sidebar, or Footer */}
        <Route path="/login" element={<Login />} />

        {/* Main Application Layout */}
        <Route element={
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <div className="main-content w-full">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/document-upload" element={<DocumentUpload />} />
                  <Route path="/upload" element={<DragAndDrop />} />
                  <Route path="/report" element={<ReportScreen />} />
                  <Route path="/loader" element={<InReviewDocument />} />
                  <Route path="/account" element={<UserProfileSettings />} />
                  <Route path="/document-details" element={<DocumentDetails />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        }>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/upload" element={<DragAndDrop />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/loader" element={<InReviewDocument />} />
          <Route path="/account" element={<UserProfileSettings />} />
          <Route path="/document-details" element={<DocumentDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
