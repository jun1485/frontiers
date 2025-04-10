import React from "react";
import CityLayout from "../CityLayout";
import { aswanData } from "@/data/cities/aswan";

// 아스완 도시 페이지
export default function AswanPage() {
  return <CityLayout cityData={aswanData} />;
}
