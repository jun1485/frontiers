import React from "react";
import { CardLayout } from "@/components";
import { milanData } from "@/data/cities/milan";
import CityCard from "@/components/CityCard";

export default function MilanPage() {
  return (
    <CardLayout>
      <CityCard city={milanData} />
    </CardLayout>
  );
}
