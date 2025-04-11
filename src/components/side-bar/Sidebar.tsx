"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ChapterSection from "./ChapterSection";
import { chaptersData, mainSections } from "@/data/sidebar-data";
import { FrontiersEyeIcon } from "@/components/icons";

// 사이드바 컴포넌트
export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // 상태 관리
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({
    egypt: false,
    rome: false,
    sparta: false,
  });

  const [openSubSections, setOpenSubSections] = useState<{
    [key: string]: boolean;
  }>({});

  // 챕터 토글 기능
  const toggleChapter = (chapter: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [chapter]: !prev[chapter],
    }));
  };

  // 서브섹션 토글 기능
  const toggleSubSection = (section: string) => {
    setOpenSubSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 현재 경로에 따라 관련 메뉴 자동 오픈
  useEffect(() => {
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
        className="text-2xl font-bold mb-8 text-purple-400 tracking-tight flex items-center cursor-pointer"
      >
        <FrontiersEyeIcon />
        Frontiers Wiki
      </h1>

      <nav className="space-y-3 mb-6">
        {mainSections.map((section, index) => (
          <div key={index}>
            <Link
              href={section.href}
              className={`font-semibold text-lg block border-b pb-1 transition-colors duration-150 ${
                pathname === section.href
                  ? "text-yellow-400 border-cyan-800"
                  : "text-cyan-400 hover:text-cyan-300 border-cyan-800"
              }`}
            >
              {section.title}
            </Link>
          </div>
        ))}
      </nav>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Civilizations</h2>

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
