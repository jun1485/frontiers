import React from "react";
import Link from "next/link";
import { TableOfContents } from "@/components/side-bar";

export default function MythologyPage() {
  const contentsItems = [
    { id: "myth-creation", title: "Creation Myth" },
    { id: "myth-conflicts", title: "Major Conflicts" },
    { id: "myth-meaning", title: "Meaning" },
  ];

  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 tracking-tight">
          Ancient Egyptian Mythology
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          Egyptian mythology that forms the basis of the Frontiers Universe
          worldview
        </p>
      </header>

      <TableOfContents items={contentsItems} />

      <section id="myth-creation" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-amber-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-amber-300 flex items-center">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Creation Myths and Early Gods
            </h2>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              1. The Primordial State
            </h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                The world was filled with an infinite primordial water called
                &apos;Nun&apos;, a state where only darkness and chaos existed.
                There was no life, no death, no sky, and no earth.
              </p>
              <div className="bg-gray-700 p-4 rounded-lg my-6 border-l-4 border-amber-600">
                <p className="italic text-amber-200">
                  &quot;In the beginning, there was the infinite primordial
                  water, Nun. Within it, all possibilities slept, and the world
                  had neither form nor order.&quot;
                </p>
                <p className="text-right mt-2 text-sm text-gray-400">
                  - Heliopolis Creation Myth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="atum-emergence" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              2. The Emergence of Atum
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-gray-200">
                <p>
                  According to the Heliopolis myth, Atum, the first self-created
                  god, was born from a sacred lotus flower. In other versions,
                  he created himself on a hill that emerged from the primordial
                  waters. His name means &quot;the Complete One,&quot;
                  signifying his self-existence.
                </p>
                <p>
                  Atum created the first twin gods, Shu (air and breath of life)
                  and Tefnut (moisture and order) from his bodily fluids. Shu
                  and Tefnut established the basic order of the cosmos and
                  maintained the balance between dryness and moisture, creating
                  the foundation for the emergence of life.
                </p>
              </div>
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 italic">
                  Image display area for God Atum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 신들의 갈등과 역할 섹션 */}
      <section id="myth-conflicts" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-amber-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-amber-300 flex items-center">
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
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M12 14l-4-4m0 0l4-4m-4 4h8"
                />
              </svg>
              Conflicts and Roles of Major Gods
            </h2>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              1. The Conflict Between Osiris and Set
            </h3>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <p>
                Osiris (god of civilization and agriculture), a child of Geb and
                Nut, became Egypt&apos;s first pharaoh, teaching civilization
                and agriculture and bringing prosperity. However, his brother
                Set (god of chaos and storms) murdered him out of jealousy and
                lust for power.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="myth-meaning" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-amber-900 to-gray-800 px-6 py-4 border-b border-gray-700">
            <h2 className="text-3xl font-bold text-amber-300 flex items-center">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Meaning of Mythology
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-amber-400">
                  Explanation of Natural Phenomena
                </h4>
                <p className="text-gray-300 mt-2">
                  Explains the cycle of day and night, the flooding of the Nile,
                  agricultural cycles, and seasonal changes through the
                  activities of the gods.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-amber-400">
                  Social Meaning
                </h4>
                <p className="text-gray-300 mt-2">
                  Provides legitimacy to royal authority, establishes social
                  order, conveys moral values, and contributes to cultural
                  identity formation.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-amber-400">
                  Cosmic Meaning
                </h4>
                <p className="text-gray-300 mt-2">
                  Illustrates the eternal opposition between order and chaos,
                  the cycle of life and death, the inevitable triumph of
                  justice, and the possibility of resurrection and rebirth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-amber-800 text-amber-200 rounded-full hover:bg-amber-700 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
}
