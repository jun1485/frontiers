import React, { ReactNode } from "react";

interface PageSectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  gradientColors: string;
  children: ReactNode;
}

// 공통 페이지 섹션 컴포넌트
// 모든 페이지에 대한 섹션 레이아웃 구조를 제공합니다
const PageSection: React.FC<PageSectionProps> = ({
  id,
  title,
  icon,
  gradientColors,
  children,
}) => {
  return (
    <section id={id} className="mb-12">
      <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
        <div
          className={`bg-gradient-to-r ${gradientColors} px-6 py-4 border-b border-gray-700`}
        >
          <h2 className="text-3xl font-bold flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </h2>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
};

export default PageSection;
