"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink = ({ href, children, isActive }: SidebarLinkProps) => (
  <li>
    <Link
      href={href}
      className={`block px-3 py-1 rounded transition-colors duration-150 ${
        isActive
          ? "bg-gray-700 text-yellow-300 font-medium"
          : "hover:bg-gray-700 hover:text-yellow-300"
      }`}
    >
      {children}
    </Link>
  </li>
);

interface SubSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  items: {
    name: string;
    href: string;
  }[];
  currentPath: string;
}

const SubSection: React.FC<SubSectionProps> = ({
  title,
  isOpen,
  toggleOpen,
  items,
  currentPath,
}) => (
  <div className="mb-4 ml-2">
    <button
      onClick={toggleOpen}
      className="flex items-center justify-between w-full font-medium text-base text-gray-200 hover:text-cyan-300 border-b border-gray-700 pb-1 transition-colors duration-150 cursor-pointer"
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-3 w-3 transition-transform duration-200 ${
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
        {items.map((item, idx) => (
          <SidebarLink
            key={idx}
            href={item.href}
            isActive={currentPath === item.href}
          >
            {item.name}
          </SidebarLink>
        ))}
      </ul>
    )}
  </div>
);

interface ChapterSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  subSections: {
    title: string;
    key: string;
    items: {
      name: string;
      href: string;
    }[];
  }[];
  openSubSections: { [key: string]: boolean };
  toggleSubSection: (section: string) => void;
  currentPath: string;
}

const ChapterSection: React.FC<ChapterSectionProps> = ({
  title,
  isOpen,
  toggleOpen,
  subSections,
  openSubSections,
  toggleSubSection,
  currentPath,
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
      <div className="mt-2 ml-2">
        {subSections.map((subSection, idx) => (
          <SubSection
            key={idx}
            title={subSection.title}
            isOpen={openSubSections[subSection.key] || false}
            toggleOpen={() => toggleSubSection(subSection.key)}
            items={subSection.items}
            currentPath={currentPath}
          />
        ))}
      </div>
    )}
  </div>
);

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({
    egypt: false,
    rome: false,
    sparta: false,
  });

  const [openSubSections, setOpenSubSections] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleChapter = (chapter: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapter]: !prev[chapter],
    }));
  };

  const toggleSubSection = (section: string) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 각 문명의 도시 데이터
  const civilizationCities = {
    egypt: [
      { name: "Cairo", href: "/civilizations/egypt/cities/cairo" },
      { name: "Alexandria", href: "/civilizations/egypt/cities/alexandria" },
      { name: "Luxor", href: "/civilizations/egypt/cities/luxor" },
      { name: "Memphis", href: "/civilizations/egypt/cities/memphis" },
      { name: "Thebes", href: "/civilizations/egypt/cities/thebes" },
      { name: "Giza", href: "/civilizations/egypt/cities/giza" },
      { name: "Heliopolis", href: "/civilizations/egypt/cities/heliopolis" },
      { name: "Aswan", href: "/civilizations/egypt/cities/aswan" },
    ],
    rome: [
      { name: "Rome", href: "/civilizations/rome/cities/rome" },
      { name: "Milan", href: "/civilizations/rome/cities/milan" },
      { name: "Naples", href: "/civilizations/rome/cities/naples" },
      { name: "Portuna", href: "/civilizations/rome/cities/portuna" },
    ],
    sparta: [
      { name: "Sparta", href: "/civilizations/sparta/cities/sparta" },
      { name: "Athens", href: "/civilizations/sparta/cities/athens" },
      { name: "Corinth", href: "/civilizations/sparta/cities/corinth" },
      { name: "Pamisos", href: "/civilizations/sparta/cities/pamisos" },
    ],
  };

  // 문명 서브메뉴 구조
  const chaptersData = [
    {
      title: "New Egypt",
      key: "egypt",
      subSections: [
        {
          title: "Population Information",
          key: "egypt-population",
          items: [
            {
              name: "Population Composition",
              href: "/civilizations/egypt/population",
            },
          ],
        },
        {
          title: "Major Institutions",
          key: "egypt-institutions",
          items: [
            { name: "ERIS", href: "/civilizations/egypt/institutions/eris" },
            {
              name: "Government Institutions",
              href: "/civilizations/egypt/institutions/government",
            },
          ],
        },
        {
          title: "Key Figures",
          key: "egypt-figures",
          items: [
            {
              name: "Political Leaders",
              href: "/civilizations/egypt/figures/leaders",
            },
            {
              name: "ERIS Agents",
              href: "/civilizations/egypt/figures/agents",
            },
          ],
        },
        {
          title: "Core Technologies",
          key: "egypt-technologies",
          items: [
            {
              name: "Cyber Technologies",
              href: "/civilizations/egypt/technologies/cyber",
            },
            {
              name: "Space Technologies",
              href: "/civilizations/egypt/technologies/space",
            },
          ],
        },
        {
          title: "Military System",
          key: "egypt-military",
          items: [
            {
              name: "Military Organization",
              href: "/civilizations/egypt/military/organization",
            },
          ],
        },
        {
          title: "Cities",
          key: "egypt-cities",
          items: civilizationCities.egypt,
        },
      ],
    },
    {
      title: "Roman Empire",
      key: "rome",
      subSections: [
        {
          title: "Population Information",
          key: "rome-population",
          items: [
            {
              name: "Population Composition",
              href: "/civilizations/rome/population",
            },
          ],
        },
        {
          title: "Major Institutions",
          key: "rome-institutions",
          items: [
            {
              name: "Central Intelligence Bureau",
              href: "/civilizations/rome/institutions/cib",
            },
            {
              name: "Government Institutions",
              href: "/civilizations/rome/institutions/government",
            },
          ],
        },
        {
          title: "Key Figures",
          key: "rome-figures",
          items: [
            {
              name: "Political Leaders",
              href: "/civilizations/rome/figures/leaders",
            },
            {
              name: "Intelligence Agents",
              href: "/civilizations/rome/figures/agents",
            },
          ],
        },
        {
          title: "Core Technologies",
          key: "rome-technologies",
          items: [
            {
              name: "Brain Manipulation",
              href: "/civilizations/rome/technologies/brain",
            },
            {
              name: "Intelligence Operations",
              href: "/civilizations/rome/technologies/intel",
            },
          ],
        },
        {
          title: "Military System",
          key: "rome-military",
          items: [
            {
              name: "Military Organization",
              href: "/civilizations/rome/military/organization",
            },
          ],
        },
        {
          title: "Cities",
          key: "rome-cities",
          items: civilizationCities.rome,
        },
      ],
    },
    {
      title: "Spartan Society",
      key: "sparta",
      subSections: [
        {
          title: "Population Information",
          key: "sparta-population",
          items: [
            {
              name: "Population Composition",
              href: "/civilizations/sparta/population",
            },
          ],
        },
        {
          title: "Major Institutions",
          key: "sparta-institutions",
          items: [
            {
              name: "The Gerousia",
              href: "/civilizations/sparta/institutions/gerousia",
            },
            {
              name: "Crypteia Command",
              href: "/civilizations/sparta/institutions/crypteia",
            },
          ],
        },
        {
          title: "Key Figures",
          key: "sparta-figures",
          items: [
            {
              name: "Queen Gorgo",
              href: "/civilizations/sparta/figures/gorgo",
            },
            {
              name: "General Leonidas",
              href: "/civilizations/sparta/figures/leonidas",
            },
          ],
        },
        {
          title: "Core Technologies",
          key: "sparta-technologies",
          items: [
            {
              name: "Military Training Systems",
              href: "/civilizations/sparta/technologies/military",
            },
            {
              name: "Surveillance Systems",
              href: "/civilizations/sparta/technologies/surveillance",
            },
          ],
        },
        {
          title: "Military System",
          key: "sparta-military",
          items: [
            {
              name: "Crypteia",
              href: "/civilizations/sparta/military/crypteia",
            },
            {
              name: "Military Organization",
              href: "/civilizations/sparta/military/organization",
            },
          ],
        },
        {
          title: "Cities",
          key: "sparta-cities",
          items: civilizationCities.sparta,
        },
      ],
    },
  ];

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

  // 현재 경로에 따라 관련 메뉴 섹션 자동 오픈
  React.useEffect(() => {
    if (pathname) {
      // 문명 자동 확장
      if (pathname.includes("/civilizations/egypt")) {
        setOpenChapters((prev) => ({ ...prev, egypt: true }));
      } else if (pathname.includes("/civilizations/rome")) {
        setOpenChapters((prev) => ({ ...prev, rome: true }));
      } else if (pathname.includes("/civilizations/sparta")) {
        setOpenChapters((prev) => ({ ...prev, sparta: true }));
      }

      // 서브섹션 자동 확장
      chaptersData.forEach((chapter) => {
        chapter.subSections.forEach((section) => {
          const shouldOpen = section.items.some(
            (item) => pathname === item.href
          );
          if (shouldOpen) {
            setOpenSubSections((prev) => ({ ...prev, [section.key]: true }));
          }
        });
      });
    }
  }, [pathname]);

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
              className={`font-semibold text-lg block border-b pb-1 transition-colors duration-150 ${
                pathname === section.href
                  ? "text-yellow-300 border-yellow-800"
                  : "text-cyan-400 hover:text-cyan-300 border-cyan-800"
              }`}
            >
              {section.title}
            </Link>
          </div>
        ))}
      </nav>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-4">
          Civilizations
        </h2>

        {chaptersData.map((chapter, idx) => (
          <ChapterSection
            key={idx}
            title={chapter.title}
            isOpen={openChapters[chapter.key] || false}
            toggleOpen={() => toggleChapter(chapter.key)}
            subSections={chapter.subSections}
            openSubSections={openSubSections}
            toggleSubSection={toggleSubSection}
            currentPath={pathname || ""}
          />
        ))}
      </div>
    </aside>
  );
}
