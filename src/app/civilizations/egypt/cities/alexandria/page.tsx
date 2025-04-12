import { alexandriaData } from "@/data/cities/alexandria";
import CityCard from "@/components/CityCard";
import { CardLayout } from "@/components";
export default function AlexandriaPage() {
  return (
    <CardLayout>
      <CityCard city={alexandriaData} />
    </CardLayout>
  );
}
