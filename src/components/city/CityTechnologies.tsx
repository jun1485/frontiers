import React from "react";

export interface Technology {
  category: string;
  items: string[];
}

interface CityTechnologiesProps {
  technologies: Technology[];
  headingColor: string;
}

// 도시 기술 섹션 컴포넌트
const CityTechnologies: React.FC<CityTechnologiesProps> = ({
  technologies,
  headingColor,
}) => {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">
        Core Technologies
      </h2>
      <div className="space-y-6">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
          >
            <h3 className={`text-xl font-semibold ${headingColor} mb-4`}>
              {tech.category}
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              {tech.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityTechnologies;
