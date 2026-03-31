"use client";

import { useState } from "react";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { Shield, Compass, Heart, Leaf, Award, Star, Mountain, Map, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import Image from "next/image";



const REASONS = [
    {
        id: "leadership",
        icon: Star,
        title: "Founder-Led Leadership",
        shortDesc: "Your trek is led by the founders themselves—Pemba and Tashi Sherpa, professional certified guides born on the trails.",
        fullDesc: "Pemba is a high-altitude filmmaker, while Tashi brings deep knowledge of inner Himalayan culture. Together, we have trekked and completed every major region in Nepal, offering leadership rooted in firsthand experience, authenticity, and care.",
        accent: "bg-amber-400"
    },
    {
        id: "safety",
        icon: Shield,
        title: "Safety-First & Focused",
        shortDesc: "With years of high-altitude guiding experience, your safety and well-being are our highest priority.",
        fullDesc: "We provide personalized attention, thoughtful pacing, and meticulous planning so you feel supported at every step. Our medical protocols and emergency preparedness are second to none.",
        accent: "bg-blue-400"
    },
    {
        id: "tailored",
        icon: Compass,
        title: "Tailored For Explorers",
        shortDesc: "Whether seeking group camaraderie, private intimacy, or 1:1 journey, we cater to all.",
        fullDesc: "We provide personal guidance and close attention to detail for every explorer. Each trek is customized to your fitness level, interests, and dietary needs to ensure an unforgettable experience.",
        accent: "bg-purple-400"
    },
    {
        id: "ethical",
        icon: Leaf,
        title: "Ethical & Transparent",
        shortDesc: "We practice responsible tourism with strong porter welfare, fair wages, and environmental care.",
        fullDesc: "Our pricing is clear and transparent with no hidden costs. We ensure every porter has proper equipment and insurance, and we maintain a leave-no-trace policy on every trail.",
        accent: "bg-emerald-400"
    },
    {
        id: "purpose",
        icon: Heart,
        title: "Trek With Purpose",
        shortDesc: "We donate 10% of our profits from every trek through the Peaks for People Foundation (PFP).",
        fullDesc: "These contributions support needy communities beyond major touristic areas, promoting sustainable tourism and long-term community development where it is needed most.",
        accent: "bg-rose-400"
    },
    {
        id: "spirit",
        icon: Sparkles,
        title: "Authentic Sherpa Spirit",
        shortDesc: "Born and raised in Sherpa villages, we don't just know the trails—we live the heritage.",
        fullDesc: "Our connection to the land, its people, and its traditions ensures your experience is as authentic as it is breathtaking. We bring the wisdom of generations to every expedition.",
        accent: "bg-brand-medium"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export function WhyChooseUs() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Section id="why-choose-us" background="white" className="min-h-screen py-24 flex items-center relative overflow-hidden">
            {/* Immersive Background Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-light/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-medium/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: Header & Content */}
                    <div className="lg:col-span-12 xl:col-span-12 space-y-12">
                        <div className="space-y-4 text-center max-w-3xl mx-auto">
                            <SectionBadge>The Altitude Edge</SectionBadge>
                            <SectionHeading dark={false} gradientText="Above the Rest.">
                                Why We Stand
                            </SectionHeading>
                            <p className="text-brand-medium/70 text-lg font-medium leading-relaxed">
                                Born in the mountains, raised on the trails. We combine deep local heritage with world-class safety protocols to give you a journey like no other.
                            </p>
                        </div>

                        {/* Interactive Feature Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {REASONS.map((reason, idx) => {
                                const isExpanded = expandedId === reason.id;
                                const isPurpose = reason.id === "purpose";

                                return (
                                    <motion.div
                                        key={reason.id}
                                        variants={itemVariants}
                                        layout
                                        className={`group relative overflow-hidden rounded-[2.5rem] transition-all duration-500 ${
                                            isPurpose 
                                            ? "bg-brand-dark text-white shadow-2xl border-2 border-brand-light/20" 
                                            : "bg-white border border-brand-light/10 shadow-xl hover:shadow-2xl hover:border-brand-light/30"
                                        }`}
                                    >
                                        <div className="p-8 md:p-10 space-y-6">
                                            {/* Header */}
                                            <div className="flex justify-between items-start">
                                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                                                    isPurpose ? "bg-brand-light text-brand-dark" : `${reason.accent}/10 text-brand-dark`
                                                }`}>
                                                    <reason.icon size={26} strokeWidth={isPurpose ? 2.5 : 2} />
                                                </div>
                                                {isPurpose && (
                                                    <div className="px-4 py-1.5 rounded-full bg-brand-light/20 border border-brand-light/30 backdrop-blur-md">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-light">10% Profit Shared</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Text Content */}
                                            <div className="space-y-3">
                                                <h3 className={`text-2xl font-black tracking-tight ${isPurpose ? "text-white" : "text-brand-dark"}`}>
                                                    {reason.title}
                                                </h3>
                                                <p className={`text-base font-medium leading-relaxed ${isPurpose ? "text-white/60" : "text-brand-medium/60"}`}>
                                                    {reason.shortDesc}
                                                </p>
                                            </div>

                                            {/* Expandable Content */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className={`pt-4 border-t ${isPurpose ? "border-white/10" : "border-brand-light/10"}`}>
                                                            <p className={`text-base leading-relaxed font-medium ${isPurpose ? "text-white/80" : "text-brand-medium/80"}`}>
                                                                {reason.fullDesc}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Action Button */}
                                            <button
                                                onClick={() => toggleExpand(reason.id)}
                                                className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                                                    isPurpose ? "text-brand-light hover:text-white" : "text-brand-medium hover:text-brand-dark"
                                                }`}
                                            >
                                                {isExpanded ? (
                                                    <>Less Info <ChevronUp size={14} /></>
                                                ) : (
                                                    <>More Info <ChevronDown size={14} /></>
                                                )}
                                            </button>
                                        </div>

                                        {/* Decorative backgrounds */}
                                        <div className={`absolute -right-4 -bottom-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform ${isPurpose ? "text-white" : "text-brand-dark"}`}>
                                            <reason.icon size={120} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
