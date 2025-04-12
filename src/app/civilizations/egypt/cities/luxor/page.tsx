import React from "react";
import { CardLayout } from "@/components";
import { luxorData } from "@/data/cities/luxor";
import CityCard from "@/components/CityCard";

export default function LuxorPage() {
  return (
    <CardLayout>
      <CityCard city={luxorData} />
    </CardLayout>
  );
}
