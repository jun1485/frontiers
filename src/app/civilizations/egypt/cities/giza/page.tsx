import { gizaData } from "@/data/cities/giza";
import CityCard from "@/components/CityCard";

export default function GizaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={gizaData} />
    </div>
  );
}
