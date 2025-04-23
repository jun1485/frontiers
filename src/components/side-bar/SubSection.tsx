import React from "react";
import SidebarLink from "./SidebarLink";
import Link from "next/link";
import { ChevronIcon } from "../icons";

interface SubSectionProps {
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
  items: {
    name: string;
    href: string;
  }[];
  currentPath: string;
  href?: string;
}

const SubSection: React.FC<SubSectionProps> = ({
  title,
  isOpen,
  toggleOpen,
  items,
  currentPath,
  href,
}) => {
  const isActive = href ? currentPath === href : false;

  return (
    <div className="mb-4 ml-2">
      {href ? (
        <Link
          href={href}
          className={`flex items-center justify-between w-full font-medium text-base ${
            isActive ? "text-yellow-400" : "text-gray-200 hover:text-yellow-400"
          } border-b border-gray-700 pb-1 transition-colors duration-150 cursor-pointer`}
        >
          {title}
        </Link>
      ) : (
        <button
          onClick={toggleOpen}
          className="flex items-center justify-between w-full font-medium text-base text-gray-200 hover:text-yellow-400 border-b border-gray-700 pb-1 transition-colors duration-150 cursor-pointer"
        >
          {title}
          <ChevronIcon className="h-3 w-3" isOpen={isOpen} />
        </button>
      )}
      {!href && isOpen && (
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
};

export default SubSection;
