"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, MountainSnow } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Our guides are certified in First Aid and mountaineering safety. Your well-being is our priority."
    },
    {
        icon: UserCheck,
        title: "Experienced Guides",
        description: "Local Sherpa guides with decades of experience on the highest peaks of the Himalayas."
    },
    {
        icon: HeartHandshake,
        title: "Sustainable Travel",
        description: "We practice Leave No Trace principles and support local communities in trekking regions."
    },
    {
        icon: MountainSnow,
        title: "Tailored Itineraries",
        description: "From beginner hikes to expedition-style climbs, we customize trips to your fitness level."
    }
];

export function Features() {
    return (
        <Section id="features" background="white" container={false} className="relative">
            {/* Blending Gradients - Full Width */}
            {/*
            <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-brand-dark via-brand-dark/60 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent z-10 pointer-events-none" />
            */}
            {/* Centered Content */}
            <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-20 ">
                <div className="text-center mb-20 space-y-4">
                    <SectionBadge>Innovation in Travel</SectionBadge>
                    <SectionHeading dark={false} gradientText="Advantage.">
                        The Altitude
                    </SectionHeading>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-sm border border-brand-light/10 hover:border-brand-light/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(19,75,112,0.1)] overflow-hidden"
                        >
                            {/* Animated Background Decoration */}
                            <div className="absolute -right-8 -top-8 w-24 h-24 bg-brand-light/5 rounded-full blur-2xl group-hover:bg-brand-light/15 transition-all duration-500" />

                            <div className="relative z-10">
                                {/* Icon Container with floating effect */}
                                <div className="relative w-16 h-16 mb-8">
                                    <div className="absolute inset-0 bg-brand-light
                                     rounded-2xl rotate-6 group-hover:rotate-12 group-hover:scale-102 group-hover:bg-brand-dark transition-all duration-500" />
                                    <div className="relative w-16 h-16 rounded-2xl bg-white border border-brand-light/20 flex items-center justify-center text-brand-light shadow-sm group-hover:shadow-md transition-all duration-500">
                                        <feature.icon size={30} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-brand-dark mb-4 tracking-tight group-hover:text-brand-medium transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-brand-medium/70 leading-relaxed font-medium text-sm">
                                    {feature.description}
                                </p>

                                {/* Modern Bottom Accent */}
                                <div className="mt-8 flex items-center gap-3">
                                    <div className="h-[2px] w-10 bg-brand-light/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ x: -40 }}
                                            whileInView={{ x: 0 }}
                                            transition={{ delay: 0.5 + (idx * 0.1), duration: 0.8 }}
                                            className="h-full w-full bg-brand-light"
                                        />
                                    </div>
                                    <span className="text-[0.8rem] font-bold text-brand-light uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-50 hover:cursor-pointer">
                                        Explore More
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
