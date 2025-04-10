import { spartaData } from "@/data/cities/sparta";
import CityCard from "@/components/CityCard";

export default function SpartaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={spartaData} />
    </div>
  );
}
