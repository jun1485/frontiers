import React from "react";
import { CardLayout } from "@/components";

// 스파르타 사회 크립테이아 기관 페이지
export default function SpartaCrypteiaPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Krypteia Command Center</h1>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Institution Overview</h2>
        <p className="text-gray-300 mb-4">
          The Krypteia Command Center is the headquarters for Sparta's elite
          intelligence and security forces. They monitor and control the
          Krypteia ritual activities that take place in Pamisos.
        </p>
        <h3 className="text-xl font-semibold mb-2">Key Functions</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Information collection and analysis</li>
          <li>Security maintenance</li>
          <li>Krypteia ritual monitoring</li>
          <li>Military training management</li>
        </ul>
      </div>
    </CardLayout>
  );
}
