import React from "react";

// 스파르타 사회 고르고 여왕 페이지
export default function SpartaGorgoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Queen Gorgo</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Figure Profile</h2>
        <p className="text-gray-300 mb-4">
          Queen Gorgo is a co-ruler of Spartan Society, known for her wisdom and
          influence in Spartan politics. She advocates for Spartan expansion and
          the preservation of traditional values.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Key Achievements</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Political Leadership</li>
              <li>Preservation of Traditional Values</li>
              <li>Social Reforms</li>
            </ul>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Roles</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Co-Ruler</li>
              <li>Political Advisor</li>
              <li>Social Reformer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
