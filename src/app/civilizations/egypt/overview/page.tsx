import React from "react";
import Image from "next/image";

export default function EgyptOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl bg-gray-900 text-gray-200">
      <div className="border-b border-gray-700 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-white">New Egypt</h1>
        <p className="text-lg text-gray-400 mt-2">
          Encyclopedia, the free knowledge repository.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="mb-2 flex gap-4">
            {/* 목차 */}
            <div className="bg-gray-800 p-4 mb-8 border border-gray-700 rounded-lg min-w-[200px] w-fit">
              <h2 className="text-xl font-bold mb-2 text-white w-fit">
                Contents
              </h2>
              <ol className="list-decimal list-inside text-gray-300 w-fit">
                <li className="mb-1">
                  <a
                    href="#history"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    History
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#geography"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    Geography
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#politics"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    Politics
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#economy"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    Economy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#demographics"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    Demographics
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#culture"
                    className="hover:text-blue-400 hover:underline cursor-pointer"
                  >
                    Culture
                  </a>
                </li>
              </ol>
            </div>
            <div>
              <span className="inline-block mb-4">
                <span className="font-bold text-white">New Egypt</span> is the
                first human settlement established on Mars in 2139. It is
                characterized by inheriting the cultural heritage of ancient
                Egypt while maintaining a futuristic social structure.
              </span>
              <p>
                New Egypt is located in the northern Aresia Plains of Mars and
                has grown into a medium-sized city-state with a population of
                approximately 1.5 million. The administrative capital is{" "}
                <span className="italic">Nova Cairo</span>, and the official
                languages are Neo-Egyptian and English.
              </p>
            </div>
          </div>

          {/* 역사 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="history"
            >
              1. History
            </h2>
            <p className="mb-3">
              New Egypt was established in 2139 as part of the "Pharaoh Project"
              led by Elon Musk IV. It was initiated with the purpose of building
              a new civilization on Mars to escape Earth's resource depletion
              and environmental crisis.
            </p>
            <p className="mb-3">
              Starting with 5,000 initial settlers, New Egypt went through a
              survival struggle to adapt to the harsh Martian environment and
              succeeded in building the first self-sufficient dome city in 2145.
              In 2189, they successfully completed Mars' first large-scale
              terraforming project, creating an environment that allows limited
              outdoor activities.
            </p>
          </div>

          {/* 지리 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="geography"
            >
              2. Geography
            </h2>
            <p className="mb-3">
              New Egypt is located in the northern Aresia Plains of Mars. The
              total area is approximately 8,500 km², of which about 1,200 km² is
              residential area consisting of three large domes.
            </p>
            <p className="mb-3">
              Major dome cities include the administrative capital Nova Cairo,
              the industrial center Alexandria-2, and the research city Thebes.
              The area outside the domes is divided into partially terraformed
              regions and undeveloped wastelands.
            </p>
            {/* 지도 이미지 */}
            <div className="relative w-full h-96 my-6">
              <Image
                src="/civilizations/egypt-geography.png"
                alt="Map of New Egypt"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 정치 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="politics"
            >
              3. Politics
            </h2>
            <p className="mb-3">
              New Egypt has a unique political system that combines technocracy
              and direct democracy. The highest decision-making body is the
              'Pharaoh Committee', which consists of 7 experts elected every 4
              years.
            </p>
            <p className="mb-3">
              Major policies are decided by direct voting through citizen
              assemblies, and all citizens have voting rights from the age of
              16. The judicial system is managed by the artificial intelligence
              'MAAT' system and operates through collaboration between human
              judges and AI.
            </p>
          </div>

          {/* 경제 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="economy"
            >
              4. Economy
            </h2>
            <p className="mb-3">
              New Egypt boasts one of Mars' most advanced and diverse economies,
              with a GDP of approximately 230 billion ED (Egyptian Deben). The
              economy is structured around three major pillars: biotechnology,
              mineral extraction, and tourism.
            </p>
            <p className="mb-3">
              The biotechnology sector, centered in Alexandria-2, specializes in
              developing Mars-adaptable crops, pharmaceutical compounds, and
              advanced genetic therapies. This sector accounts for nearly 40% of
              the GDP and employs about 500,000 people.
            </p>
            <p className="mb-3">
              Mineral extraction operations focus on harvesting rare elements
              from the Martian soil and nearby asteroid belt. The "Anubis Mining
              Corporation" controls most of these operations, extracting
              valuable minerals like palladium, platinum, and the revolutionary
              energy source "marsite."
            </p>
            {/* 경제 지표 */}
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Economic Indicators (2220)
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>GDP: 230 billion ED</li>
                <li>Annual Growth Rate: 4.7%</li>
                <li>Unemployment Rate: 1.2%</li>
                <li>
                  Main Exports: Biotechnology products, Rare minerals, AI
                  research
                </li>
                <li>Main Imports: Water, Heavy machinery, Entertainment</li>
              </ul>
            </div>
          </div>

          {/* 인구통계 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="demographics"
            >
              5. Demographics
            </h2>
            <p className="mb-3">
              New Egypt has a diverse population of approximately 1.5 million
              residents. The population composition reflects both the original
              colonization effort and subsequent waves of migration from Earth
              and other Martian settlements.
            </p>
            <p className="mb-3">
              The initial settlement was primarily composed of scientists,
              engineers, and specialists from Egypt, the African Union, the
              Middle East, and various international space agencies. Later
              migrations brought people from all Earth continents, creating a
              highly diverse society.
            </p>
            <p className="mb-3">
              A significant portion of the population (approximately 22%) are
              "Mars-born" citizens, who have never visited Earth. This growing
              demographic has developed distinct cultural traits and
              physiological adaptations to the Martian environment.
            </p>
            {/* 인구 분포 차트 */}
            <div className="flex justify-center my-6">
              <div className="bg-gray-800 p-4 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  Population Distribution
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-sm text-center">Age Structure</p>
                    <ul className="text-xs text-gray-300 mt-2">
                      <li>0-20 years: 24%</li>
                      <li>21-40 years: 38%</li>
                      <li>41-60 years: 28%</li>
                      <li>61+ years: 10%</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-sm text-center">Ancestry</p>
                    <ul className="text-xs text-gray-300 mt-2">
                      <li>North African: 31%</li>
                      <li>Pan-Asian: 27%</li>
                      <li>European: 22%</li>
                      <li>Other: 20%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 문화 섹션 */}
          <div className="mb-8">
            <h2
              className="text-2xl font-bold border-b border-gray-700 pb-2 mb-4 text-white"
              id="culture"
            >
              6. Culture
            </h2>
            <p className="mb-3">
              New Egyptian culture represents a fascinating fusion of ancient
              Egyptian heritage, Earth cultural influences, and uniquely Martian
              innovations. The society actively maintains a connection to
              Ancient Egyptian history while embracing futuristic elements.
            </p>
            <p className="mb-3">
              The arts scene is vibrant, with the "Ra Cultural Center" hosting
              performances of Neo-Egyptian music, dance, and theater.
              Holographic displays throughout the city showcase both historical
              artifacts and contemporary artworks. The annual "Rebirth Festival"
              celebrates the founding of New Egypt with massive dome-wide light
              shows and performances.
            </p>
            <p className="mb-3">
              Religion in New Egypt is diverse, with many citizens practicing a
              modernized form of ancient Egyptian spirituality called "Path of
              the Stars." This belief system incorporates astronomical events
              and Martian geography into traditional mythology. Other Earth
              religions are also practiced, though often with Mars-specific
              adaptations.
            </p>
            {/* 문화 행사 이미지 */}
            <div className="relative w-full h-80 my-6">
              <Image
                src="/civilizations/new-egypt-culture.png"
                alt="New Egyptian Cultural Festival"
                fill
                className="object-cover rounded-lg"
              />
              <p className="text-xs text-center mt-2 text-gray-400">
                Annual Rebirth Festival in Nova Cairo
              </p>
            </div>
            <p className="mb-3">
              Education is highly valued, with The Library of Alexandria-2
              serving as the central knowledge repository and research center.
              New Egypt boasts a 100% literacy rate and offers free education
              through the doctorate level for all citizens. The education system
              emphasizes both technical skills and creative thinking.
            </p>
          </div>
        </div>

        {/* 사이드바 (정보 상자) */}
        <div className="md:w-1/3">
          <div className="border border-gray-700 bg-gray-800 rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-bold text-center border-b border-gray-700 pb-2 mb-4 text-white">
              New Egypt
            </h2>

            {/* 도시 전경 이미지 */}
            <div className="relative aspect-[4/3] w-full mb-6">
              <Image
                src="/civilizations/new-egypt.png"
                alt="Panorama of New Egypt"
                fill
                className="object-cover rounded-md shadow-lg"
                priority
              />
              <p className="text-xs text-center mt-2 text-gray-400">
                Skyline of Nova Cairo, New Egypt
              </p>
            </div>

            {/* 정보 테이블 */}
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Established
                  </th>
                  <td className="py-2 px-2">2139</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Location
                  </th>
                  <td className="py-2 px-2">Northern Aresia Plains, Mars</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Capital
                  </th>
                  <td className="py-2 px-2">Nova Cairo</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Political System
                  </th>
                  <td className="py-2 px-2">Technocratic Direct Democracy</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Population
                  </th>
                  <td className="py-2 px-2">~1,500,000 (as of 2220)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Official Languages
                  </th>
                  <td className="py-2 px-2">Neo-Egyptian, English</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Major Industries
                  </th>
                  <td className="py-2 px-2">
                    Biotech, Mineral Mining, Tourism
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Currency
                  </th>
                  <td className="py-2 px-2">Egyptian Deben (ED)</td>
                </tr>
                <tr>
                  <th className="text-left py-2 font-semibold px-2 rounded-l">
                    Time Zone
                  </th>
                  <td className="py-2 px-2">Mars Coordinated Time (MTC)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
