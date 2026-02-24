"use client";

import { motion } from "framer-motion";
import { Mountain, Heart, Compass, Shield, Users, Camera, MapPin, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FOUNDERS = [
    {
        name: "Pemba N. Sherpa",
        role: "Director & Certified Guide",
        bio: "High altitude filmmaker, 2x Kilimanjaro summiteer, born and raised in the mountains of Solu Khumbu.",
        image: "/founders/pemba.png",
        href: "/about/pemba"
    },
    {
        name: "Ngima Tashi Sherpa",
        role: "Director & Operations Chief",
        bio: "12+ years of experience across Nepal’s most challenging routes. Guided with heart and Sherpa spirit.",
        image: "/founders/tashi.png",
        href: "/about/tashi"
    },
    {
        name: "Pema Thilen Sherpa",
        role: "Founder & U.S. Army Reserve Soldier",
        bio: "Himalayan Sherpa and U.S. Army Reserve Soldier. Combining deep-rooted mountain wisdom with military-grade discipline and safety standards.",
        image: "https://images.unsplash.com/photo-1585016495481-91613a3bc4bc?auto=format&fit=crop&w=800&q=80",
        href: "/about/pema"
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-dark overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90px] flex items-center justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
            </section>



            {/* Meet the Founders */}
            <Section id="founders" background="white">
                <div className="text-center mb-10">
                    <SectionHeading
                        className="text-brand-dark/80 text-3xl md:text-5xl max-w-3xl mx-auto font-bold mb-2"
                        gradientText="Meet the Founders"
                        dark={false}
                    />
                    <div className="text-brand-dark/80 text-lg md:text-2xl max-w-3xl mx-auto  font-medium">
                        Founded on the firsthand high-altitude experience of lifelong mountain companions Pemba N Sherpa, Ngima Tashi Sherpa, and Pema Thilen Sherpa.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {FOUNDERS.map((founder) => (
                        <Link key={founder.name} href={founder.href}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-[3rem] overflow-hidden border border-brand-dark/10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="relative aspect-[3/4]">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                                        <p className="text-brand-light font-bold text-[10px] uppercase tracking-[0.2em] mb-2">{founder.role}</p>
                                        <h3 className="text-3xl font-black tracking-tight mb-2">{founder.name}</h3>
                                        <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {founder.bio}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-brand-light font-bold text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            View Full Profile
                                            <Compass size={14} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </Section>
            {/* Our Shared Vision */}
            {/*
            <Section background="dark" className="relative group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-light/20 to-transparent" />
                <div className="max-w-5xl mx-auto relative">
                    <Mountain className="absolute -right-20 -bottom-20 h-96 w-96 text-white/[0.02] rotate-12" />

                    <div className="relative z-10 space-y-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light/10 border border-brand-light/20">
                            <Compass className="text-brand-light animate-spin-slow" size={16} />
                            <span className="text-brand-light text-[10px] font-bold uppercase tracking-[0.3em]">Our Shared Vision</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-white">
                            Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-white">Sherpa Heritage</span>, <br />
                            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-white">Passion.</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <p className="text-brand-white/70 text-lg leading-relaxed font-medium">
                                From the rugged trails of the Himalayas to the classrooms of their school, Pemba and Tashi have shared a journey unlike any other. Together, they have trekked across nearly every region of Nepal, learning not only the terrain but the heartbeat of the mountains, the people, and their culture.
                            </p>
                            <p className="text-brand-white/70 text-lg leading-relaxed font-medium">
                                Our mission: to transform trekking in Nepal, offering every traveler a journey that is safe, authentic, and unforgettable. Every expedition is infused with our passion, knowledge, and the Sherpa spirit—because we believe trekking is not just a journey, it’s a lifetime experience.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            */}
            {/* Why We Started / Call to Action */}
            <Section background="dark" >
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black text-white">
                        Guided by Roots, <br />
                        <span className="text-brand-light">Inspired by Altitude.</span>
                    </h2>
                    <p className="text-brand-white/70 text-xl leading-relaxed">
                        "We started A Little More Altitude to share everything we’ve learned from a lifetime in the Himalayas—our challenges, adventures, and deep connection to the mountains... giving every traveler the best Himalayan adventure possible."
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="/contact"
                            className="px-12 py-5 rounded-full bg-brand-light text-brand-dark font-black uppercase tracking-widest text-sm hover:bg-brand-white transition-colors shadow-2xl shadow-brand-light/20"
                        >
                            Join Our Next Adventure
                        </a>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
