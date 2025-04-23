import React, { ReactNode } from "react";

// 카드 컨텐츠 레이아웃을 위한 공통 컨테이너 요소

export default function CardLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={` mx-auto px-4 py-8 rounded-lg ${className}`}>
      {children}
    </div>
  );
}
