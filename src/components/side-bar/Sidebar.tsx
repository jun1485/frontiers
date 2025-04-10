"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

const SidebarLink = ({ href, children }: SidebarLinkProps) => (
  <li>
    <Link
      href={href}
      className="block px-3 py-1 rounded hover:bg-gray-700 hover:text-yellow-300 transition-colors duration-150"
    >
      {children}
    </Link>
  </li>
);

interface CitySectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  cities: {
    name: string;
    href: string;
  }[];
}

const CitySection: React.FC<CitySectionProps> = ({
  title,
  isOpen,
  toggleOpen,
  cities,
}) => (
  <div className="mb-4">
    <button
      onClick={toggleOpen}
      className="flex items-center justify-between w-full font-semibold text-lg text-cyan-400 hover:text-cyan-300 border-b border-cyan-800 pb-1 transition-colors duration-150 cursor-pointer"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <ul className="mt-2 ml-2 space-y-1 text-sm">
        {cities.map((city, idx) => (
          <SidebarLink key={idx} href={city.href}>
            {city.name}
          </SidebarLink>
        ))}
      </ul>
    )}
  </div>
);

export default function Sidebar() {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    egypt: false,
    rome: false,
    sparta: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const civilizationCities = {
    egypt: [
      { name: "Cairo", href: "/cities/cairo" },
      { name: "Alexandria", href: "/cities/alexandria" },
      { name: "Luxor", href: "/cities/luxor" },
      { name: "Memphis", href: "/cities/memphis" },
      { name: "Thebes", href: "/cities/thebes" },
      { name: "Giza", href: "/cities/giza" },
      { name: "Heliopolis", href: "/cities/heliopolis" },
      { name: "Aswan", href: "/cities/aswan" },
    ],
    rome: [
      { name: "Rome", href: "/cities/rome" },
      { name: "Milan", href: "/cities/milan" },
      { name: "Naples", href: "/cities/naples" },
      { name: "Portuna", href: "/cities/portuna" },
    ],
    sparta: [
      { name: "Sparta", href: "/cities/sparta" },
      { name: "Athens", href: "/cities/athens" },
      { name: "Corinth", href: "/cities/corinth" },
      { name: "Pamisos", href: "/cities/pamisos" },
    ],
  };

  const mainSections = [
    {
      title: "I. ERIS",
      href: "/eris",
    },
    {
      title: "II. Ancient Egyptian Mythology",
      href: "/mythology",
    },
    {
      title: "III. Frontiers Universe",
      href: "/universe",
    },
  ];

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
      <nav className="space-y-3 mb-6">
        {mainSections.map((section, index) => (
          <div key={index}>
            <Link
              href={section.href}
              className="font-semibold text-lg text-cyan-400 hover:text-cyan-300 block border-b border-cyan-800 pb-1 transition-colors duration-150"
            >
              {section.title}
            </Link>
          </div>
        ))}
      </nav>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">
          Civilizations & Cities
        </h2>

        <CitySection
          title="New Egypt"
          isOpen={openSections.egypt}
          toggleOpen={() => toggleSection("egypt")}
          cities={civilizationCities.egypt}
        />

        <CitySection
          title="Roman Empire"
          isOpen={openSections.rome}
          toggleOpen={() => toggleSection("rome")}
          cities={civilizationCities.rome}
        />

        <CitySection
          title="Spartan Society"
          isOpen={openSections.sparta}
          toggleOpen={() => toggleSection("sparta")}
          cities={civilizationCities.sparta}
        />
      </div>
    </aside>
  );
}
