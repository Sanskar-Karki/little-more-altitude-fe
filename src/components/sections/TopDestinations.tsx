"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { ArrowUpRight, Mountain } from "lucide-react";

const TOP_DESTINATIONS = [
    {
        id: "4000m",
        name: "Langtang Valley",
        location: "Rasua, Nepal",
        height: "4,000m+",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        tag: "Classic Trek"
    },
    {
        id: "5000m",
        name: "Everest Base Camp",
        location: "Solu-Khumbu, Nepal",
        height: "5,000m+",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80",
        tag: "Bucket List"
    },
    {
        id: "6000m",
        name: "Island Peak",
        location: "Khumbu Region, Nepal",
        height: "6,000m+",
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
        tag: "Climbing Adventure"
    }
];

export function TopDestinations() {
    return (
        <Section id="top-destinations" background="white">
            <div className="container mx-auto px-8 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <SectionBadge>Elite Picks</SectionBadge>
                    <SectionHeading dark={false} gradientText="By Altitude.">
                        Top Destinations
                    </SectionHeading>
                    <p className="text-brand-medium/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        Carefully selected adventures categorized by their majestic heights,
                        offering challenges and rewards for every level of explorer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {TOP_DESTINATIONS.map((dest, idx) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-brand-light/20 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />

                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-2 rounded-2xl bg-brand-light/20 backdrop-blur-md border border-brand-light/30 text-brand-light text-xs font-black uppercase tracking-widest">
                                        {dest.height}
                                    </div>
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-3">
                                    <div className="flex items-center gap-2 text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.25em]">
                                        <Mountain size={10} />
                                        <span>{dest.tag}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white leading-tight">
                                        {dest.name}
                                    </h3>
                                    <p className="text-brand-white/60 text-sm font-medium">
                                        {dest.location}
                                    </p>

                                    <div className="pt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                                        <button className="flex items-center gap-2 text-brand-light text-sm font-bold group/btn">
                                            Discover More
                                            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
