import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShowcaseHero from "@/components/projects/ShowcaseHero";
import RoomSection from "@/components/projects/RoomSection";
import { getProject, projects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | GAP-World`,
    description: `Explore the ${project.title} project by GAP-World — architecture and construction built to last.`,
    openGraph: {
      title: `${project.title} | GAP-World`,
      images: [
        { url: project.hero, width: 1200, height: 630, alt: project.title },
      ],
    },
  };
}

export default async function ShowcasePage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="relative">
        <ShowcaseHero title={project.title} src={project.hero} />
        {project.rooms.map((room, i) => (
          <RoomSection key={room.name} room={room} index={i} />
        ))}
      </main>
      <Footer />
    </>
  );
}
