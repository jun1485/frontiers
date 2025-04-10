import React from "react";

// 스파르타 사회 크립테이아 기관 페이지
export default function SpartaCrypteiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Crypteia Command Center</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Institution Overview</h2>
        <p className="text-gray-300 mb-4">
          The Crypteia Command Center is the headquarters for Sparta's elite
          intelligence and security forces. They monitor and control the
          Crypteia ritual activities that take place in Pamisos.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Functions</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Information collection and analysis</li>
          <li>Security maintenance</li>
          <li>Crypteia ritual monitoring</li>
          <li>Military training management</li>
        </ul>
      </div>
    </div>
  );
}
