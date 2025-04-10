import { romeData } from "@/data/cities/rome";
import CityCard from "@/components/CityCard";

export default function RomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={romeData} />
    </div>
  );
}
