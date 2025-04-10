import React from "react";
import CityLayout from "../CityLayout";
import { naplesData } from "@/data/cities/naples";

// 나폴리 도시 페이지
export default function NaplesPage() {
  return <CityLayout cityData={naplesData} />;
}
