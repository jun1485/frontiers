import { memphisData } from "@/data/cities/memphis";
import CityCard from "@/components/CityCard";

export default function MemphisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={memphisData} />
    </div>
  );
}
