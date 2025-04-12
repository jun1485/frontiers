import React from "react";
import { CardLayout } from "@/components";
import { heliopolisData } from "@/data/cities/heliopolis";
import CityCard from "@/components/CityCard";

export default function HeliopolisPage() {
  return (
    <CardLayout>
      <CityCard city={heliopolisData} />
    </CardLayout>
  );
}
