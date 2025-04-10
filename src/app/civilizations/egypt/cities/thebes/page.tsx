import { thebesData } from "@/data/cities/thebes";
import CityCard from "@/components/CityCard";

export default function ThebesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={thebesData} />
    </div>
  );
}
