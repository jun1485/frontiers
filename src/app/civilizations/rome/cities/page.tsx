import React from "react";
import { romanCities } from "../cities";
import { CardLayout, CityCard } from "@/components";

export default function RomeCitiesPage() {
  return (
    <CardLayout>
      <h1 className="text-3xl font-bold mb-6">Roman Empire Cities</h1>
      <div className="grid grid-cols-1 gap-10">
        {Object.entries(romanCities).map(([key, city]) => (
          <CityCard key={key} city={city} />
        ))}
      </div>
    </CardLayout>
  );
}
