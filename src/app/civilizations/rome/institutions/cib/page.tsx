import React from "react";

// 로마 제국 중앙 정보국 페이지
export default function RomeCIBPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Central Intelligence Bureau</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Institution Overview</h2>
        <p className="text-gray-300 mb-4">
          Central Intelligence Bureau is Roman Empire's main intelligence
          agency, responsible for gathering information about New Egypt and
          other civilizations, as well as technical intelligence.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Functions</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Information Collection and Analysis</li>
          <li>Technical Intelligence Gathering</li>
          <li>Foreign Intelligence Operations</li>
          <li>Security Maintenance</li>
        </ul>
      </div>
    </div>
  );
}
