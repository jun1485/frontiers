import React from "react";
import { PageLayout } from "@/components/layouts";
import { PageSection } from "@/components/sections";
import { InfoCard } from "@/components/cards";
import { LightningIcon, BuildingIcon, PeopleIcon } from "@/components/icons";

export default function UniversePage() {
  const contentsItems = [
    { id: "fu-origin", title: "Origin Event" },
    { id: "fu-civs", title: "Major Civilizations" },
    { id: "fu-society", title: "Society/Environment" },
    { id: "fu-plot", title: "Plot Elements" },
  ];

  return (
    <PageLayout
      title="Frontiers Universe"
      subtitle="A futuristic reinterpretation of ancient civilizations, a new world"
      gradientColors="from-purple-400 to-indigo-400"
      contentsItems={contentsItems}
    >
      <PageSection
        id="fu-origin"
        title="Origin Event: Prometheus's Second Fire"
        icon={<LightningIcon />}
        gradientColors="from-purple-900 to-gray-800"
      >
        <div className="space-y-4 text-gray-200 leading-relaxed">
          <p>
            Around 285 BC, as the Library of Alexandria was established, a
            meteor approached Earth and exploded in the atmosphere. Among the
            fragments was a tablet-shaped artifact containing knowledge from an
            advanced alien civilization. This event became known as the
            &quot;Return of Prometheus,&quot; and the meteor was named
            &quot;Prometheus&apos;s Second Fire.&quot;
          </p>
          <div className="bg-gray-700 bg-opacity-30 p-4 rounded-lg my-6 border-l-4 border-purple-600">
            <p className="italic text-purple-200">
              &quot;Humanity received fire from the sky for a second time. The
              first warmed their bodies, but the second awakened their
              minds.&quot;
            </p>
            <p className="text-right mt-2 text-sm text-gray-400">
              - Records from the Library of Alexandria
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="fu-civs"
        title="Major Civilizations"
        icon={<BuildingIcon />}
        gradientColors="from-purple-900 to-gray-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
            <div className="bg-cyan-900 p-3">
              <h3 className="text-xl font-semibold text-cyan-300">New Egypt</h3>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-gray-300">
                An advanced civilization with space exploration capabilities,
                integrating mummification techniques with modern science,
                focusing on deep space hibernation research, and concentrating
                on space colony development.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-cyan-400">
                  Major Projects
                </h4>
                <p className="text-gray-400 text-sm">
                  Amun&apos;s Dream (Mars Exploration Mission)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
            <div className="bg-red-900 p-3">
              <h3 className="text-xl font-semibold text-red-300">
                Roman Empire
              </h3>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-gray-300">
                Conducting secret brain manipulation research on slaves,
                developing mind control technology, and focusing technically on
                information operations.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-red-400">
                  Main Activities
                </h4>
                <p className="text-gray-400 text-sm">
                  Technology espionage against other civilizations, sabotaging
                  New Egypt&apos;s space program
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-600 hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
            <div className="bg-blue-900 p-3">
              <h3 className="text-xl font-semibold text-blue-300">
                Spartan Society
              </h3>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-gray-300">
                Emphasizes communal living and forms a strong cooperative
                society.
              </p>
              <div className="mt-2">
                <h4 className="text-sm font-medium text-blue-400">
                  Key Institutions
                </h4>
                <p className="text-gray-400 text-sm">
                  Palatium (cooperative living spaces), Crypteia (military
                  training rituals in isolated forests)
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="fu-society"
        title="Society and Environment"
        icon={<PeopleIcon />}
        gradientColors="from-purple-900 to-gray-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            title="Urban Features"
            description="Architectural style blending ultra-modern skyscrapers with ancient buildings"
            items={[
              "Nile River Basin - Central location of New Egypt civilization",
              "Floating Gardens - Advanced farming technology",
              "Solar Power Pyramids - Main power supply infrastructure",
            ]}
            titleColor="text-purple-300"
          />
          <InfoCard
            title="Environmental Issues"
            description="The world faces many environmental challenges due to technological development"
            items={[
              "Climate change effects magnified more than originally predicted",
              "Mediterranean region turning into desert terrain",
              "Nile River pollution issue",
            ]}
            titleColor="text-purple-300"
          />
        </div>
      </PageSection>
    </PageLayout>
  );
}
