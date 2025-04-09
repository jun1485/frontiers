"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className="w-72 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 p-6 fixed h-full overflow-y-auto shadow-lg border-r border-gray-700">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold mb-8 text-yellow-400 tracking-tight flex items-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 mr-2 text-cyan-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M2 12C2 12 5.63636 7 12 7C18.3636 7 22 12 22 12C22 12 18.3636 17 12 17C5.63636 17 2 12 2 12Z"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="3" />
          <path d="M7 17S9 18.5 12 18.5 17 17 17 17" strokeWidth="1.5" />
          <path d="M3 9L5 9M19 9L21 9" strokeWidth="1.5" />
          <path d="M3 15L5 15M19 15L21 15" strokeWidth="1.5" />
          <path d="M12 4.5V7" strokeWidth="1.5" />
          <path d="M8 5.5L9 7" strokeWidth="1.5" />
          <path d="M16 5.5L15 7" strokeWidth="1.5" />
        </svg>
        Frontiers Wiki
      </h1>
      <nav className="space-y-6">
        <div>
          <h2 className="font-semibold text-lg mb-3 text-cyan-400 border-b border-cyan-800 pb-1">
            I. ERIS
          </h2>
          <ul className="space-y-2 text-sm ml-2">
            <li>
              <Link
                href="/eris"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                1. Overview
              </Link>
            </li>
            <li>
              <Link
                href="/eris#headquarters"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                2. Headquarters Design
              </Link>
            </li>
            <li>
              <Link
                href="/eris#special-features"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                3. Special Features
              </Link>
            </li>
            <li>
              <Link
                href="/eris#divisions"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                4. Divisions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-3 text-cyan-400 border-b border-cyan-800 pb-1">
            II. Ancient Egyptian Mythology
          </h2>
          <ul className="space-y-2 text-sm ml-2">
            <li>
              <Link
                href="/mythology"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                1. Creation Myth
              </Link>
            </li>
            <li>
              <Link
                href="/mythology#myth-conflicts"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                2. Major Conflicts
              </Link>
            </li>
            <li>
              <Link
                href="/mythology#myth-meaning"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                3. Meaning
              </Link>
            </li>
          </ul>
        </div>
        {/* Frontiers Universe 섹션 */}
        <div>
          <h2 className="font-semibold text-lg mb-3 text-cyan-400 border-b border-cyan-800 pb-1">
            III. Frontiers Universe
          </h2>
          <ul className="space-y-2 text-sm ml-2">
            <li>
              <Link
                href="/universe"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                1. Origin Event
              </Link>
            </li>
            <li>
              <Link
                href="/universe#fu-civs"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                2. Major Civilizations
              </Link>
            </li>
            <li>
              <Link
                href="/universe#fu-society"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                3. Society/Environment
              </Link>
            </li>
            <li>
              <Link
                href="/universe#fu-plot"
                className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
              >
                4. Plot Elements
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
