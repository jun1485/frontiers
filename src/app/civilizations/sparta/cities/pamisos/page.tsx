import { pamisosData } from "@/data/cities/pamisos";
import CityCard from "@/components/CityCard";

export default function PamisosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={pamisosData} />
    </div>
  );
}
