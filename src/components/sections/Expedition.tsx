"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mountain, MapPin, Trophy, Shield, ArrowRight, Clock, Zap, Gauge } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
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
        price: "Contact for Elite Pricing",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        tag: "The Ultimate Summit",
        description: "Stand on top of the world. Our South Col route expedition offers the most comprehensive support system ever engineered for Everest."
    },
    {
        id: 2,
        name: "Mount Kilimanjaro",
        elevation: "5,895m",
        location: "Moshi, Tanzania",
        duration: "9 Days",
        difficulty: "Moderate-Plus",
        technicalLevel: "Low",
        price: "$3,850",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        tag: "Seven Summits",
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
        price: "$14,500",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1200&q=80",
        tag: "The Spirit Mountain",
        description: "Often the first 8000m peak for aspiring Everest climbers. Experience the raw power of the Himalayas on the world's 8th highest mountain."
    }
];

function ExpeditionCard({ exp, index }: { exp: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[3rem] bg-brand-dark/40 border border-brand-light/10 mb-16 backdrop-blur-sm shadow-2xl"
        >
            {/* Visual Side */}
            <div className="lg:col-span-6 relative h-[400px] lg:h-[600px] overflow-hidden">
                <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent hidden lg:block opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:hidden opacity-60" />

                <div className="absolute top-8 left-8">
                    <div className="px-5 py-2 rounded-full bg-brand-light/20 backdrop-blur-md border border-brand-light/30 text-brand-light text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                        {exp.tag}
                    </div>
                </div>

                <div className="absolute bottom-8 left-8 lg:hidden">
                    <h3 className="text-3xl font-black text-white italic tracking-tighter">
                        {exp.name}
                    </h3>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 p-10 lg:p-16 flex flex-col justify-center bg-brand-dark/20">
                <div className="space-y-5">
                    <div className="hidden lg:flex items-center gap-3 text-brand-light/40 font-black text-[9px] uppercase tracking-[0.4em]">
                        <span className="w-8 h-px bg-brand-light/20" />
                        <Mountain size={12} />
                        <span>High Altitude Series</span>
                    </div>

                    <h3 className="hidden lg:block text-5xl md:text-6xl font-black text-white tracking-tighter italic leading-none">
                        {exp.name}
                        <span className="block text-brand-light text-2xl not-italic mt-2 opacity-70 font-medium tracking-normal">
                            {exp.elevation}
                        </span>
                    </h3>

                    <p className="text-brand-white/50 text-base md:text-lg leading-relaxed font-medium max-w-lg">
                        {exp.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-8 py-10 border-y border-white/5 mt-8">
                    {[
                        { icon: Clock, label: "Window", value: exp.duration },
                        { icon: Gauge, label: "Difficulty", value: exp.difficulty },
                        { icon: MapPin, label: "Region", value: exp.location },
                        { icon: Zap, label: "Investment", value: exp.price, color: "text-brand-light" }
                    ].map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="flex items-center gap-2 opacity-40">
                                <stat.icon size={12} />
                                <p className="text-[8px] uppercase tracking-[0.2em] font-black">{stat.label}</p>
                            </div>
                            <p className={`font-bold text-base ${stat.color || "text-white"}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-6 pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-brand-dark rounded-full font-black uppercase tracking-widest text-[9px] hover:bg-brand-light transition-all flex items-center gap-3 shadow-2xl shadow-black/40"
                    >
                        Expedition Dossier <ArrowRight size={14} />
                    </motion.button>
                </div>
            </div>

            <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none" />
        </motion.div>
    );
}


export function Expedition() {
    return (
        <Section id="expeditions" background="dark" container={false} className="relative overflow-hidden py-32">
            {/* Background Polish */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(216,196,182,0.1)_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(216,196,182,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center mb-32 space-y-6">
                    <SectionBadge dark>World-Class Alpinism</SectionBadge>
                    <SectionHeading dark gradientText="The High Frontier.">
                        Elite Expeditions
                    </SectionHeading>
                    <p className="text-brand-white/40 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Precision-engineered logistics for the world's most demanding peaks.
                        Where experience meets mountain mastery.
                    </p>
                </div>

                <div className="space-y-12">
                    {expeditions.map((exp, index) => (
                        <ExpeditionCard key={exp.id} exp={exp} index={index} />
                    ))}
                </div>


            </div>
        </Section>
    );
}
