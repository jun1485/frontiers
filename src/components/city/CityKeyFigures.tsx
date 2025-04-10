import React from "react";

export interface KeyFigure {
  name: string;
  role: string;
  description: string;
}

interface CityKeyFiguresProps {
  figures: KeyFigure[];
  headingColor: string;
}

// 도시 주요 인물 섹션 컴포넌트
const CityKeyFigures: React.FC<CityKeyFiguresProps> = ({
  figures,
  headingColor,
}) => {
  if (!figures || figures.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">Key Figures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {figures.map((figure, idx) => (
          <div
            key={idx}
            className={`bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700`}
          >
            <h3 className={`text-xl font-semibold ${headingColor} mb-2`}>
              {figure.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{figure.role}</p>
            <p className="text-gray-300">{figure.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityKeyFigures;
