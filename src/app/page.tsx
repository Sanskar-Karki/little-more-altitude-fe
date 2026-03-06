import { Hero } from "@/components/sections/Hero";
import { BriefInfo } from "@/components/sections/BriefInfo";
import { Nepal } from "@/components/sections/Nepal";
import { TopDestinations } from "@/components/sections/TopDestinations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Hero />
      <BriefInfo />
      <Nepal />
      <TopDestinations />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </main>
  );
}


