import { spartaData } from "@/data/cities/sparta";
import CityCard from "@/components/CityCard";
import { CardLayout } from "@/components";

export default function SpartaPage() {
  return (
    <CardLayout>
      <CityCard city={spartaData} />
    </CardLayout>
  );
}
