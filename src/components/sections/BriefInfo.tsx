"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mountain } from "lucide-react";

export function BriefInfo() {
    return (
        <Section id="info" background="white" className="overflow-hidden">
            <div className="container mx-auto px-8 md:px-20 lg:px-32">
                {/* Company Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <SectionBadge>Our Legacy</SectionBadge>
                            <SectionHeading dark={false} gradientText="Experience.">
                                The Little More
                            </SectionHeading>
                        </div>

                        <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-brand-dark/10 border border-brand-dark/10 overflow-hidden group hover:bg-brand-dark/15 transition-all duration-500">
                            <Mountain className="absolute -right-8 -bottom-8 h-48 w-58 text-brand-dark/[0.03] -z-10 group-hover:scale-110 transition-transform duration-700" />
                            <p className="text-brand-medium/80 text-lg md:text-xl leading-relaxed font-medium">
                                Founded on the firsthand high-altitude experience of lifelong mountain companions
                                <span className="text-brand-dark font-bold ml-1">Pemba N. Sherpa</span>,
                                <span className="text-brand-dark font-bold ml-1">Ngima Tashi Sherpa</span>, and
                                <span className="text-brand-dark font-bold ml-1">Pema Thilen Sherpa</span>, born and raised on the Himalayan trails,<br /><br />
                                <span className="text-brand-medium font-bold ml-1">A Little More Altitude</span> delivers safe, authentic, and perspective-shifting trekking adventures
                                that take you beyond breathtaking landscapes—toward deeper connection, purpose, and growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group/img"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
                            alt="Mount Everest and Nuptse"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
