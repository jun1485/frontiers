import { CityData } from "@/types/city";
import { getCivilizationColors } from "@/utils/civilization-styles";

interface CityCardProps {
  city: CityData;
}

export default function CityCard({ city }: CityCardProps) {
  // 도시 문명에 따른 색상 테마 적용
  const colors = getCivilizationColors(city.civilizationName);

  return (
    <div
      className={`max-w-6xl mx-auto rounded-lg shadow-lg p-8 border-t-4 ${colors.border.replace(
        "border",
        "border"
      )}`}
    >
      <h1 className={`text-4xl font-bold mb-4 ${colors.heading}`}>
        {city.name}
      </h1>
      <p className="text-lg  mb-8">{city.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h2
            className={`text-2xl font-semibold border-b pb-2 ${colors.section}`}
          >
            Major Institutions
          </h2>
          <div className="space-y-6">
            {city.mainInstitutions.map((institution, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-4 rounded-lg border-l-2 ${colors.border}`}
              >
                <h3 className={`text-xl font-medium mb-2 ${colors.accent}`}>
                  {institution.name}
                </h3>
                <p>{institution.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className={`text-2xl font-semibold border-b pb-2 ${colors.section}`}
          >
            Core Technologies
          </h2>
          <div className="space-y-6">
            {city.coreTechnologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-4 rounded-lg border-l-2 ${colors.border}`}
              >
                <h3 className={`text-xl font-medium mb-2 ${colors.accent}`}>
                  {tech.category}
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className={`text-2xl font-semibold border-b pb-2 ${colors.section}`}
          >
            Key Figures
          </h2>
          <div className="space-y-6">
            {city.keyFigures.map((figure, index) => (
              <div
                key={index}
                className={`bg-gray-800 p-4 rounded-lg border-l-2 ${colors.border}`}
              >
                <h3 className={`text-xl font-medium mb-2 ${colors.accent}`}>
                  {figure.name}
                </h3>
                <p className=" font-medium">{figure.role}</p>
                <p className="mt-2">{figure.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2
            className={`text-2xl font-semibold border-b pb-2 ${colors.section}`}
          >
            City Features
          </h2>
          <div
            className={`bg-gray-800 p-4 rounded-lg border-l-2 ${colors.border}`}
          >
            <ul className="space-y-2">
              {city.cityFeatures.map((feature, index) => (
                <li key={index} className=" flex items-start">
                  <span className={`mr-2 ${colors.accent}`}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-8 text-right">
        <div
          className={`inline-block px-4 py-2 rounded-md ${colors.button} cursor-pointer`}
        >
          Learn More
        </div>
      </div>
    </div>
  );
}
