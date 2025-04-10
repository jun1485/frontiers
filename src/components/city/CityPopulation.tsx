import React from "react";

interface CityPopulationProps {
  population: string;
  headingColor: string;
}

// 도시 인구 정보 컴포넌트
const CityPopulation: React.FC<CityPopulationProps> = ({
  population,
  headingColor,
}) => {
  if (!population) return null;

  return (
    <section className="mb-8">
      <div
        className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
      >
        <h2 className={`text-2xl font-bold ${headingColor} mb-4`}>
          Population
        </h2>
        <p className="text-gray-300">{population}</p>
      </div>
    </section>
  );
};

export default CityPopulation;
