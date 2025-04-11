import React from "react";
import Image from "next/image";

// 신 이집트 인구 정보 페이지
export default function EgyptPopulationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">New Egypt</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Population Composition</h2>
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/civilizations/new-egypt.png"
            alt="New Egypt Cityscape"
            fill
            priority
            className="object-cover"
          />
        </div>
        <p className="text-gray-300">
          Detailed information about New Egypt's population composition will be
          updated soon.
        </p>
      </div>
    </div>
  );
}
