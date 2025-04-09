import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 tracking-tight">
          Frontiers Universe Wiki
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          Where future meets the past, the story of New Egypt
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-cyan-800 to-cyan-700 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200 border border-cyan-600"
          >
            <h3 className="text-lg font-semibold text-cyan-300">ERIS</h3>
            <p className="text-sm text-gray-300">
              Intelligence agency of New Egypt
            </p>
          </Link>
          <Link
            href="/mythology"
            className="bg-gradient-to-r from-amber-800 to-amber-700 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200 border border-amber-600"
          >
            <h3 className="text-lg font-semibold text-amber-300">
              Ancient Egyptian Mythology
            </h3>
            <p className="text-sm text-gray-300">
              Mythology that forms the basis of the world
            </p>
          </Link>
          <Link
            href="/universe"
            className="bg-gradient-to-r from-purple-800 to-purple-700 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200 border border-purple-600"
          >
            <h3 className="text-lg font-semibold text-purple-300">
              Frontiers Universe
            </h3>
            <p className="text-sm text-gray-300">
              Futuristic reinterpretation of ancient civilizations
            </p>
          </Link>
        </div>
      </header>

      <section id="eris-overview" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-cyan-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-cyan-300 flex items-center">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              ERIS (Eye of Ra Intelligence Service)
            </h2>
            <p className="text-gray-300 mt-1">The Eyes of New Egypt</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              1. ERIS Overview
            </h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                <strong className="text-cyan-400">Name:</strong> "The Eye of Ra"
                symbolizes surveillance, power, and protection, which aligns
                well with the agency's surveillance and covert operations. It
                also maintains a strong connection to Egyptian mythology, adding
                cultural depth to New Egypt within the story.
              </p>
              <p>
                <strong className="text-cyan-400">Function:</strong> New Egypt's
                elite intelligence and cyber warfare unit. Specializing in
                hacking, covert operations, and surveillance, dedicated to
                protecting New Egypt's interests and uncovering secrets of
                competing civilizations. Utilizing cutting-edge technology and
                ancient wisdom, ERIS agents are always one step ahead, ensuring
                New Egypt's safety and advantage in the space race.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="eris-hq" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              2. ERIS Headquarters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-gray-200">
                <h4 className="text-xl font-medium text-cyan-400">Exterior</h4>
                <p>
                  A sleek, modern pyramid shape paying homage to ancient
                  Egyptian pyramids. The smooth, reflective surface made of
                  advanced materials such as titanium and glass adds a
                  futuristic feel.
                </p>
                <h4 className="text-xl font-medium text-cyan-400">Interior</h4>
                <p>
                  A spacious, grand lobby boasting high ceilings and polished
                  marble floors. In the center hangs a large holographic Eye of
                  Ra, slowly rotating and emitting a soft ambient light.
                </p>
              </div>
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 italic">
                  Headquarters image display area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="eris-departments" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              3. ERIS Departments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-cyan-400">
                  Cyber Operations Department
                </h4>
                <p className="text-gray-300 mt-2">Alexandria, New Egypt</p>
                <p className="text-gray-300 mt-1">
                  Responsible for cybersecurity and cyber warfare operations,
                  specializing in hacking, cyber intelligence, and digital
                  surveillance.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-cyan-400">
                  Signal Intelligence Department
                </h4>
                <p className="text-gray-300 mt-2">Luxor, New Egypt</p>
                <p className="text-gray-300 mt-1">
                  Responsible for intercepting and decoding communications,
                  specializing in satellite surveillance, signal interception,
                  and code breaking.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-cyan-400">
                  Research and Development Department
                </h4>
                <p className="text-gray-300 mt-2">Memphis, New Egypt</p>
                <p className="text-gray-300 mt-1">
                  Responsible for developing advanced technologies and
                  analytical tools, specializing in hacking tools, surveillance
                  technology, and AI system innovations.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-cyan-400">
                  Covert Operations Department
                </h4>
                <p className="text-gray-300 mt-2">Thebes, New Egypt</p>
                <p className="text-gray-300 mt-1">
                  Responsible for planning and executing covert missions and
                  espionage activities, specializing in infiltration operations,
                  information gathering, and penetration.
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/eris"
                className="inline-block mt-4 px-6 py-2 bg-cyan-800 text-cyan-200 rounded-full hover:bg-cyan-700 transition duration-200"
              >
                View More Department Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
