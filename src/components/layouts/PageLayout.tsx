import React, { ReactNode } from "react";
import { TableOfContents } from "@/components/side-bar";

interface ContentItem {
  id: string;
  title: string;
}

interface PageLayoutProps {
  title: string;
  subtitle: string;
  gradientColors: string;
  contentsItems?: ContentItem[];
  children: ReactNode;
}

// 공통 페이지 레이아웃 컴포넌트
// 모든 페이지에 대한 공통 레이아웃 구조를 제공합니다
const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  gradientColors,
  contentsItems,
  children,
}) => {
  return (
    <>
      <header className="mb-10">
        <h1
          className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientColors} tracking-tight`}
        >
          {title}
        </h1>
        <p className="mt-3 text-xl text-gray-300">{subtitle}</p>
      </header>

      {contentsItems && <TableOfContents items={contentsItems} />}

      {children}
    </>
  );
};

export default PageLayout;
