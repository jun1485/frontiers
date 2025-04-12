import React from "react";
import { CardLayout } from "@/components";
import { naplesData } from "@/data/cities/naples";
import CityCard from "@/components/CityCard";

export default function NaplesPage() {
  return (
    <CardLayout>
      <CityCard city={naplesData} />
    </CardLayout>
  );
}
