import { CivilizationStyle } from "@/types/city";

// 문명별 컬러 테마 정의
export const getCivilizationColors = (
  civilization: string
): CivilizationStyle => {
  switch (civilization) {
    case "New Egypt":
    case "뉴이집트":
      return {
        primary: "from-cyan-400 to-blue-400",
        heading: "text-cyan-400",
        section: "text-cyan-300",
        accent: "text-amber-400",
        border: "border-cyan-900",
        button: "bg-cyan-800 text-cyan-200 hover:bg-cyan-700",
        hover: "hover:text-cyan-300",
      };
    case "Roman Empire":
    case "로마 제국":
      return {
        primary: "from-red-400 to-rose-500",
        heading: "text-red-400",
        section: "text-red-300",
        accent: "text-amber-400",
        border: "border-red-900",
        button: "bg-red-800 text-red-200 hover:bg-red-700",
        hover: "hover:text-red-300",
      };
    case "Spartan Society":
    case "스파르타 사회":
      return {
        primary: "from-blue-400 to-indigo-500",
        heading: "text-blue-400",
        section: "text-blue-300",
        accent: "text-amber-400",
        border: "border-blue-900",
        button: "bg-blue-800 text-blue-200 hover:bg-blue-700",
        hover: "hover:text-blue-300",
      };
    default:
      return {
        primary: "from-slate-400 to-gray-500",
        heading: "text-slate-400",
        section: "text-slate-300",
        accent: "text-amber-400",
        border: "border-slate-700",
        button: "bg-slate-800 text-slate-200 hover:bg-slate-700",
        hover: "hover:text-slate-300",
      };
  }
};
