"use client";

import { motion } from "framer-motion";
import { Mountain, MapPin, Trophy, Shield, ArrowRight, Clock, Zap, Gauge, Target, Compass, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const expeditions = [
    {
        id: 1,
        name: "Mount Everest",
        elevation: "8,848m",
        location: "Solu-Khumbu, Nepal",
        duration: "65 Days",
        difficulty: "Extreme",
        technicalLevel: "High",
        price: "Elite Pricing",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        tag: "THE ULTIMATE SUMMIT",
        description: "Stand on top of the world. Our South Col route expedition offers the most comprehensive support system ever engineered for Everest."
    },
    {
        id: 2,
        name: "Kilimanjaro",
        elevation: "5,895m",
        location: "Moshi, Tanzania",
        duration: "9 Days",
        difficulty: "Moderate+",
        technicalLevel: "Low",
        price: "$3,850+",
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=80",
        tag: "SEVEN SUMMITS",
        description: "The Lemosho Route. Traverse through five distinct eco-systems to reach the highest point in Africa under the expert guidance of our summit leads."
    },
    {
        id: 3,
        name: "Manaslu",
        elevation: "8,163m",
        location: "Gorkha, Nepal",
        duration: "45 Days",
        difficulty: "Extreme",
        technicalLevel: "Moderate",
        price: "$14,500+",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80",
        tag: "THE SPIRIT MOUNTAIN",
        description: "Often the first 8000m peak for aspiring Everest climbers. Experience the raw power of the Himalayas on the world's 8th highest mountain."
    }
];

function ExpeditionCard({ exp, index }: { exp: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 last:mb-0"
        >
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                {/* Visual Side - Tech Card */}
                <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-none">
                        <Image
                            src={exp.image}
                            alt={exp.name}
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20 opacity-60" />

                        {/* Floating HUD Elements */}
                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                            <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                <span className="text-[10px] font-mono font-bold text-white tracking-widest uppercase">Live Status</span>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-[10px] font-mono text-white/50 tracking-widest">ELEVATION_PROFILE</p>
                                <p className="text-xl font-black text-white tracking-tight">{exp.elevation}</p>
                            </div>
                        </div>

                        {/* Bottom Stats Overlay */}
                        <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                                {[
                                    { label: "Duration", value: exp.duration },
                                    { label: "Difficulty", value: exp.difficulty },
                                    { label: "Price", value: exp.price }
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                                        <p className="text-sm md:text-base font-bold text-white">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
                    <div className="space-y-4">
                        <div className={`flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end lg:justify-start'} justify-center`}>
                            <div className="px-4 py-1 rounded-full border border-brand-light/30 text-brand-light text-[10px] font-black uppercase tracking-[0.3em]">
                                Phase 0{index + 1}
                            </div>
                            <div className="h-px w-20 bg-white/10 hidden sm:block" />
                        </div>

                        <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                            {exp.name}
                        </h3>
                    </div>

                    <p className="text-brand-white/50 text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-2 border-brand-light/20 pl-6 text-left">
                        {exp.description}
                    </p>

                    <div className={`flex items-center gap-8 ${isEven ? 'justify-start' : 'justify-end lg:justify-start'} justify-center pt-4`}>
                        <Link href={`/expedition/${exp.name.toLowerCase().replace(/ /g, "-")}`}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-light text-brand-dark px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 hover:bg-white transition-colors"
                            >
                                <span>Details</span>
                                <ArrowRight size={16} />
                            </motion.button>
                        </Link>
                        <div className="flex flex-col items-start gap-1 opacity-50">
                            <span className="text-[9px] font-mono text-white/60 tracking-widest uppercase">Technical Level</span>
                            <div className="flex gap-1">
                                {[...Array(exp.technicalLevel === "High" ? 5 : 3)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-4 bg-brand-light/50 rounded-full skew-x-[-12deg]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Expedition() {
    return (
        <Section id="expeditions" background="dark" container={false} className="relative py-24">
            {/* Atmospheric Polish */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-brand-dark via-brand-light/5 to-transparent opacity-20" />
                <div className="absolute bottom-0 right-0 w-2/3 h-[800px] bg-[radial-gradient(circle_at_80%_70%,rgba(216,196,182,0.1)_0%,transparent_50%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                <div className="h-screen min-h-[600px] flex flex-col justify-center items-center relative mb-24">
                    {/* Decorative Vertical Line */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: "100px", opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-brand-light/50 to-transparent hidden lg:block"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            >
                                <SectionBadge dark>Elite Mountaineering</SectionBadge>
                            </motion.div>
                        </div>

                        <div className="space-y-2">
                            <SectionHeading dark gradientText="Summit Peaks.">
                                Premier Expeditions
                            </SectionHeading>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-brand-white/40 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Precision logistics for the world's most formidable peaks.<br className="hidden md:block" />
                            Engineering success where the air is thin and focus is absolute.
                        </motion.p>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="pt-16 flex flex-col items-center gap-4 opacity-50"
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-light">Scroll to Ascend</p>
                            <div className="w-5 h-9 border border-brand-light/30 rounded-full flex justify-center p-1">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-0.5 h-2 bg-brand-light/80 rounded-full"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="relative pb-24">
                    {expeditions.map((exp, index) => (
                        <ExpeditionCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

