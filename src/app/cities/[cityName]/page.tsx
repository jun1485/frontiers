import React from "react";
import { notFound } from "next/navigation";
import CityLayout from "../CityLayout";
import { getCityData } from "@/utils/city-utils";

type pageParams = Promise<{ cityName: string }>;

// 다이나믹 도시 페이지
export default async function CityPage({ params }: { params: pageParams }) {
  const { cityName } = await params;
  const cityData = getCityData(cityName);

  if (!cityData) {
    notFound();
  }

  return <CityLayout cityData={cityData} />;
}

// 정적 생성을 위한 경로 생성 함수
export async function generateStaticParams(): Promise<{ cityName: string }[]> {
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
