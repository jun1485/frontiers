import React from "react";
import CityLayout from "../CityLayout";
import { thebesData } from "@/data/cities/thebes";

// 테베 도시 페이지
export default function ThebesPage() {
  return <CityLayout cityData={thebesData} />;
}
