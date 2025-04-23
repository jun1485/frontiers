import React from "react";
import { CardLayout } from "@/components";
import { portunaData } from "@/data/cities/portuna";
import CityCard from "@/components/CityCard";

export default function PortunaPage() {
  return (
    <CardLayout>
      <CityCard city={portunaData} />
    </CardLayout>
  );
}
