import React from "react";
import Link from "next/link";

interface CityGroup {
  civilization: string;
  cities: {
    name: string;
    href: string;
    info?: string;
  }[];
}

export default function CitiesIndexPage() {
  const cityGroups: CityGroup[] = [
    {
      civilization: "New Egypt",
      cities: [
        {
          name: "Cairo",
          href: "/cities/cairo",
          info: "Capital of New Egypt, ERIS Central Command HQ",
        },
        {
          name: "Alexandria",
          href: "/cities/alexandria",
          info: "ERIS Cyber Operations Division",
        },
        {
          name: "Luxor",
          href: "/cities/luxor",
          info: "ERIS Signals Intelligence Division",
        },
        {
          name: "Memphis",
          href: "/cities/memphis",
          info: "ERIS Research & Development Division",
        },
        {
          name: "Thebes",
          href: "/cities/thebes",
          info: "ERIS Covert Operations Division",
        },
        {
          name: "Giza",
          href: "/cities/giza",
          info: "ERIS Human Intelligence Division",
        },
        {
          name: "Heliopolis",
          href: "/cities/heliopolis",
          info: "ERIS Analysis & Strategy Division",
        },
        {
          name: "Aswan",
          href: "/cities/aswan",
          info: "ERIS Logistics & Support Division",
        },
      ],
    },
    {
      civilization: "Roman Empire",
      cities: [
        {
          name: "Rome",
          href: "/cities/rome",
          info: "Capital of the Roman Empire",
        },
        { name: "Milan", href: "/cities/milan" },
        { name: "Naples", href: "/cities/naples" },
        { name: "Portuna", href: "/cities/portuna" },
      ],
    },
    {
      civilization: "Spartan Society",
      cities: [
        {
          name: "Sparta",
          href: "/cities/sparta",
          info: "Center of the Spartan Society",
        },
        { name: "Athens", href: "/cities/athens" },
        { name: "Corinth", href: "/cities/corinth" },
        {
          name: "Pamisos",
          href: "/cities/pamisos",
          info: "Krypteia Military Training",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 tracking-tight">
          Frontiers Universe Cities
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          Explore the major cities of various civilizations
        </p>
      </header>

      <div className="space-y-10">
        {cityGroups.map((group, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6 border-b border-gray-700 pb-2">
              {group.civilization}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.cities.map((city, cityIndex) => (
                <Link
                  key={cityIndex}
                  href={city.href}
                  className="block bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700 hover:border-cyan-700 hover:shadow-cyan-900/20 transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    {city.name}
                  </h3>
                  {city.info && (
                    <p className="text-gray-400 text-sm">{city.info}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 mb-8 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-cyan-800 text-cyan-200 rounded-full hover:bg-cyan-700 transition duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
