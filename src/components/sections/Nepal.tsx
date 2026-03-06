"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Map, Compass, Wind, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Nepal() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Performance Optimization: Use simpler transforms and avoid expensive rotations on scroll
    const ySlow = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const yMedium = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yFast = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <Section id="about-nepal" background="dark" className="py-0! overflow-hidden bg-[#0A0F1A]">
            <div ref={containerRef} className="relative min-h-[110vh] flex items-center py-24 md:py-32">
                {/* Background Text - Simplified for performance */}
                <motion.div
                    style={{ y: ySlow }}
                    className="absolute top-20 -left-10 text-[18vw] font-black text-white/[0.03] select-none whitespace-nowrap pointer-events-none tracking-tighter will-change-transform"
                >
                    HIMALAYA
                </motion.div>

                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="space-y-5">
                                <SectionBadge dark>The Sacred Peaks</SectionBadge>
                                <SectionHeading dark gradientText="Himalayas.">
                                    Nepal: Heart of the
                                </SectionHeading>
                                <p className="text-brand-white/70 text-lg md:text-xl leading-relaxed font-medium max-w-xl">
                                    Nepal is the heart of the Himalayas, home to the world’s highest peaks,
                                    ancient cultures, and some of the finest trekking routes on Earth.
                                </p>
                            </div>

                            {/* Multi-layered Highlights - Simplified animations */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Wind, title: "Pure Spirit", desc: "A land where spirituality meets the sky.", color: "text-blue-400" },
                                    { icon: Sun, title: "Golden Trails", desc: "Ancient routes carved by history.", color: "text-amber-400" },
                                    { icon: Compass, title: "Beyond Horizons", desc: "From jungles to the death zone.", color: "text-emerald-400" },
                                    { icon: Map, title: "Legendary Peaks", desc: "8 of the world's 14 highest summits.", color: "text-brand-light" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className="group p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-light/30 transition-colors duration-300"
                                    >
                                        <item.icon className={`mb-3 w-6 h-6 ${item.color}`} />
                                        <h4 className="text-white font-bold text-base mb-1">{item.title}</h4>
                                        <p className="text-brand-white/50 text-xs leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/trekking"
                                    className="inline-flex items-center gap-3 text-brand-light text-sm font-bold tracking-widest uppercase border-b border-brand-light/20 pb-2 hover:border-brand-light transition-all cursor-pointer"
                                >
                                    Explore the Region <span>→</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Visual Side - Simplified parallax */}
                        <div className="relative h-[550px] lg:h-[700px]">
                            {/* Main Background Image */}
                            <motion.div
                                style={{ y: yMedium }}
                                className="absolute top-0 right-0 w-[85%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl z-20 border border-white/5 will-change-transform"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
                                    alt="Nepal Landscape"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>

                            {/* Smaller Foreground Image */}
                            <motion.div
                                style={{ y: yFast }}
                                className="absolute bottom-10 left-0 w-[60%] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border border-white/10 will-change-transform"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80"
                                    alt="Nepal Culture"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <p className="text-brand-light text-3xl font-black">1953</p>
                                        <p className="text-white/60 text-[8px] uppercase tracking-[0.3em] font-bold">First Summit</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Stats - Reduced complexity */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute top-1/4 -right-2 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-[2rem] z-40 hidden xl:block shadow-2xl"
                            >
                                <div className="space-y-2">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-3 bg-brand-light rounded-full" />)}
                                    </div>
                                    <p className="text-white font-black text-lg tracking-tighter">ELITE</p>
                                    <p className="text-white/40 text-[7px] uppercase font-bold tracking-[0.25em]">Difficulty</p>
                                </div>
                            </motion.div>

                            {/* Background Glow - Reduced intensity and size */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
        </Section>
    );
}
