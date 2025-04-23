import { CityData } from "@/types/city";
import { romeData } from "@/data/cities/rome";
import { spartaData } from "@/data/cities/sparta";
import { athensData } from "@/data/cities/athens";
import { corinthData } from "@/data/cities/corinth";
import { pamisosData } from "@/data/cities/pamisos";
import { alexandriaData } from "@/data/cities/alexandria";
import { cairoData } from "@/data/cities/cairo";
import { aswanData } from "@/data/cities/aswan";
import { gizaData } from "@/data/cities/giza";
import { heliopolisData } from "@/data/cities/heliopolis";
import { luxorData } from "@/data/cities/luxor";
import { memphisData } from "@/data/cities/memphis";
import { thebesData } from "@/data/cities/thebes";
import { milanData } from "@/data/cities/milan";
import { naplesData } from "@/data/cities/naples";
import { portunaData } from "@/data/cities/portuna";

// 도시 데이터 맵
const cityDataMap: Record<string, CityData> = {
  rome: romeData,
  sparta: spartaData,
  athens: athensData,
  corinth: corinthData,
  pamisos: pamisosData,
  alexandria: alexandriaData,
  cairo: cairoData,
  aswan: aswanData,
  giza: gizaData,
  heliopolis: heliopolisData,
  luxor: luxorData,
  memphis: memphisData,
  thebes: thebesData,
  milan: milanData,
  naples: naplesData,
  portuna: portunaData,
};

/**
 * 도시 이름으로 도시 데이터를 가져오는 함수
 * @param cityName 도시 이름
 * @returns 도시 데이터 또는 undefined
 */
export function getCityData(cityName: string): CityData | undefined {
  // 소문자로 변환하여 일관성 유지
  const normalizedCityName = cityName.toLowerCase();
  return cityDataMap[normalizedCityName];
}

/**
 * 모든 도시 데이터 가져오기
 * @returns 모든 도시 데이터 배열
 */
export function getAllCities(): CityData[] {
  return Object.values(cityDataMap);
}

/**
 * 모든 도시 이름 가져오기
 * @returns 모든 도시 이름 배열
 */
export function getAllCityNames(): string[] {
  return Object.keys(cityDataMap);
}
