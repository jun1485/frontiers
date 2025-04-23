import React from "react";

interface CityFeaturesProps {
  features: string[];
}

// 도시 특징 섹션 컴포넌트
const CityFeatures: React.FC<CityFeaturesProps> = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">City Features</h2>
      <div
        className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
      >
        <ul className="space-y-2 text-gray-300 list-disc pl-5">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CityFeatures;
