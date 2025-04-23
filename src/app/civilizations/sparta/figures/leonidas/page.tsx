import React from "react";
import { CardLayout } from "@/components";

// 스파르타 사회 레오니다스 장군 페이지
export default function SpartaLeonidasPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">General Leonidas</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Figure Profile</h2>
        <p className="text-gray-300 mb-4">
          General Leonidas is a descendant of the legendary King Leonidas,
          commanding Sparta's military forces and maintaining the Krypteia
          program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Military Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Military Strategy Development</li>
              <li>Combat Training Systematization</li>
              <li>Krypteia Program Management</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Roles</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Military Commander</li>
              <li>Krypteia Program Director</li>
              <li>Strategist</li>
            </ul>
          </div>
        </div>
      </div>
    </CardLayout>
  );
}
