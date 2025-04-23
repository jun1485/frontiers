import React from "react";

export interface CityHeaderProps {
  name: string;
  civilizationName: string;
  description: string;
  primaryColor: string;
}

// 도시 페이지 헤더 컴포넌트
const CityHeader: React.FC<CityHeaderProps> = ({
  name,
  civilizationName,
  description,
  primaryColor,
}) => {
  return (
    <header className="mb-8">
      <div className="flex items-center mb-2">
        <h1
          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${primaryColor} tracking-tight`}
        >
          {name}
        </h1>
      </div>
      <p className="text-xl text-gray-300 mb-2">
        Major city of {civilizationName}
      </p>
      <p className="text-gray-400">{description}</p>
    </header>
  );
};

export default CityHeader;
