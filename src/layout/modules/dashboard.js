// src/components/Dashboard.jsx

import React from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale, RadarController } from 'chart.js';
import { FaFilter,FaFileAlt, FaRegClock, FaCheckCircle } from 'react-icons/fa';

ChartJS.register(
  CategoryScale, LinearScale, LineElement, PointElement, BarElement, ArcElement, RadialLinearScale, RadarController,
  Title, Tooltip, Legend
);

const Dashboard = () => {
  // Sample data for charts
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Reviews Completed',
      data: [30, 40, 45, 50, 60, 70, 80],
      fill: false,
      borderColor: '#4A90E2',
      tension: 0.1,
    }]
  };

  const barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Pending Reviews',
      data: [120, 150, 180, 200],
      backgroundColor: '#E94E77',
    }]
  };

  const pieData = {
    labels: ['Completed', 'Pending', 'In Review'],
    datasets: [{
      data: [300, 50, 150],
      backgroundColor: ['#4A90E2', '#E94E77', '#F5A623'],
    }]
  };

  const radarData = {
    labels: ['Speed', 'Quality', 'Efficiency', 'Accuracy'],
    datasets: [{
      label: 'Performance Metrics',
      data: [80, 70, 90, 85],
      backgroundColor: 'rgba(74, 144, 226, 0.2)',
      borderColor: '#4A90E2',
    }]
  };

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
      {/* Total Documents Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <FaFileAlt className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Documents</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
        </div>
      </div>

      {/* Pending Reviews Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <FaRegClock className="text-3xl text-yellow-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold">456</p>
          </div>
        </div>
      </div>

      {/* Completed Reviews Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <FaCheckCircle className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Completed Reviews</h3>
            <p className="text-3xl font-bold">789</p>
          </div>
        </div>
      </div>
    </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Review Trends</h3>
          <div className="h-64">
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Pending Reviews by Quarter</h3>
          <div className="h-64">
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Document Status Distribution</h3>
          <div className="h-64">
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="h-64">
            <Radar data={radarData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
          Recent Activity
          <FaFilter className="text-gray-400 cursor-pointer hover:text-white" />
        </h3>
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-01</td>
              <td className="px-6 py-4 whitespace-nowrap">Reviewed document #1234</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-400">Completed</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-02</td>
              <td className="px-6 py-4 whitespace-nowrap">Pending review for document #5678</td>
              <td className="px-6 py-4 whitespace-nowrap text-yellow-400">Pending</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-03</td>
              <td className="px-6 py-4 whitespace-nowrap">Completed review of document #9101</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-400">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
          Documents Overview
          <FaFilter className="text-gray-400 cursor-pointer hover:text-white" />
        </h3>
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Document ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date Uploaded</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1234</td>
              <td className="px-6 py-4 whitespace-nowrap">Legal Agreement</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-400">Completed</td>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-01</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">5678</td>
              <td className="px-6 py-4 whitespace-nowrap">Confidential Report</td>
              <td className="px-6 py-4 whitespace-nowrap text-yellow-400">Pending</td>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-02</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">9101</td>
              <td className="px-6 py-4 whitespace-nowrap">Client Contract</td>
              <td className="px-6 py-4 whitespace-nowrap text-green-400">Completed</td>
              <td className="px-6 py-4 whitespace-nowrap">2024-09-03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
