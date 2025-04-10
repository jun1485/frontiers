import React from "react";
import Link from "next/link";

interface HomeButtonProps {
  buttonColor: string;
}

// 홈 버튼 컴포넌트
const HomeButton: React.FC<HomeButtonProps> = ({ buttonColor }) => {
  return (
    <div className="mt-10 mb-8 text-center">
      <Link
        href="/"
        className={`inline-block px-6 py-3 ${buttonColor} rounded-full transition duration-200`}
      >
        Return to Home
      </Link>
    </div>
  );
};

export default HomeButton;
