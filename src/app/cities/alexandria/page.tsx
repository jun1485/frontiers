import React from "react";
import CityLayout from "../CityLayout";
import { alexandriaData } from "@/data/cities/alexandria";

// 알렉산드리아 도시 페이지
export default function AlexandriaPage() {
  return <CityLayout cityData={alexandriaData} />;
}
