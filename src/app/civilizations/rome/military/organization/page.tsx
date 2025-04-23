import React from "react";
import { CardLayout } from "@/components";

// 로마 제국 군사 조직 페이지
export default function RomeMilitaryOrganizationPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Roman Empire Military System</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Military Organization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Military Structure</h3>
            <p className="text-gray-300">
              Detailed information about Roman Empire's military structure will
              be updated soon.
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Key Departments</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Army</li>
              <li>Navy</li>
              <li>Air Force</li>
              <li>Special Forces</li>
            </ul>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
