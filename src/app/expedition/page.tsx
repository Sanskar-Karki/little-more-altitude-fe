"use client";

import { motion } from "framer-motion";
import { Expedition } from "@/components/sections/Expedition";
import { Mountain, Shield, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ExpeditionPage() {
    return (
        <main className="min-h-screen bg-brand-dark">
            <section className="relative pt-48 pb-32 overflow-hidden">
                {/* Epic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-dark/60 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark z-10" />
                </div>

                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 text-brand-light font-black text-xs uppercase tracking-[0.4em]">
                                <Zap size={14} />
                                <span>Premium Mountaineering</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter italic leading-[0.8] mb-8">
                                REACH <br />
                                <span className="text-brand-light not-italic">HIGHER.</span>
                            </h1>
                            <p className="text-brand-white/60 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
                                Professional grade expeditions for those who seek the extreme.
                                No compromises on safety, luxury, or success.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Text Decoration */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
                    <p className="vertical-text text-8xl font-black text-white select-none whitespace-nowrap tracking-widest">
                        6000 METERS
                    </p>
                </div>
            </section>

            <Expedition />

            {/* Preparation Section */}
            <section className="py-32 bg-brand-dark border-t border-white/5">
                <div className="container mx-auto px-8 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight italic">
                                UNRIVALED <br />
                                <span className="text-brand-light not-italic">PREPARATION</span>
                            </h2>
                            <p className="text-brand-white/40 text-lg leading-relaxed">
                                Success at altitude is decided months before you set foot on the mountain.
                                We provide comprehensive training protocols and physical assessments for every climber.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Personalized High-Altitude Training",
                                    "Nutritional Performance Plans",
                                    "Equipment Consulting & Sourcing",
                                    "Technical Skills Workshops"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white font-bold uppercase text-xs tracking-widest">
                                        <div className="w-6 h-px bg-brand-light" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group">
                            <Image
                                src="https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1000&q=80"
                                alt="Training"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-light/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
