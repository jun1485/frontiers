import React from "react";
import { notFound } from "next/navigation";
import CityLayout from "../CityLayout";
import { getCityData } from "@/utils/city-utils";

// 다이나믹 도시 페이지
export default async function CityPage({
  params,
}: {
  params: { cityName: string };
}) {
  const cityData = getCityData(params.cityName);

  if (!cityData) {
    notFound();
  }

  return <CityLayout cityData={cityData} />;
}

// 정적 생성을 위한 경로 생성 함수
export async function generateStaticParams() {
  const cityNames = [
    "rome",
    "sparta",
    "athens",
    "corinth",
    "pamisos",
    "alexandria",
    "cairo",
    "aswan",
    "giza",
    "heliopolis",
    "luxor",
    "memphis",
    "thebes",
    "milan",
    "naples",
    "portuna",
  ];

  return cityNames.map((cityName) => ({
    cityName: cityName,
  }));
}
