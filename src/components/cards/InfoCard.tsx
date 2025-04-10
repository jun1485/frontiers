import React, { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  bgColor?: string;
  titleColor?: string;
  items?: string[];
  icon?: ReactNode;
  subtitle?: {
    label: string;
    content: string;
  };
}

// 정보 카드 컴포넌트
// 다양한 페이지에서 재사용 가능한 카드 컴포넌트
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  bgColor = "bg-gray-700",
  titleColor = "text-amber-400",
  items,
  icon,
  subtitle,
}) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg`}>
      <h4 className={`text-lg font-medium ${titleColor} flex items-center`}>
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h4>
      <p className="text-gray-300 mt-2">{description}</p>

      {subtitle && (
        <div className="mt-2">
          <h5 className={`text-sm font-medium ${titleColor}`}>
            {subtitle.label}
          </h5>
          <p className="text-gray-400 text-sm">{subtitle.content}</p>
        </div>
      )}

      {items && items.length > 0 && (
        <ul className="text-gray-400 space-y-2 text-sm mt-2">
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InfoCard;
