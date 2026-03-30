import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:bg-blue-600 focus-visible:text-white focus-visible:rounded-lg focus-visible:text-sm focus-visible:font-medium"
      >
        Ir al contenido principal
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
