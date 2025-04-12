import React, { ReactNode } from "react";

// 카드 컨텐츠 레이아웃을 위한 공통 컨테이너 요소
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function CardLayout({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`rounded-lg mx-auto px-4 py-8 ${className}`}>
      {children}
    </div>
  );
}
