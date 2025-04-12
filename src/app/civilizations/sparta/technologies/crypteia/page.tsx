import React from "react";
import { CardLayout } from "@/components";

// 스파르타 사회 크립테이아 기술 페이지
export default function SpartaCrypteiaTechPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Krypteia Technologies</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Intelligence Gathering Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Advanced Surveillance Systems</li>
              <li>Disguise Technology</li>
              <li>Signal Interception Equipment</li>
              <li>Biometric Identification Systems</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Operation Support Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Communication Encryption</li>
              <li>Location Tracking Systems</li>
              <li>Operation Planning Software</li>
              <li>Equipment Support Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
