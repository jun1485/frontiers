"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ChapterSection from "./ChapterSection";
import { chaptersData, mainSections } from "@/data/sidebar-data";
import {
  FrontiersEyeIcon,
  InstagramIcon,
  YouTubeIcon,
  RedditIcon,
} from "@/components/icons";

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
      <div className="flex flex-col justify-between h-full">
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

        {/* 소셜 미디어 링크 섹션 추가 */}
        <div className="mt-auto pb-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/midaiartwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@midaiartwork?fbclid=PAZXh0bgNhZW0CMTEAAafztEJg0RnsIpRhs_UD3CjBrbRW9bQ6BcC2E0avdAo9fl3X0p-_xF2nbmhuWQ_aem_pOQAT3zYPcJ-xh9J3O6t_Q"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors duration-200"
            >
              <YouTubeIcon className="h-6 w-6" />
            </a>
            <a
              href="https://reddit.com/user/frontbackend/submitted"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition-colors duration-200"
            >
              <RedditIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
