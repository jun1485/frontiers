import React from "react";
import CityLayout from "../CityLayout";
import { heliopolisData } from "@/data/cities/heliopolis";

// 헬리오폴리스 도시 페이지
export default function HeliopolisPage() {
  return <CityLayout cityData={heliopolisData} />;
}
