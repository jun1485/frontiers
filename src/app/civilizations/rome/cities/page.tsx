import { romanCities } from "../cities";
import CityCard from "@/components/CityCard";

export default function RomanCitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Roman Empire Cities</h1>
      <div className="grid grid-cols-1 gap-10">
        {Object.entries(romanCities).map(([key, city]) => (
          <CityCard key={key} city={city} />
        ))}
      </div>
    </div>
  );
}
