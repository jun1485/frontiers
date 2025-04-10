import React from "react";

// 로마 제국 뇌 조작 기술 페이지
export default function RomeBrainTechPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Brain Manipulation Technology</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Brain Manipulation Techniques
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Brain Signal Manipulation</li>
              <li>Consciousness Control</li>
              <li>Memory Manipulation</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Application Fields</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Information Gathering</li>
              <li>Psychological Warfare</li>
              <li>Personnel Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
