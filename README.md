This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Component Structure

This project has been improved with the following component structure:

### Layout Components

- `PageLayout`: Component that provides a common layout for all pages
  - Includes common elements like title, subtitle, gradient colors, table of contents

### Section Components

- `PageSection`: Reusable component for displaying sections within a page
  - Includes common elements like title, icon, gradient background

### Card Components

- `InfoCard`: Component for displaying information in card format
- `LinkCard`: Component for displaying links in card format

### Icon Components

Componentized icons used across multiple pages to enhance reusability

- `BookIcon`, `LightningIcon`, `BuildingIcon`, `PeopleIcon`, etc.

### City-related Components

Various components used in city pages

- `CityLayout`, `CityHeader`, `CityPopulation`, etc.

## Page Structure

Pages are structured using reusable components:

- `/`: Main page
- `/mythology`: Mythology page
- `/universe`: Universe world-building page
- `/eris`: ERIS page
- `/cities/`: City pages
- `/civilizations/`: Civilization pages

## Developer Guide

When adding a new page, it's recommended to use components in the following way:

```tsx
import { PageLayout, PageSection } from "@/components";
import { SomeIcon } from "@/components/icons";

export default function NewPage() {
  const contentsItems = [
    { id: "section1", title: "Section 1" },
    { id: "section2", title: "Section 2" },
  ];

  return (
    <PageLayout
      title="Page Title"
      subtitle="Page subtitle"
      gradientColors="from-color-400 to-color-500"
      contentsItems={contentsItems}
    >
      <PageSection
        id="section1"
        title="Section 1 Title"
        icon={<SomeIcon />}
        gradientColors="from-color-900 to-gray-800"
      >
        {/* Section content */}
      </PageSection>

      {/* Additional sections */}
    </PageLayout>
  );
}
```
