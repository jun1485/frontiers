import React from "react";

// 로마 제국 정치 지도자 페이지
export default function RomeLeadersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Roman Empire Political Leaders
      </h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Leaders</h2>
        <p className="text-gray-300 mb-4">
          Detailed information about Roman Empire's political leaders will be
          updated soon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Supreme Leader</h3>
            <p className="text-gray-300">Detailed information coming soon</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cabinet Ministers</h3>
            <p className="text-gray-300">Detailed information coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
