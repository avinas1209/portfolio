import type { Metadata, Viewport } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { asset, siteUrl } from "@/lib/paths";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuraBackground from "@/components/AuraBackground";
import ScrollProgress from "@/components/ScrollProgress";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.title} | ${site.specialty}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  keywords: [
    "Golang developer",
    "Backend engineer",
    "Microservices",
    "NATS",
    "Distributed systems",
    "MongoDB",
    "Redis",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.title} | ${site.specialty}`,
    description: site.summary,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title} | ${site.specialty}`,
    description: site.summary,
  },
  icons: {
    icon: asset("/dragon-ball.svg"),
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="relative min-h-screen antialiased">
        <AuraBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
