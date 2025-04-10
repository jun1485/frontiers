import React from "react";
import CityLayout from "../CityLayout";
import { gizaData } from "@/data/cities/giza";

// 기자 도시 페이지
export default function GizaPage() {
  return <CityLayout cityData={gizaData} />;
}
