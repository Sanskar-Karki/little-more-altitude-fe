import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Destinations } from "@/components/sections/Destinations";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Hero />
      <WhyChooseUs />
      <Destinations limit={3} background="dark" />
      <Features />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
