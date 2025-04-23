import React from "react";
import { CardLayout } from "@/components";
import { memphisData } from "@/data/cities/memphis";
import CityCard from "@/components/CityCard";

export default function MemphisPage() {
  return (
    <CardLayout>
      <CityCard city={memphisData} />
    </CardLayout>
  );
}
