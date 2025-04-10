import { athensData } from "@/data/cities/athens";
import CityCard from "@/components/CityCard";

export default function AthensPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={athensData} />
    </div>
  );
}
