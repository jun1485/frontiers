import React from "react";
import CityLayout from "../CityLayout";
import { athensData } from "@/data/cities/athens";

// 아테네 도시 페이지
export default function AthensPage() {
  return <CityLayout cityData={athensData} />;
}
