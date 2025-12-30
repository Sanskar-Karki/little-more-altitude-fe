import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Hero />
      <About />
      <Features />
      <Testimonials />
    </main>
  );
}
