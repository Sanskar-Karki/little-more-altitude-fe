"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Mountain, ArrowRight, Shield, Activity, Thermometer, Wind, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Mock Data for Demo Purposes (In a real app, fetch based on slug)
const expeditionData: Record<string, any> = {
    "mount-everest": {
        name: "Mount Everest",
        elevation: "8,848m",
        location: "Nepal / Tibet Border",
        duration: "60 Days",
        difficulty: "Extreme",
        season: "April - May",
        price: "$65,000",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
        description: "The ultimate mountaineering challenge. Standing at the top of the world requires not just physical strength, but mental fortitude and elite logistical support. Our expedition is designed to maximize your chances of success with industry-leading oxygen systems and Sherpa support.",
        stats: [
            { label: "Success Rate", value: "92%" },
            { label: "O2 Assisted", value: "Yes" },
            { label: "Guide Ratio", value: "1:1" },
            { label: "Avg Temp", value: "-25°C" }
        ],
        itinerary: [
            { day: "01-03", title: "Arrival in Kathmandu", desc: "Gear check, briefings, and final preparations." },
            { day: "04-10", title: "Trek to Base Camp", desc: "Acclimatization hike through the Khumbu Valley." },
            { day: "11-40", title: "Acclimatization Rotations", desc: "Camp 1, Camp 2, and Camp 3 rotations." },
            { day: "41-55", title: "Summit Push", desc: "Waiting for the weather window and the final ascent." },
            { day: "56-60", title: "Descent & Departure", desc: "Return to Lukla and fly back to Kathmandu." }
        ]
    },
    "kilimanjaro": {
        name: "Kilimanjaro",
        elevation: "5,895m",
        location: "Tanzania",
        duration: "9 Days",
        difficulty: "Moderate+",
        season: "Jan - Mar",
        price: "$3,850+",
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1600&q=80",
        description: "The Roof of Africa. A non-technical but physically demanding ascent through five unique climate zones. We trust the Lemosho route for the best acclimatization profile and scenic beauty.",
        stats: [
            { label: "Success Rate", value: "98%" },
            { label: "Route", value: "Lemosho" },
            { label: "Guide Ratio", value: "1:3" },
            { label: "Avg Temp", value: "-15°C" }
        ],
        itinerary: [
            { day: "01", title: "Arrival in Moshi", desc: "Transfer to hotel and gear check." },
            { day: "02-07", title: "Ascent", desc: "Climbing through rainforest, moorland, and alpine desert." },
            { day: "08", title: "Summit Night", desc: "Midnight start for a sunrise at Uhuru Peak." },
            { day: "09", title: "Departure", desc: "Celebration and airport transfer." }
        ]
    },
    "manaslu": {
        name: "Manaslu",
        elevation: "8,163m",
        location: "Nepal",
        duration: "45 Days",
        difficulty: "High",
        season: "Sept - Oct",
        price: "$14,500+",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1600&q=80",
        description: "The Mountain of the Spirit. As the world's 8th highest peak, Manaslu offers a true 8000m challenge without the crowds of Everest. It is the perfect stepping stone for higher objectives.",
        stats: [
            { label: "Success Rate", value: "85%" },
            { label: "O2 Assisted", value: "Yes" },
            { label: "Guide Ratio", value: "1:2" },
            { label: "Avg Temp", value: "-20°C" }
        ],
        itinerary: [
            { day: "01-05", title: "Kathmandu & Trek", desc: "Permits and trek to Samagaun." },
            { day: "06-10", title: "Base Camp", desc: "Establishment and Puja ceremony." },
            { day: "11-35", title: "Climbing Period", desc: "Rotations to C1, C2, C3, C4 and Summit." },
            { day: "36-40", title: "Trek Out", desc: "Return to civilization." }
        ]
    },
    // Fallback for other slugs
    "default": {
        name: "Expedition Unknown",
        elevation: "Unknown",
        location: "Unknown",
        duration: "TBD",
        difficulty: "Moderate",
        season: "TBD",
        price: "Inquire",
        image: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?auto=format&fit=crop&w=1600&q=80",
        description: "An extraordinary journey awaits. Details for this specific expedition are currently being updated by our ground team.",
        stats: [
            { label: "Success Rate", value: "TBD" },
            { label: "O2 Assisted", value: "Optional" },
            { label: "Guide Ratio", value: "1:2" },
            { label: "Avg Temp", value: "-10°C" }
        ],
        itinerary: [
            { day: "01", title: "Arrival", desc: "Meet the team." },
            { day: "02-10", title: "The Climb", desc: "Ascend to the summit." },
            { day: "11", title: "Departure", desc: "Return home." }
        ]
    }
};

export default function ExpeditionDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const data = expeditionData[slug] || expeditionData["default"];

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <main ref={containerRef} className="bg-brand-dark min-h-screen text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80" />
                </motion.div>

                <div className="container relative z-10 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <SectionBadge dark>Expedition Profile</SectionBadge>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                            {data.name}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
                            <div className="flex items-center gap-3">
                                <Mountain className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest">{data.elevation}</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <MapPin className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest uppercase">{data.location}</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <Activity className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest uppercase">{data.difficulty}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">Mission Brief</p>
                    <div className="w-px h-16 bg-gradient-to-b from-brand-light to-transparent" />
                </motion.div>
            </section>

            {/* Mission Content */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* Left: Overview & Stats */}
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <SectionHeading dark gradientText="The Objective.">
                                    Mission Overview
                                </SectionHeading>
                                <p className="text-xl text-white/60 leading-relaxed font-medium">
                                    {data.description}
                                </p>
                            </div>

                            {/* HUD Stats Grid */}
                            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                                {data.stats.map((stat: any, i: number) => (
                                    <div key={i} className="bg-brand-dark/50 p-8 space-y-2 backdrop-blur-sm hover:bg-white/5 transition-colors">
                                        <p className="text-xs uppercase tracking-[0.2em] text-brand-light/70">{stat.label}</p>
                                        <p className="text-3xl font-black tracking-tight">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-brand-light/5 border border-brand-light/10 p-8 rounded-3xl space-y-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="text-brand-light shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Requirements</h4>
                                        <ul className="space-y-3 text-white/60 text-sm">
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                Previous 6,000m experience mandatory
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                Advanced ice climbing proficiency
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                Medical clearance (Class A)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Itinerary Timeline */}
                        <div className="relative border-l border-white/10 pl-12 space-y-16">
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-white/20">Operational Timeline</h3>

                            {data.itinerary.map((item: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[53px] top-2 w-3 h-3 rounded-full bg-brand-light ring-4 ring-brand-dark" />
                                    <div className="space-y-2">
                                        <span className="text-brand-light font-mono text-xs tracking-widest uppercase">Day {item.day}</span>
                                        <h4 className="text-2xl font-bold uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="pt-12">
                                <button className="w-full py-6 bg-brand-light text-brand-dark rounded-xl font-black uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center justify-center gap-4">
                                    <span>Download Full Brief</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
