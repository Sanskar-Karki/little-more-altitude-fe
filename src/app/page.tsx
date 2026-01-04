import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Hero />
      <About />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
