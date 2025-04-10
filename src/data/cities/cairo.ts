import { CityData } from "@/types/city";

// 카이로 도시 데이터
export const cairoData: CityData = {
  name: "Cairo",
  civilizationName: "New Egypt",
  description:
    "The capital of New Egypt and the location of ERIS Central Command Headquarters.",
  mainInstitutions: [
    {
      name: "Eye of Ra Intelligence Service (ERIS)",
      description:
        "New Egypt's elite spy and cyber warfare division specializing in hacking, covert operations, and surveillance. It is dedicated to protecting New Egypt's interests and uncovering secrets of competing civilizations, combining cutting-edge technology with ancient wisdom.",
      headquarters: "Cairo Central Command Headquarters",
      departments: [
        {
          name: "Cyber Operations Division",
          location: "Alexandria",
          specialization:
            "Specializing in cyber security, warfare operations, hacking, and digital surveillance",
        },
        {
          name: "Signals Intelligence Division",
          location: "Luxor",
          specialization:
            "Focused on communications interception, satellite surveillance, and code breaking",
        },
        {
          name: "Research and Development Division",
          location: "Memphis",
          specialization:
            "Developing advanced technologies, hacking tools, and AI systems",
        },
        {
          name: "Covert Operations Division",
          location: "Thebes",
          specialization:
            "Planning and executing secret missions, infiltration, and intelligence gathering",
        },
        {
          name: "Human Intelligence Division",
          location: "Giza",
          specialization:
            "Managing human assets, field agents, and undercover operatives",
        },
        {
          name: "Analysis and Strategy Division",
          location: "Heliopolis",
          specialization:
            "Intelligence analysis, threat assessment, and strategic planning",
        },
        {
          name: "Logistics and Support Division",
          location: "Aswan",
          specialization:
            "Managing resources, transportation, and supply chain operations",
        },
      ],
    },
    {
      name: "Haphi Corporation",
      description:
        "A major institution responsible for monitoring wastewater in the Nile region.",
    },
  ],
  keyFigures: [
    {
      name: "Commander Osiris",
      role: "ERIS Commander",
      description:
        "Leader of the 'Amun's Dream' Mars exploration mission. He experiences personal conflict between his mission and family (relationship with his daughter Bastet) and is responsible for maintaining mission security against Roman interference.",
    },
  ],
  coreTechnologies: [
    {
      category: "ERIS Technologies",
      items: [
        "Hacking, covert operations, surveillance",
        "Advanced biometric scanners",
        "AI surveillance systems",
        "Holographic displays",
        "AI assistants",
        "Cyber warfare tools",
        "Information analysis tools",
        "Advanced materials like titanium and glass for building exteriors",
        "Illuminated hieroglyphic inscriptions with security functions",
      ],
    },
    {
      category: "Space Exploration",
      items: ["Deep space hibernation research", "Space colony development"],
    },
    {
      category: "Architecture",
      items: ["Integration of ultra-modern skyscrapers with ancient buildings"],
    },
    {
      category: "Environmental Technologies",
      items: ["Wastewater monitoring technology (Haphi Corporation)"],
    },
    {
      category: "Other Technologies",
      items: ["Mummification techniques integrated with modern science"],
    },
  ],
  militarySystem:
    "ERIS: As New Egypt's elite intelligence and cyber warfare unit, it plays a crucial role in military operations. It performs various military roles through specialized divisions such as cyber operations, signals intelligence, and covert operations.",
  cityFeatures: [
    "Architectural style blending ultra-modern skyscrapers with ancient buildings",
    "Streets decorated with neon signs in ancient script",
    "Severe air pollution, smog, urban deterioration, and sustainability crisis",
    "Distinct class system",
    "Various religions including traditional polytheism, Christianity, Islam, atheism/non-religious groups, and conflicts between religions and between religion and science",
  ],
};
