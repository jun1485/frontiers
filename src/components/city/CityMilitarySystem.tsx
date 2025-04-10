import React from "react";

interface CityMilitarySystemProps {
  militarySystem: string;
  headingColor: string;
}

// 도시 군사 체계 컴포넌트
const CityMilitarySystem: React.FC<CityMilitarySystemProps> = ({
  militarySystem,
  headingColor,
}) => {
  if (!militarySystem) return null;

  return (
    <section className="mb-8">
      <div
        className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
      >
        <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>
          Military System
        </h2>
        <p className="text-gray-300">{militarySystem}</p>
      </div>
    </section>
  );
};

export default CityMilitarySystem;
