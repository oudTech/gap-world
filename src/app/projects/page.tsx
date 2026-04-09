import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectsFeature from "@/components/projects/ProjectsFeature";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Projects | Azariah Arch — Architecture & Construction",
  description:
    "Explore Azariah Arch's portfolio of residential and commercial projects — built on precision, quality, and lasting design.",
  openGraph: {
    title: "Our Projects | Azariah Arch",
    description:
      "Our projects are built on strong standards — combining thoughtful design, practical execution, and attention to detail.",
    images: [{ url: "/images/jevenus.png", width: 1200, height: 630, alt: "Azariah Arch Projects" }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ProjectsHero />
        <ProjectsIntro />
        <ProjectsFeature />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
