"use client";

import React from "react";
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

interface SidebarSectionProps {
  title: string;
  links: {
    href: string;
    text: string;
  }[];
}

const SidebarSection = ({ title, links }: SidebarSectionProps) => (
  <div>
    <h2 className="font-semibold text-lg mb-3 text-cyan-400 border-b border-cyan-800 pb-1">
      {title}
    </h2>
    <ul className="space-y-2 text-sm ml-2">
      {links.map((link, index) => (
        <SidebarLink key={index} href={link.href}>
          {link.text}
        </SidebarLink>
      ))}
    </ul>
  </div>
);

export default function Sidebar() {
  const router = useRouter();

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
      <nav className="space-y-3">
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
    </aside>
  );
}
