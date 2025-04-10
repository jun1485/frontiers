import { luxorData } from "@/data/cities/luxor";
import CityCard from "@/components/CityCard";

export default function LuxorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={luxorData} />
    </div>
  );
}
