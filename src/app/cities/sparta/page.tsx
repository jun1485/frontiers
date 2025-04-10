import React from "react";
import CityLayout from "../CityLayout";
import { spartaData } from "@/data/cities/sparta";

// 스파르타 도시 페이지
export default function SpartaPage() {
  return <CityLayout cityData={spartaData} />;
}
