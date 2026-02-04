"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Mountain } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FOUNDERS = [
    {
        name: "Pemba N. Sherpa",
        role: "Director & Certified Guide",
        bio: "High altitude filmmaker, 2x Kilimanjaro summiteer, born and raised in the mountains of Solu Khumbu.",
        image: "/founders/pemba.png",
    },
    {
        name: "Ngima Tashi Sherpa",
        role: "Director & Operations Chief",
        bio: "12+ years of experience across Nepal’s most challenging routes. Guided with heart and Sherpa spirit.",
        image: "/founders/tashi.png",
    },
    {
        name: "Lakpa Sherpa",
        role: "Base Camp Manager & Logistics",
        bio: "Master of high-altitude logistics and expedition support. Ensuring the heartbeat of our teams stays strong in the most remote camps.",
        image: "https://images.unsplash.com/photo-1585016495481-91613a3bc4bc?auto=format&fit=crop&w=800&q=80",
    }
];

export function About() {
    return (
        <Section id="about" background="white">
            {/* Arctic-themed decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-brand-light/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-medium/5 blur-[120px] rounded-full" />

            <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                <SectionBadge>Our Story</SectionBadge>

                <SectionHeading dark={false} gradientText="High Altitude Adventure.">
                    Born from a Passion for
                </SectionHeading>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-brand-medium/80 text-lg md:text-xl leading-relaxed font-medium"
                >
                    Founded on the firsthand high-altitude experience of lifelong mountain companions
                    Pemba N. Sherpa, Ngima Tashi Sherpa, and Lakpa Sherpa, born and raised on the Himalayan trails,
                    A Little More Altitude delivers safe, authentic, and perspective-shifting trekking
                    adventures that take you beyond breathtaking landscapes—toward deeper connection,
                    purpose, and growth.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {FOUNDERS.map((founder, idx) => (
                    <motion.div
                        key={founder.name}
                        initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className="group relative"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-brand-light/10 shadow-2xl max-w-sm mx-auto">
                            <Image
                                src={founder.image}
                                alt={founder.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized={founder.image.startsWith("http")}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute inset-0 group-hover:bg-brand-dark/80 transition-all duration-700 group-hover:backdrop-blur-md overflow-hidden">
                                {/* Name & Socials Block - Moves from bottom to top on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-3 transform translate-y-0 group-hover:-translate-y-[calc(100%-120px)] transition-transform duration-700 ease-in-out z-20">
                                    <div className="space-y-0">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{founder.name}</h3>
                                        <p className="text-brand-light font-bold text-[10px] uppercase tracking-[0.25em] leading-none mb-1">{founder.role}</p>
                                    </div>
                                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                        <a href="#" className="p-2 rounded-xl bg-brand-light/10 text-brand-light hover:bg-brand-light hover:text-brand-dark transition-all duration-300">
                                            <Linkedin size={16} />
                                        </a>
                                        <a href="#" className="p-2 rounded-xl bg-brand-light/10 text-brand-light hover:bg-brand-light hover:text-brand-dark transition-all duration-300">
                                            <Mail size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* Bio - Centered on hover */}
                                <div className="absolute inset-0 p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10">
                                    <p className="text-brand-white/90 text-[13px] leading-relaxed text-center max-w-[240px] font-medium border-y border-brand-light/10 py-6">
                                        {founder.bio}
                                    </p>
                                </div>

                                {/* Initial subtle background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90 group-hover:opacity-0 transition-opacity" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mission statement strip */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-32 relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-brand-medium/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />

                <div className="relative p-12 md:p-12 rounded-[3rem] bg-white shadow-2xl shadow-brand-dark/10 border border-brand-light/20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
                    {/* Decorative Background Icon */}
                    <Mountain className="absolute -right-10 -bottom-10 h-54 w-64 text-brand-dark/[0.03] -z-10" />

                    <div className="flex-1 space-y-6 relative">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light/10 border border-brand-light/20">
                            <span className="text-brand-light text-[10px] font-bold uppercase tracking-[0.2em]">Our Manifesto</span>
                        </div>
                        <h4 className="text-brand-dark font-black text-3xl md:text-4xl leading-tight">
                            Our Shared <span className="text-brand-light underline decoration-brand-light/30 underline-offset-8">Vision</span>
                        </h4>
                        <p className="text-brand-medium/70 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                            "Built on real high-altitude experience and led by experienced guides, deep local knowledge, and strong community roots— we help you Go Higher. Live Deeper."
                        </p>
                    </div>

                    <div className="w-px h-32 bg-brand-light/20 hidden lg:block" />

                    <div className="flex flex-col items-center lg:items-end gap-4 shrink-0 transition-transform group-hover:scale-105 duration-500">
                        <div className="text-center lg:text-right space-y-2">
                            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-light">
                                "Go Higher. Live Deeper"
                            </p>
                            <div className="flex items-center justify-center lg:justify-end gap-3">
                                <div className="h-px w-8 bg-brand-light/40" />
                                <p className="text-brand-light/60 text-xs font-bold uppercase tracking-[0.3em]">Founding Philosophy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
