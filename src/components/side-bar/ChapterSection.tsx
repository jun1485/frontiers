"use client";

import React from "react";
import SubSection from "./SubSection";
import { ChevronIcon } from "../icons";

interface ChapterSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  subSections: {
    title: string;
    key: string;
    href?: string;
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
      <ChevronIcon className="h-4 w-4" isOpen={isOpen} />
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
            href={subSection.href}
          />
        ))}
      </div>
    )}
  </div>
);

export default ChapterSection;
