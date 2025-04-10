import { CityData } from "@/types/city";
import { romeData } from "@/data/cities/rome";
import { milanData } from "@/data/cities/milan";
import { naplesData } from "@/data/cities/naples";

export const romanCities: Record<string, CityData> = {
  rome: romeData,
  milan: milanData,
  naples: naplesData,
};
