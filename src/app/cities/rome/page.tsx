import React from "react";
import CityLayout from "../CityLayout";
import { romeData } from "@/data/cities/rome";

// 로마 도시 페이지
export default function RomePage() {
  return <CityLayout cityData={romeData} />;
}
