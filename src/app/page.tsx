import React from "react";
import { LinkCard, InfoCard } from "@/components/cards";
import { EyeIcon, SmallBookIcon, MoonIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-400 tracking-tight">
          Frontiers World
        </h1>
        <p className="mt-3 text-xl text-gray-300">
          Where ancient civilizations meet futuristic technology
        </p>
        <div className="mt-6 text-gray-400 max-w-3xl">
          <p>
            In 285 BC, coinciding with the establishment of the Library of
            Alexandria, an event known as &quot;Prometheus&apos; Second
            Fire&quot; marked the beginning of a new era. A meteorite containing
            advanced alien knowledge in the form of tablets became the catalyst
            for unprecedented technological advancement.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <LinkCard
          href="/eris"
          title="ERIS"
          description="Eye of Ra Intelligence Service - New Egypt's elite spy and cyber warfare division"
          icon={<EyeIcon />}
          items={[
            "Advanced surveillance systems",
            "Cyber operations & signal intelligence",
            "Covert missions & espionage",
          ]}
          bgColor="bg-gradient-to-br from-cyan-900 to-gray-800"
          borderColor="border-cyan-800/30"
          hoverBorderColor="border-cyan-600/50"
          titleColor="text-cyan-400"
        />

        <LinkCard
          href="/mythology"
          title="Ancient Egyptian Mythology"
          description="The mythological foundation that shapes the Frontiers World"
          icon={<SmallBookIcon />}
          items={[
            "Creation myths and early gods",
            "Divine conflicts and roles",
            "Modern interpretations",
          ]}
          bgColor="bg-gradient-to-br from-amber-900 to-gray-800"
          borderColor="border-amber-800/30"
          hoverBorderColor="border-amber-600/50"
          titleColor="text-amber-400"
        />

        <LinkCard
          href="/universe"
          title="Frontiers Universe"
          description="A world where ancient civilizations embrace futuristic technology"
          icon={<MoonIcon />}
          items={[
            "Major civilizations",
            "Society and environment",
            "Space exploration",
          ]}
          bgColor="bg-gradient-to-br from-purple-900 to-gray-800"
          borderColor="border-purple-800/30"
          hoverBorderColor="border-purple-600/50"
          titleColor="text-purple-400"
        />
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">
          Featured Story
        </h2>
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">
            Tarek&apos;s Journey
          </h3>
          <p className="text-gray-300">
            A former sensor manager at Hapy Corporation, Tarek&apos;s life
            changes when he&apos;s recruited by Commander Osiris following a
            military incident affecting the Nile&apos;s water quality. Faced
            with moral choices and approached by Roman agents, he maintains his
            loyalty to New Egypt while contributing to the success of the
            &quot;Amun&apos;s Dream&quot; Mars mission.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Major Locations"
          description="Key locations in the Frontiers world"
          items={[
            "Nile River Region - New Egypt's core territory",
            "Krypteia Forest - Spartan military training grounds",
            "Lunar Base - Space exploration outpost",
            'Mars Colony - "Amun\'s Dream" project site',
          ]}
          titleColor="text-cyan-400"
        />

        <InfoCard
          title="Key Themes"
          description="Main themes of the Frontiers universe"
          items={[
            "Technological advancement vs. environmental decline",
            "Political and moral conflicts",
            "Space exploration as escape and opportunity",
            "Balance between tradition and progress",
          ]}
          titleColor="text-purple-400"
        />
      </section>
    </>
  );
}
