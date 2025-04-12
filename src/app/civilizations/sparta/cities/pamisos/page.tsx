import React from "react";
import { CardLayout } from "@/components";
import { pamisosData } from "@/data/cities/pamisos";
import CityCard from "@/components/CityCard";

export default function PamisosPage() {
  return (
    <CardLayout>
      <CityCard city={pamisosData} />
    </CardLayout>
  );
}
