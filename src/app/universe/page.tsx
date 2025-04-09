import React from "react";
import Link from "next/link";

export default function UniversePage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tight">
          Frontiers Universe
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          A futuristic reinterpretation of ancient civilizations, a new world
        </p>
      </header>

      {/* 기원 사건 섹션 */}
      <section id="fu-origin" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-purple-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Origin Event: Prometheus&apos;s Second Fire
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Around 285 BC, as the Library of Alexandria was established, a
                meteor approached Earth and exploded in the atmosphere. Among
                the fragments was a tablet-shaped artifact containing knowledge
                from an advanced alien civilization. This event became known as
                the &quot;Return of Prometheus,&quot; and the meteor was named
                &quot;Prometheus&apos;s Second Fire.&quot;
              </p>
              <div className="bg-gray-700 bg-opacity-30 p-4 rounded-lg my-6 border-l-4 border-purple-600">
                <p className="italic text-purple-200">
                  &quot;Humanity received fire from the sky for a second time.
                  The first warmed their bodies, but the second awakened their
                  minds.&quot;
                </p>
                <p className="text-right mt-2 text-sm text-gray-400">
                  - Records from the Library of Alexandria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 문명 섹션 */}
      <section id="fu-civs" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-purple-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Major Civilizations
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 새로운 이집트 */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
                <div className="bg-cyan-900 p-3">
                  <h3 className="text-xl font-semibold text-cyan-300">
                    New Egypt
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-300">
                    An advanced civilization with space exploration
                    capabilities, integrating mummification techniques with
                    modern science, focusing on deep space hibernation research,
                    and concentrating on space colony development.
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-cyan-400">
                      Major Projects
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Amun&apos;s Dream (Mars Exploration Mission)
                    </p>
                  </div>
                </div>
              </div>

              {/* 로마 제국 */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
                <div className="bg-red-900 p-3">
                  <h3 className="text-xl font-semibold text-red-300">
                    Roman Empire
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-300">
                    Conducting secret brain manipulation research on slaves,
                    developing mind control technology, and focusing technically
                    on information operations.
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-red-400">
                      Main Activities
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Technology espionage against other civilizations,
                      sabotaging New Egypt&apos;s space program
                    </p>
                  </div>
                </div>
              </div>

              {/* 스파르타 사회 */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
                <div className="bg-blue-900 p-3">
                  <h3 className="text-xl font-semibold text-blue-300">
                    Spartan Society
                  </h3>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-300">
                    Emphasizes communal living and forms a strong cooperative
                    society.
                  </p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-blue-400">
                      Key Institutions
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Palatium (cooperative living spaces), Crypteia (military
                      training rituals in isolated forests)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 사회 및 환경 섹션 */}
      <section id="fu-society" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-purple-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Society and Environment
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 도시 특징 */}
              <div className="bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">
                  Urban Features
                </h3>
                <ul className="space-y-2 text-gray-300 list-disc pl-5">
                  <li>
                    Architectural style blending ultra-modern skyscrapers with
                    ancient buildings
                  </li>
                  <li>Neon signs with ancient scripts</li>
                  <li>Severe air pollution and smog</li>
                  <li>Urban deterioration, sustainability crisis</li>
                  <li>Distinct class system</li>
                </ul>
              </div>

              {/* 종교적 환경 */}
              <div className="bg-gray-700 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">
                  Religious Environment
                </h3>
                <p className="mb-3 text-gray-300">Major religious groups:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-600 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-200">
                      Traditional Polytheism
                    </h4>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-200">
                      Christianity
                    </h4>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-200">
                      Islam
                    </h4>
                  </div>
                  <div className="bg-gray-600 p-3 rounded">
                    <h4 className="text-sm font-medium text-purple-200">
                      Atheism/Non-religious Groups
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 줄거리 요소 섹션 */}
      <section id="fu-plot" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-purple-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-purple-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              Key Plot Elements
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="p-4 bg-gray-700 bg-opacity-20 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  Tarek&apos;s Story
                </h3>
                <p className="text-gray-200">
                  Tarek, who managed sensors at Hapy Corporation, is selected by
                  Commander Osiris for a space mission following a military
                  incident affecting the Nile River&apos;s water purity.
                  Approached by Roman agents, he faces moral choices but
                  maintains loyalty to New Egypt and helps initiate the mission.
                </p>
              </div>

              <div className="p-4 bg-gray-700 bg-opacity-20 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  Commander Osiris
                </h3>
                <p className="text-gray-200">
                  Leading the &quot;Amun&apos;s Dream&quot; Mars mission,
                  experiencing personal conflict between duty and family
                  (relationship with daughter Bastet), and managing security
                  against Roman interference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 mb-8 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-800 text-purple-200 rounded-full hover:bg-purple-700 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
}
