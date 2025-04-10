import React from "react";
import CityLayout from "../CityLayout";
import { luxorData } from "@/data/cities/luxor";

// 룩소르 도시 페이지
export default function LuxorPage() {
  return <CityLayout cityData={luxorData} />;
}
