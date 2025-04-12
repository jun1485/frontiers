import React from "react";
import { CardLayout } from "@/components";

// 스파르타 사회 인구 정보 페이지
export default function SpartaPopulationPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Spartan Society</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Population Composition</h2>
        <p className="text-gray-300">
          Detailed information about Spartan Society's population composition
          will be updated soon.
        </p>
      </div>
    </CardLayout>
  );
}
