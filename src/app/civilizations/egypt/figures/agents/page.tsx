import React from "react";

// 신 이집트 ERIS 페이지
export default function EgyptAgentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ERIS Agents</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Agents</h2>
        <p className="text-gray-300 mb-4">
          Detailed information about key ERIS agents will be updated soon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Commander Osiris</h3>
            <p className="text-gray-300">
              Commander of the &apos;Amun&apos;s Dream&apos; Mars exploration
              mission. Experiencing personal conflicts between family
              (relationship with daughter Bastet) and mission duties, while
              maintaining mission security against Roman interference.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Other Key Agents</h3>
            <p className="text-gray-300">Detailed information coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
