import React from "react";

// 스파르타 사회 군사 기술 페이지
export default function SpartaMilitaryTechPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Military Technologies</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Combat Technologies</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Advanced Combat Simulation Systems</li>
              <li>Soldier Biometric Monitoring</li>
              <li>Networked Battlefield Communications</li>
              <li>Holographic War Planning Systems</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Training Systems</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Virtual Reality Training</li>
              <li>Physical Condition Monitoring</li>
              <li>Tactical Training Simulations</li>
              <li>Teamwork Training Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
