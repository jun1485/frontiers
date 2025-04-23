import React from "react";
import { CardLayout } from "@/components";
import { thebesData } from "@/data/cities/thebes";
import CityCard from "@/components/CityCard";

export default function ThebesPage() {
  return (
    <CardLayout>
      <CityCard city={thebesData} />
    </CardLayout>
  );
}
