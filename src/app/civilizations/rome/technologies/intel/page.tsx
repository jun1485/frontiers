import React from "react";

// 로마 제국 정보 작전 기술 페이지
export default function RomeIntelTechPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Intelligence Operations Technology
      </h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Intelligence Gathering Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Signal Interception</li>
              <li>Satellite Surveillance</li>
              <li>Human Intelligence Collection</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Operation Support Technologies
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Disguise Technology</li>
              <li>Communication Encryption</li>
              <li>Equipment Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
