import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 tracking-tight">
          Frontiers World
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          Where ancient civilizations meet futuristic technology
        </p>
        <div className="mt-6 text-gray-400 max-w-3xl">
          <p>
            In 285 BC, coinciding with the establishment of the Library of
            Alexandria, an event known as "Prometheus' Second Fire" marked the
            beginning of a new era. A meteorite containing advanced alien
            knowledge in the form of tablets became the catalyst for
            unprecedented technological advancement.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/eris" className="group">
          <div className="bg-gradient-to-br from-cyan-900 to-gray-800 rounded-xl p-6 shadow-xl border border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 h-full">
            <div className="flex items-center mb-4">
              <svg
                className="h-6 w-6 text-cyan-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2 12C2 12 5.63636 7 12 7C18.3636 7 22 12 22 12C22 12 18.3636 17 12 17C5.63636 17 2 12 2 12Z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h2 className="text-2xl font-bold text-cyan-400">ERIS</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Eye of Ra Intelligence Service - New Egypt's elite spy and cyber
              warfare division
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Advanced surveillance systems</li>
              <li>• Cyber operations & signal intelligence</li>
              <li>• Covert missions & espionage</li>
            </ul>
          </div>
        </Link>

        <Link href="/mythology" className="group">
          <div className="bg-gradient-to-br from-amber-900 to-gray-800 rounded-xl p-6 shadow-xl border border-amber-800/30 hover:border-amber-600/50 transition-all duration-300 h-full">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h2 className="text-2xl font-bold text-amber-400">
                Ancient Egyptian Mythology
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              The mythological foundation that shapes the Frontiers World
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Creation myths and early gods</li>
              <li>• Divine conflicts and roles</li>
              <li>• Modern interpretations</li>
            </ul>
          </div>
        </Link>

        <Link href="/universe" className="group">
          <div className="bg-gradient-to-br from-purple-900 to-gray-800 rounded-xl p-6 shadow-xl border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 h-full">
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
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-purple-400">
                Frontiers Universe
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              A world where ancient civilizations embrace futuristic technology
            </p>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>• Major civilizations</li>
              <li>• Society and environment</li>
              <li>• Space exploration</li>
            </ul>
          </div>
        </Link>
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">
          Featured Story
        </h2>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Tarek's Journey
          </h3>
          <p className="text-gray-300">
            A former sensor manager at Hapy Corporation, Tarek's life changes
            when he's recruited by Commander Osiris following a military
            incident affecting the Nile's water quality. Faced with moral
            choices and approached by Roman agents, he maintains his loyalty to
            New Egypt while contributing to the success of the "Amun's Dream"
            Mars mission.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">
            Major Locations
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Nile River Region - New Egypt's core territory</li>
            <li>• Krypteia Forest - Spartan military training grounds</li>
            <li>• Lunar Base - Space exploration outpost</li>
            <li>• Mars Colony - "Amun's Dream" project site</li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Key Themes
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Technological advancement vs. environmental decline</li>
            <li>• Political and moral conflicts</li>
            <li>• Space exploration as escape and opportunity</li>
            <li>• Balance between tradition and progress</li>
          </ul>
        </div>
      </section>
    </>
  );
}
