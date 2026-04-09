import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Solutions />
        <Technology />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
