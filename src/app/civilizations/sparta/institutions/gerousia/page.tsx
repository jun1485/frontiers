import React from "react";

// 스파르타 사회 게루시아 기관 페이지
export default function SpartaGerousiaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        The Gerousia (Council of Elders)
      </h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Institution Overview</h2>
        <p className="text-gray-300 mb-4">
          The Gerousia is the governing council of Spartan Society, comprised of
          citizens over the age of 60. They make all major decisions for the
          society.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Functions</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Policy Making</li>
          <li>Legislation</li>
          <li>Maintaining Social Order</li>
          <li>Preserving Traditional Values</li>
        </ul>
      </div>
    </div>
  );
}
