import React from "react";
import { CardLayout } from "@/components";
import { corinthData } from "@/data/cities/corinth";
import CityCard from "@/components/CityCard";

export default function CorinthPage() {
  return (
    <CardLayout>
      <CityCard city={corinthData} />
    </CardLayout>
  );
}
