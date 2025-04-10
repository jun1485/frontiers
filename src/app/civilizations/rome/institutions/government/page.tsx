import React from "react";

// 로마 제국 정부 기관 페이지
export default function RomeGovernmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Roman Empire Government Institutions
      </h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Government Structure</h2>
        <p className="text-gray-300 mb-4">
          Detailed information about the government structure of Roman Empire
          will be updated soon.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Departments</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Senate</li>
          <li>Executive Branch</li>
          <li>Judicial Branch</li>
          <li>Cabinet Council</li>
        </ul>
      </div>
    </div>
  );
}
