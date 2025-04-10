import { aswanData } from "@/data/cities/aswan";
import CityCard from "@/components/CityCard";

export default function AswanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={aswanData} />
    </div>
  );
}
