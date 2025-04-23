import { CityData } from "@/types/city";
import { spartaData } from "@/data/cities/sparta";
import { athensData } from "@/data/cities/athens";
import { corinthData } from "@/data/cities/corinth";

export const spartanCities: Record<string, CityData> = {
  sparta: spartaData,
  athens: athensData,
  corinth: corinthData,
};
