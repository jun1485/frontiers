import { alexandriaData } from "@/data/cities/alexandria";
import CityCard from "@/components/CityCard";

export default function AlexandriaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={alexandriaData} />
    </div>
  );
}
