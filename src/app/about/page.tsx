import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVision from "@/components/about/MissionVision";
import ImageBanner from "@/components/about/ImageBanner";
import CoreValues from "@/components/about/CoreValues";

export const metadata: Metadata = {
  title:
    "About Us | GAP-World — Architecture & Construction — Architecture & Construction",
  description:
    "Learn about GAP-World — Architecture & Construction — our mission, vision, and core values. We deliver exceptional architecture and construction projects built on integrity, quality, and innovation.",
  openGraph: {
    title: "About Us | GAP-World — Architecture & Construction",
    description:
      "We combine honesty, precision, and experience to create spaces that truly work for you.",
    images: [
      {
        url: "/images/about-hero.png",
        width: 1200,
        height: 630,
        alt: "GAP-World — Architecture & Construction About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <AboutHero />
        <AboutIntro />
        <MissionVision />
        <ImageBanner />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}
