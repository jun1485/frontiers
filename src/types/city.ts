export interface CityData {
  name: string;
  civilizationName: string;
  image?: string;
  description: string;
  population?: string;
  mainInstitutions: {
    name: string;
    description: string;
    headquarters?: string;
    departments?: {
      name: string;
      location: string;
      specialization: string;
    }[];
  }[];
  keyFigures: {
    name: string;
    role: string;
    description: string;
  }[];
  coreTechnologies: {
    category: string;
    items: string[];
  }[];
  militarySystem?: string;
  cityFeatures: string[];
}

export interface CivilizationStyle {
  primary: string;
  heading: string;
  section: string;
  accent: string;
  border: string;
  button: string;
  hover: string;
}
