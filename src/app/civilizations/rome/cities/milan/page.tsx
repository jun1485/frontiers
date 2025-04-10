import { milanData } from "@/data/cities/milan";
import CityCard from "@/components/CityCard";

export default function MilanPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CityCard city={milanData} />
    </div>
  );
}
