import React from "react";
import { CardLayout } from "@/components";
import { gizaData } from "@/data/cities/giza";
import CityCard from "@/components/CityCard";

export default function GizaPage() {
  return (
    <CardLayout>
      <CityCard city={gizaData} />
    </CardLayout>
  );
}
