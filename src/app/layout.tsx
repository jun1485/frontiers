import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/side-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontiers Universe Wiki",
  description:
    "Futuristic reinterpretation of ancient civilizations, the worldview of Frontiers Universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} antialiased bg-gray-900 text-gray-100 font-[family-name:var(--font-noto-sans-kr),var(--font-geist-sans)]`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-72 p-8 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
