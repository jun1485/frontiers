import { heliopolisData } from "@/data/cities/heliopolis";
import CityCard from "@/components/CityCard";

export default function HeliopolisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={heliopolisData} />
    </div>
  );
}
