import React from 'react';

const ReportScreen = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      {/* Report Summary Section */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Medical Report Summary</h1>
        <p className="text-lg">The report indicates mild anemia, a high white blood cell count suggesting a possible infection, a low platelet count, and a positive result for malaria (P. Vivax). No typhoid infection was detected based on the Widal test results.</p>
      </div>

      {/* Patient Information Section */}
      <div className="bg-gray-800 p-6 rounded-md shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-2">Patient Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Name:</strong> Mrs. Kavita Patil</p>
          <p><strong>Age & Sex:</strong> 46 Years / Female</p>
          <p><strong>Registration No:</strong> 240922400032</p>
          <p><strong>Referred By:</strong> Dr. Vishal B Zinzala</p>
        </div>
      </div>

      {/* Complete Blood Count Section as Table */}
      <div className="bg-gray-800 p-6 rounded-md shadow-md mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Complete Blood Count (CBC)</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-700 px-4 py-2 text-left">Parameter</th>
              <th className="border-b border-gray-700 px-4 py-2 text-left">Result</th>
              <th className="border-b border-gray-700 px-4 py-2 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Haemoglobin (Hb)</td>
              <td className="border-b border-gray-700 px-4 py-2">11.2 gm/dl</td>
              <td className="border-b border-gray-700 px-4 py-2 text-yellow-400">Low</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">RBC Count</td>
              <td className="border-b border-gray-700 px-4 py-2">4.14 million cells/cu.mm</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Hematocrit (HCT)</td>
              <td className="border-b border-gray-700 px-4 py-2">33.4%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-yellow-400">Low</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">MCV</td>
              <td className="border-b border-gray-700 px-4 py-2">80.68 fl</td>
              <td className="border-b border-gray-700 px-4 py-2 text-yellow-400">Low</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">MCH</td>
              <td className="border-b border-gray-700 px-4 py-2">27.05 pg</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">MCHC</td>
              <td className="border-b border-gray-700 px-4 py-2">33.53 g/dl</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">RDW</td>
              <td className="border-b border-gray-700 px-4 py-2">13.7%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Total WBC Count</td>
              <td className="border-b border-gray-700 px-4 py-2">13,000 cells/cu.mm</td>
              <td className="border-b border-gray-700 px-4 py-2 text-red-400">High</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Neutrophils</td>
              <td className="border-b border-gray-700 px-4 py-2">88%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-red-400">High</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Lymphocytes</td>
              <td className="border-b border-gray-700 px-4 py-2">8%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-yellow-400">Low</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Eosinophils</td>
              <td className="border-b border-gray-700 px-4 py-2">2%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Monocytes</td>
              <td className="border-b border-gray-700 px-4 py-2">2%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Basophils</td>
              <td className="border-b border-gray-700 px-4 py-2">0%</td>
              <td className="border-b border-gray-700 px-4 py-2 text-green-400">Normal</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Platelet Count</td>
              <td className="border-b border-gray-700 px-4 py-2">79,000 /cmm</td>
              <td className="border-b border-gray-700 px-4 py-2 text-yellow-400">Low</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">RBC Morphology</td>
              <td className="border-b border-gray-700 px-4 py-2" colSpan="2">Hypochromic Microcytic</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">WBC Morphology</td>
              <td className="border-b border-gray-700 px-4 py-2" colSpan="2">Mild Neutrophilic Leucocytosis</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Platelet on Smear</td>
              <td className="border-b border-gray-700 px-4 py-2" colSpan="2">Decreased</td>
            </tr>
            <tr>
              <td className="border-b border-gray-700 px-4 py-2">Malaria Parasite</td>
              <td className="border-b border-gray-700 px-4 py-2" colSpan="2">Ring and Trophozoites of P. Vivax (++)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Widal Test Section */}
      <div className="bg-gray-800 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-2">Widal Test</h2>
        <ul className="space-y-2">
          <li><span className="font-semibold">Typhi O Antigen:</span> 1:40 (Negative)</li>
          <li><span className="font-semibold">Typhi H Antigen:</span> 1:40 (Negative)</li>
          <li><span className="font-semibold">Result:</span> Negative for typhoid fever</li>
        </ul>
      </div>
    </div>
  );
};

export default ReportScreen;
