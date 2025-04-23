import React from "react";
import { CardLayout } from "@/components";
import { aswanData } from "@/data/cities/aswan";
import CityCard from "@/components/CityCard";

export default function AswanPage() {
  return (
    <CardLayout>
      <CityCard city={aswanData} />
    </CardLayout>
  );
}
