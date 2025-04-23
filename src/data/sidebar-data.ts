// 각 문명의 도시 데이터
export const civilizationCities = {
  egypt: [
    { name: "Cairo", href: "/civilizations/egypt/cities/cairo" },
    { name: "Alexandria", href: "/civilizations/egypt/cities/alexandria" },
    { name: "Luxor", href: "/civilizations/egypt/cities/luxor" },
    { name: "Memphis", href: "/civilizations/egypt/cities/memphis" },
    { name: "Thebes", href: "/civilizations/egypt/cities/thebes" },
    { name: "Giza", href: "/civilizations/egypt/cities/giza" },
    { name: "Heliopolis", href: "/civilizations/egypt/cities/heliopolis" },
    { name: "Aswan", href: "/civilizations/egypt/cities/aswan" },
  ],
  rome: [
    { name: "Rome", href: "/civilizations/rome/cities/rome" },
    { name: "Milan", href: "/civilizations/rome/cities/milan" },
    { name: "Naples", href: "/civilizations/rome/cities/naples" },
    { name: "Portuna", href: "/civilizations/rome/cities/portuna" },
  ],
  sparta: [
    { name: "Sparta", href: "/civilizations/sparta/cities/sparta" },
    { name: "Athens", href: "/civilizations/sparta/cities/athens" },
    { name: "Corinth", href: "/civilizations/sparta/cities/corinth" },
    { name: "Pamisos", href: "/civilizations/sparta/cities/pamisos" },
  ],
};

// 문명 서브메뉴 구조
export const chaptersData = [
  {
    title: "New Egypt",
    key: "egypt",
    subSections: [
      {
        title: "Overview",
        key: "egypt-overview",
        href: "/civilizations/egypt/overview",
        items: [
          {
            name: "Population Composition",
            href: "/civilizations/egypt/population",
          },
        ],
      },
      {
        title: "Major Institutions",
        key: "egypt-institutions",
        items: [
          { name: "ERIS", href: "/civilizations/egypt/institutions/eris" },
          {
            name: "Government Institutions",
            href: "/civilizations/egypt/institutions/government",
          },
        ],
      },
      {
        title: "Key Figures",
        key: "egypt-figures",
        items: [
          {
            name: "Political Leaders",
            href: "/civilizations/egypt/figures/leaders",
          },
          {
            name: "ERIS Agents",
            href: "/civilizations/egypt/figures/agents",
          },
        ],
      },
      {
        title: "Core Technologies",
        key: "egypt-technologies",
        items: [
          {
            name: "Cyber Technologies",
            href: "/civilizations/egypt/technologies/cyber",
          },
          {
            name: "Space Technologies",
            href: "/civilizations/egypt/technologies/space",
          },
        ],
      },
      {
        title: "Military System",
        key: "egypt-military",
        items: [
          {
            name: "Military Organization",
            href: "/civilizations/egypt/military/organization",
          },
        ],
      },
      {
        title: "Cities",
        key: "egypt-cities",
        items: civilizationCities.egypt,
      },
    ],
  },
  {
    title: "Roman Empire",
    key: "rome",
    subSections: [
      {
        title: "Overview",
        key: "rome-overview",
        href: "/civilizations/rome/overview",
        items: [
          {
            name: "Population Composition",
            href: "/civilizations/rome/population",
          },
        ],
      },
      {
        title: "Major Institutions",
        key: "rome-institutions",
        items: [
          {
            name: "Central Intelligence Bureau",
            href: "/civilizations/rome/institutions/cib",
          },
          {
            name: "Government Institutions",
            href: "/civilizations/rome/institutions/government",
          },
        ],
      },
      {
        title: "Key Figures",
        key: "rome-figures",
        items: [
          {
            name: "Political Leaders",
            href: "/civilizations/rome/figures/leaders",
          },
          {
            name: "Intelligence Agents",
            href: "/civilizations/rome/figures/agents",
          },
        ],
      },
      {
        title: "Core Technologies",
        key: "rome-technologies",
        items: [
          {
            name: "Brain Manipulation",
            href: "/civilizations/rome/technologies/brain",
          },
          {
            name: "Intelligence Operations",
            href: "/civilizations/rome/technologies/intel",
          },
        ],
      },
      {
        title: "Military System",
        key: "rome-military",
        items: [
          {
            name: "Military Organization",
            href: "/civilizations/rome/military/organization",
          },
        ],
      },
      {
        title: "Cities",
        key: "rome-cities",
        items: civilizationCities.rome,
      },
    ],
  },
  {
    title: "Spartan Society",
    key: "sparta",
    subSections: [
      {
        title: "Overview",
        key: "sparta-overview",
        href: "/civilizations/sparta/overview",
        items: [
          {
            name: "Population Composition",
            href: "/civilizations/sparta/population",
          },
        ],
      },
      {
        title: "Major Institutions",
        key: "sparta-institutions",
        items: [
          {
            name: "The Gerousia",
            href: "/civilizations/sparta/institutions/gerousia",
          },
          {
            name: "Krypteia Command",
            href: "/civilizations/sparta/institutions/krypteia",
          },
        ],
      },
      {
        title: "Key Figures",
        key: "sparta-figures",
        items: [
          {
            name: "Queen Gorgo",
            href: "/civilizations/sparta/figures/gorgo",
          },
          {
            name: "General Leonidas",
            href: "/civilizations/sparta/figures/leonidas",
          },
        ],
      },
      {
        title: "Core Technologies",
        key: "sparta-technologies",
        items: [
          {
            name: "Military Training Systems",
            href: "/civilizations/sparta/technologies/military",
          },
          {
            name: "Surveillance Systems",
            href: "/civilizations/sparta/technologies/surveillance",
          },
        ],
      },
      {
        title: "Military System",
        key: "sparta-military",
        items: [
          {
            name: "Krypteia",
            href: "/civilizations/sparta/military/krypteia",
          },
          {
            name: "Military Organization",
            href: "/civilizations/sparta/military/organization",
          },
        ],
      },
      {
        title: "Cities",
        key: "sparta-cities",
        items: civilizationCities.sparta,
      },
    ],
  },
];

export const mainSections = [
  {
    title: "Frontiers Universe",
    href: "/universe",
  },
];
