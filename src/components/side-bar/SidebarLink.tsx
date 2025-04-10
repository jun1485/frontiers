"use client";

import React from "react";
import Link from "next/link";

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
          ? "bg-gray-700 text-purple-400 font-medium"
          : "hover:bg-gray-700 hover:text-purple-400"
      }`}
    >
      {children}
    </Link>
  </li>
);

export default SidebarLink;
