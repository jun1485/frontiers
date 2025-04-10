import React from "react";

// 신 이집트 군사 조직 페이지
export default function EgyptMilitaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Egypt Military System</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Military Organization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Military Role of ERIS
            </h3>
            <p className="text-gray-300">
              ERIS serves as New Egypt's elite intelligence and cyber warfare
              unit, playing a crucial role in military operations. It performs
              various military roles through specialized departments such as
              cyber operations, signals intelligence, and covert operations.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Key Departments</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Cyber Operations Department</li>
              <li>Signals Intelligence Department</li>
              <li>Covert Operations Department</li>
              <li>Human Intelligence Department</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
