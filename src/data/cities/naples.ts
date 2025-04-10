import { CityData } from "@/types/city";

// 나폴리 도시 데이터
export const naplesData: CityData = {
  name: "Naples",
  civilizationName: "Republic of Neapolis",
  description:
    "Vibrant port city and cultural center of the Mediterranean, known for its artisan districts, rich academic tradition, and democratic governance.",
  population: "3,200,000",
  mainInstitutions: [
    {
      name: "The Parthenopean Assembly",
      description:
        "The central democratic institution where representatives from all districts vote on policy and governance.",
    },
    {
      name: "University of Neapolis",
      description:
        "Ancient academic institution specializing in philosophy, mathematics, and nascent scientific research.",
    },
    {
      name: "The Maritime Council",
      description:
        "Regulatory body overseeing Naples' vast trading network and maintaining relations with other Mediterranean powers.",
    },
  ],
  keyFigures: [
    {
      name: "Sophia Valente",
      role: "First Citizen (elected leader)",
      description:
        "Charismatic former sea captain who rose to political prominence for her diplomatic skills and innovative governance proposals.",
    },
    {
      name: "Professor Marco Lazzari",
      role: "University Chancellor",
      description:
        "Leading mathematician and philosopher who has helped establish Naples as a center of knowledge and innovation.",
    },
  ],
  coreTechnologies: [
    {
      category: "Maritime Technologies",
      items: [
        "Advanced ship designs enabling faster Mediterranean travel",
        "Navigational systems using celestial mapping",
        "Underwater harvesting techniques for food and materials",
        "Tidal energy capture systems",
      ],
    },
    {
      category: "Cultural & Civic Technologies",
      items: [
        "Public forum acoustic engineering",
        "Aqueduct water purification systems",
        "District-based voting apparatus",
        "Public education methodology",
      ],
    },
    {
      category: "Artisanal Innovations",
      items: [
        "Specialized glassmaking techniques",
        "Textile processing innovations",
        "Culinary preservation methods",
        "Decorative metalworking processes",
      ],
    },
  ],
  militarySystem:
    "Naples maintains a modest defense force primarily focused on naval protection. Their strategy emphasizes diplomacy first, with military action as a last resort. The Neapolitan Guard serves as both city police and defensive force.",
  cityFeatures: [
    "Concentric city design with the Assembly at the center",
    "Sprawling University district with libraries and lecture halls",
    "Vibrant market squares in each neighborhood",
    "Extensive harbor facilities with specialized trading docks",
    "Public forums and theaters throughout the city",
    "Artisan quarters organized by craft and trade",
    "Advanced aqueduct system providing clean water to all districts",
  ],
};
