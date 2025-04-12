import { CardLayout } from "@/components";
import { egyptianCities } from "../cities";
import CityCard from "@/components/CityCard";

export default function EgyptianCitiesPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">New Egypt Cities</h1>
      <div className="grid grid-cols-1 gap-10">
        {Object.entries(egyptianCities).map(([key, city]) => (
          <CityCard key={key} city={city} />
        ))}
      </div>
    </CardLayout>
  );
}
