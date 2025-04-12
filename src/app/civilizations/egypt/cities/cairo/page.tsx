import React from "react";
import { CardLayout } from "@/components";
import { cairoData } from "@/data/cities/cairo";
import CityCard from "@/components/CityCard";

export default function CairoPage() {
  return (
    <CardLayout>
      <CityCard city={cairoData} />
    </CardLayout>
  );
}
