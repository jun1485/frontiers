import React from "react";
import { CardLayout } from "@/components";

// 로마 제국 정보 요원 페이지
export default function RomeAgentsPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Intelligence Agents</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Agents</h2>
        <p className="text-gray-300 mb-4">
          Detailed information about Roman Empire's Intelligence agents will be
          updated soon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Field Agents</h3>
            <p className="text-gray-300">Detailed information coming soon</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Analysis Agents</h3>
            <p className="text-gray-300">Detailed information coming soon</p>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
