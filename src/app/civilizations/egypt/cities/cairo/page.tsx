import { cairoData } from "@/data/cities/cairo";
import CityCard from "@/components/CityCard";

export default function CairoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={cairoData} />
    </div>
  );
}
