import React from "react";
import { CardLayout } from "@/components";
import { romeData } from "@/data/cities/rome";
import CityCard from "@/components/CityCard";

export default function RomePage() {
  return (
    <CardLayout>
      <CityCard city={romeData} />
    </CardLayout>
  );
}
