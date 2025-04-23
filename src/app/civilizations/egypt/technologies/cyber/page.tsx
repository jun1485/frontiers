import React from "react";
import { CardLayout } from "@/components";

// 신 이집트 사이버 기술 페이지
export default function EgyptCyberTechPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">New Egypt Cyber Technology</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Hacking and Covert Operations
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Advanced Hacking Tools and Systems</li>
              <li>Digital Infiltration Technology</li>
              <li>Cyber Defense Infrastructure</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Surveillance Systems</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Advanced Biometric Scanners</li>
              <li>AI Surveillance Systems</li>
              <li>Holographic Displays</li>
              <li>AI Assistants</li>
            </ul>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
