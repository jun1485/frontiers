import React from "react";
import { CardLayout } from "@/components";
import { athensData } from "@/data/cities/athens";
import CityCard from "@/components/CityCard";

export default function AthensPage() {
  return (
    <CardLayout>
      <CityCard city={athensData} />
    </CardLayout>
  );
}
