import React from "react";
import CityLayout from "../CityLayout";
import { milanData } from "@/data/cities/milan";

// 밀라노 도시 페이지
export default function MilanPage() {
  return <CityLayout cityData={milanData} />;
}
