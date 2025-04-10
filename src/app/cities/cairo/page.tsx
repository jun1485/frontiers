import React from "react";
import CityLayout from "../CityLayout";
import { cairoData } from "@/data/cities/cairo";

// 카이로 도시 페이지
export default function CairoPage() {
  return <CityLayout cityData={cairoData} />;
}
