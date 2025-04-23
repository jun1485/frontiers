import React from "react";
import Link from "next/link";
import { getAllCities } from "@/utils/city-utils";
import { getCivilizationColors } from "@/utils/civilization-styles";

// 도시 목록 페이지
export default function CitiesPage() {
  const allCities = getAllCities();

  // 문명별로 도시 그룹화
  const citiesByGroup = allCities.reduce((groups, city) => {
    const civilization = city.civilizationName;
    if (!groups[civilization]) {
      groups[civilization] = [];
    }
    groups[civilization].push(city);
    return groups;
  }, {} as Record<string, typeof allCities>);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Cities</h1>
        <p className="text-xl text-gray-400">
          Explore the major cities of the Frontiers Universe
        </p>
      </div>

      {Object.entries(citiesByGroup).map(([civilization, cities]) => {
        const colors = getCivilizationColors(civilization);

        return (
          <div key={civilization} className="mb-16">
            <h2
              className="text-2xl font-bold mb-6 pb-2 border-b-2"
              style={{ borderColor: colors.border, color: colors.heading }}
            >
              {civilization}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  href={`/cities/${city.name.toLowerCase()}`}
                  key={city.name}
                  className="block"
                >
                  <div
                    className="bg-gray-800 p-6 rounded-lg border-l-4 hover:bg-gray-700 transition duration-200"
                    style={{ borderColor: colors.primary }}
                  >
                    <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {city.description}
                    </p>
                    <div
                      className="text-sm inline-block px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.button,
                        color: "white",
                      }}
                    >
                      Learn More
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
