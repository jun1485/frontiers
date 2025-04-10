import { corinthData } from "@/data/cities/corinth";
import CityCard from "@/components/CityCard";

export default function CorinthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={corinthData} />
    </div>
  );
}
