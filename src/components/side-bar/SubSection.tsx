"use client";

import React from "react";
import SidebarLink from "./SidebarLink";

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

export default SubSection;
