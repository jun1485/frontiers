import React from "react";
import CityLayout from "../CityLayout";
import { corinthData } from "@/data/cities/corinth";

// 코린토스 도시 페이지
export default function CorinthPage() {
  return <CityLayout cityData={corinthData} />;
}
