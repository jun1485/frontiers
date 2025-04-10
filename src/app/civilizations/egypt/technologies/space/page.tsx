import React from "react";

// 신 이집트 우주 기술 페이지
export default function EgyptSpaceTechPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Egypt Space Technology</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Deep Space Exploration
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Deep Space Hibernation Research</li>
              <li>Space Colony Development</li>
              <li>Mars Exploration Technology</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Spacecraft Technology
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Advanced Propulsion Systems</li>
              <li>Life Support Systems</li>
              <li>Space Navigation Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
