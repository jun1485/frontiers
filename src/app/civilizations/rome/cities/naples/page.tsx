import { naplesData } from "@/data/cities/naples";
import CityCard from "@/components/CityCard";

export default function NaplesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={naplesData} />
    </div>
  );
}
