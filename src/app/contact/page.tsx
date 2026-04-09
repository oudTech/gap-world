import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import GlobalOffices from "@/components/contact/GlobalOffices";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Azariah Arch — Architecture & Construction",
  description:
    "Get in touch with Azariah Arch. We're open to every opportunity — new projects, partnerships, or collaborations.",
  openGraph: {
    title: "Contact Us | Azariah Arch",
    description:
      "We combine honesty, precision, and experience to create spaces that truly work for you.",
    images: [{ url: "/images/contact-hero.png", width: 1200, height: 630, alt: "Azariah Arch Contact Us" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ContactHero />
        <GlobalOffices />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
