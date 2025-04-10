import React from "react";
import CityLayout from "../CityLayout";
import { memphisData } from "@/data/cities/memphis";

// 멤피스 도시 페이지
export default function MemphisPage() {
  return <CityLayout cityData={memphisData} />;
}
