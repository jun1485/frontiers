import React from "react";
import CityLayout from "../CityLayout";
import { portunaData } from "@/data/cities/portuna";

// 포르투나 도시 페이지
export default function PortunaPage() {
  return <CityLayout cityData={portunaData} />;
}
