import React, { ReactNode } from "react";
import Link from "next/link";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  items?: string[];
  bgColor: string;
  borderColor: string;
  hoverBorderColor: string;
  titleColor: string;
}

// 링크 카드 컴포넌트
// 메인 페이지에서 다른 페이지로 이동하는 카드 컴포넌트
const LinkCard: React.FC<LinkCardProps> = ({
  href,
  title,
  description,
  icon,
  items,
  bgColor,
  borderColor,
  hoverBorderColor,
  titleColor,
}) => {
  return (
    <Link href={href} className="group">
      <div
        className={`${bgColor} rounded-xl p-6 shadow-xl border ${borderColor} hover:${hoverBorderColor} transition-all duration-300 h-full`}
      >
        <div className="flex items-center mb-4">
          {icon}
          <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        {items && items.length > 0 && (
          <ul className="text-gray-400 space-y-2 text-sm">
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default LinkCard;
