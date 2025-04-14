import React from "react";
import { CityData } from "@/types/city";
import { getCivilizationColors } from "@/utils/civilization-styles";
import {
  CityHeader,
  CityPopulation,
  CityKeyFigures,
  CityTechnologies,
  CityMilitarySystem,
  CityFeatures,
  HomeButton,
} from "@/components/city";

interface CityLayoutProps {
  cityData: CityData;
}

// 도시 페이지 레이아웃 컴포넌트
const CityLayout: React.FC<CityLayoutProps> = ({ cityData }) => {
  const colors = getCivilizationColors(cityData.civilizationName);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CityHeader
        name={cityData.name}
        civilizationName={cityData.civilizationName}
        description={cityData.description}
        primaryColor={colors.primary}
      />

      {cityData.population && (
        <CityPopulation
          population={cityData.population}
          headingColor={colors.heading}
        />
      )}

      <CityKeyFigures
        figures={cityData.keyFigures}
        headingColor={colors.heading}
      />

      <CityTechnologies
        technologies={cityData.coreTechnologies}
        headingColor={colors.heading}
      />

      {cityData.militarySystem && (
        <CityMilitarySystem
          militarySystem={cityData.militarySystem}
          headingColor={colors.heading}
        />
      )}

      <CityFeatures features={cityData.cityFeatures} />

      <HomeButton buttonColor={colors.button} />
    </div>
  );
};

export default CityLayout;
