import { portunaData } from "@/data/cities/portuna";
import CityCard from "@/components/CityCard";

export default function PortunaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={portunaData} />
    </div>
  );
}
