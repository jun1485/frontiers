import { CityData } from "@/types/city";
import { cairoData } from "@/data/cities/cairo";
import { gizaData } from "@/data/cities/giza";
import { alexandriaData } from "@/data/cities/alexandria";
import { luxorData } from "@/data/cities/luxor";
import { aswanData } from "@/data/cities/aswan";
import { heliopolisData } from "@/data/cities/heliopolis";
import { memphisData } from "@/data/cities/memphis";
import { thebesData } from "@/data/cities/thebes";

export const egyptianCities: Record<string, CityData> = {
  cairo: cairoData,
  giza: gizaData,
  alexandria: alexandriaData,
  luxor: luxorData,
  aswan: aswanData,
  heliopolis: heliopolisData,
  memphis: memphisData,
  thebes: thebesData,
};
