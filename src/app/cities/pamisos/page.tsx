import React from "react";
import CityLayout from "../CityLayout";
import { pamisosData } from "@/data/cities/pamisos";

// 파미소스 도시 페이지
export default function PamisosPage() {
  return <CityLayout cityData={pamisosData} />;
}
