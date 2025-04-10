import React from "react";
import { PageLayout } from "@/components/layouts";
import { PageSection } from "@/components/sections";
import { InfoCard } from "@/components/cards";
import { BookIcon, ArrowIcon, LightBulbIcon } from "@/components/icons";

export default function MythologyPage() {
  const contentsItems = [
    { id: "myth-creation", title: "Creation Myth" },
    { id: "myth-conflicts", title: "Major Conflicts" },
    { id: "myth-meaning", title: "Meaning" },
  ];

  return (
    <PageLayout
      title="Ancient Egyptian Mythology"
      subtitle="Egyptian mythology that forms the basis of the Frontiers Universe worldview"
      gradientColors="from-amber-400 to-yellow-500"
      contentsItems={contentsItems}
    >
      <PageSection
        id="myth-creation"
        title="Creation Myths and Early Gods"
        icon={<BookIcon />}
        gradientColors="from-amber-900 to-gray-800"
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          1. The Primordial State
        </h3>
        <div className="space-y-4 text-gray-200 leading-relaxed">
          <p>
            The world was filled with an infinite primordial water called
            &apos;Nun&apos;, a state where only darkness and chaos existed.
            There was no life, no death, no sky, and no earth.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg my-6 border-l-4 border-amber-600">
            <p className="italic text-amber-200">
              &quot;In the beginning, there was the infinite primordial water,
              Nun. Within it, all possibilities slept, and the world had neither
              form nor order.&quot;
            </p>
            <p className="text-right mt-2 text-sm text-gray-400">
              - Heliopolis Creation Myth
            </p>
          </div>
        </div>
      </PageSection>

      <section id="atum-emergence" className="mb-12">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
              2. The Emergence of Atum
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-gray-200">
                <p>
                  According to the Heliopolis myth, Atum, the first self-created
                  god, was born from a sacred lotus flower. In other versions,
                  he created himself on a hill that emerged from the primordial
                  waters. His name means &quot;the Complete One,&quot;
                  signifying his self-existence.
                </p>
                <p>
                  Atum created the first twin gods, Shu (air and breath of life)
                  and Tefnut (moisture and order) from his bodily fluids. Shu
                  and Tefnut established the basic order of the cosmos and
                  maintained the balance between dryness and moisture, creating
                  the foundation for the emergence of life.
                </p>
              </div>
              <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 italic">
                  Image display area for God Atum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageSection
        id="myth-conflicts"
        title="Conflicts and Roles of Major Gods"
        icon={<ArrowIcon />}
        gradientColors="from-amber-900 to-gray-800"
      >
        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
          1. The Conflict Between Osiris and Set
        </h3>
        <div className="space-y-4 text-gray-200 leading-relaxed">
          <p>
            Osiris (god of civilization and agriculture), a child of Geb and
            Nut, became Egypt&apos;s first pharaoh, teaching civilization and
            agriculture and bringing prosperity. However, his brother Set (god
            of chaos and storms) murdered him out of jealousy and lust for
            power.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="myth-meaning"
        title="Meaning of Mythology"
        icon={<LightBulbIcon />}
        gradientColors="from-amber-900 to-gray-800"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            title="Explanation of Natural Phenomena"
            description="Explains the cycle of day and night, the flooding of the Nile, agricultural cycles, and seasonal changes through the activities of the gods."
            titleColor="text-amber-400"
          />
          <InfoCard
            title="Social Meaning"
            description="Provides legitimacy to royal authority, establishes social order, conveys moral values, and contributes to cultural identity formation."
            titleColor="text-amber-400"
          />
          <InfoCard
            title="Cosmic Meaning"
            description="Illustrates the eternal opposition between order and chaos, the cycle of life and death, the inevitable triumph of justice, and the possibility of resurrection and rebirth."
            titleColor="text-amber-400"
          />
        </div>
      </PageSection>
    </PageLayout>
  );
}
