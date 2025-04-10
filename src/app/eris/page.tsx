import React from "react";
import Link from "next/link";
import { TableOfContents } from "@/components/side-bar";

export default function ERISPage() {
  const contentsItems = [
    { id: "overview", title: "Overview" },
    { id: "headquarters", title: "Headquarters Design" },
    { id: "special-features", title: "Special Features" },
    { id: "divisions", title: "Divisions" },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <header className="mb-10">
          <div className="flex items-center mb-4">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
              ERIS
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Eye of Ra Intelligence Service - New Egypt&apos;s Elite Intelligence
            Agency
          </p>
        </header>

        <TableOfContents items={contentsItems} />

        <section id="overview" className="mb-12">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Overview</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                ERIS is New Egypt&apos;s elite spy and cyber warfare division.
                The name &quot;Eye of Ra&quot; symbolizes surveillance, power,
                and protection, perfectly aligning with the agency&apos;s covert
                operations while maintaining strong connections to Egyptian
                mythology.
              </p>
              <p>
                Specializing in hacking, covert operations, and surveillance,
                ERIS is dedicated to protecting New Egypt&apos;s interests and
                uncovering secrets of competing civilizations. By combining
                cutting-edge technology with ancient wisdom, ERIS ensures New
                Egypt&apos;s supremacy in the space race.
              </p>
            </div>
          </div>
        </section>

        <section id="headquarters" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">
            Headquarters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <svg
                  className="h-6 w-6 text-amber-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-amber-400">
                  Exterior Design
                </h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>
                  • Modern pyramid shape honoring ancient Egyptian architecture
                </p>
                <p>• Sleek, reflective surface made of titanium and glass</p>
                <p>• Metallic gold and obsidian black color scheme</p>
                <p>• Illuminated hieroglyphs for aesthetics and security</p>
                <p>• Grand triangular arch entrance with Eye of Ra symbol</p>
                <p>
                  • Lush gardens with fountains and statues of Egyptian gods
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <svg
                  className="h-6 w-6 text-amber-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-amber-400">
                  Interior Design
                </h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>• Grand lobby with high ceilings and marble floors</p>
                <p>• Rotating holographic Eye of Ra in the center</p>
                <p>• Modern interpretations of ancient Egyptian art</p>
                <p>• Advanced biometric scanners and AI security systems</p>
                <p>• Open-plan offices with holographic displays</p>
                <p>• State-of-the-art command and control center</p>
              </div>
            </div>
          </div>
        </section>

        <section id="special-features" className="mb-12">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-purple-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-purple-400">
                Special Features
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3 text-gray-300">
                <h3 className="text-lg font-semibold text-purple-300">
                  Rooftop Observatory
                </h3>
                <p>
                  Advanced monitoring equipment and telescopes for surveillance
                  of celestial activities and other civilizations&apos;
                  movements.
                </p>
              </div>
              <div className="space-y-3 text-gray-300">
                <h3 className="text-lg font-semibold text-purple-300">
                  Underground Vault
                </h3>
                <p>
                  Heavily guarded secure vault and data center storing the most
                  sensitive information, accessible only through multiple
                  security checkpoints.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="divisions" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">
            ERIS Divisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Cyber Operations Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Alexandria, New Egypt
              </p>
              <p className="text-gray-300">
                Specializing in cyber security, warfare operations, hacking, and
                digital surveillance.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Signals Intelligence Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">Luxor, New Egypt</p>
              <p className="text-gray-300">
                Focused on communications interception, satellite surveillance,
                and code breaking.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Research and Development Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">Memphis, New Egypt</p>
              <p className="text-gray-300">
                Developing advanced technologies, hacking tools, and AI systems.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Covert Operations Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">Thebes, New Egypt</p>
              <p className="text-gray-300">
                Planning and executing secret missions, infiltration, and
                intelligence gathering.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Central Command Hub
              </h3>
              <p className="text-gray-400 text-sm mb-2">Cairo, New Egypt</p>
              <p className="text-gray-300">
                Strategic command center coordinating all divisions and
                operations.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Human Intelligence Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">Giza, New Egypt</p>
              <p className="text-gray-300">
                Managing human assets, field agents, and undercover operatives.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Analysis and Strategy Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Heliopolis, New Egypt
              </p>
              <p className="text-gray-300">
                Intelligence analysis, threat assessment, and strategic
                planning.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                Logistics and Support Division
              </h3>
              <p className="text-gray-400 text-sm mb-2">Aswan, New Egypt</p>
              <p className="text-gray-300">
                Managing resources, transportation, and supply chain operations.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 mb-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-cyan-800 text-cyan-200 rounded-full hover:bg-cyan-700 transition duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
