import { CityData } from "@/types/city";

// 스파르타 도시 데이터
export const spartaData: CityData = {
  name: "Sparta",
  civilizationName: "Spartan Society",
  description:
    "The capital city of the Spartan Society, known for its brutal military training and strict social hierarchy.",
  mainInstitutions: [
    {
      name: "The Gerousia (Council of Elders)",
      description:
        "The ruling council of Sparta, comprised of citizens over the age of 60. They make all major decisions for the society.",
    },
    {
      name: "The Krypteia Command Center",
      description:
        "Headquarters for Sparta's elite intelligence and security force. They monitor and control the Krypteia ritual activities that take place in Pamisos.",
    },
    {
      name: "The Lycurgus Academy",
      description:
        "The central educational and military training institution where young Spartans are molded into warriors and citizens.",
    },
  ],
  keyFigures: [
    {
      name: "Queen Gorgo",
      role: "Co-ruler of Sparta",
      description:
        "Known for her wisdom and influence in Spartan politics, she advocates for Spartan expansion and maintaining traditional values.",
    },
    {
      name: "General Leonidas",
      role: "Military Commander",
      description:
        "Descendant of the legendary King Leonidas, he leads Sparta's military forces and maintains the Krypteia program.",
    },
  ],
  coreTechnologies: [
    {
      category: "Military Technologies",
      items: [
        "Advanced combat simulation systems",
        "Biometric monitoring for soldiers",
        "Networked battlefield communication",
        "Holographic war planning system",
      ],
    },
    {
      category: "Surveillance Systems",
      items: [
        "Citywide monitoring network",
        "Behavioral analysis software",
        "Facial recognition integrated with social ranking",
      ],
    },
    {
      category: "Social Engineering",
      items: [
        "Citizen compliance programming",
        "Social class reinforcement systems",
        "Agoge educational methodology",
      ],
    },
  ],
  militarySystem:
    "The Spartan military system is central to their society. All citizens undergo mandatory military training, and the society maintains a permanent standing army. The Krypteia serves as both a training ritual and a method of population control.",
  cityFeatures: [
    "Minimalist, utilitarian architecture emphasizing function over form",
    "Central military parade ground surrounded by government buildings",
    "Stark contrast between spartan living quarters and ornate government facilities",
    "Training grounds and combat arenas throughout the city",
    "Monument to the Battle of Thermopylae in the central square",
    "Limited entertainment venues focused on military displays and athletic competition",
  ],
};
