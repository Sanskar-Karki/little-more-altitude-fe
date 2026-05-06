"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, Quote, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MountainLine } from "@/components/ui/MountainLine";
import pemaImg from "./pema.jpg";

import { useLanguage } from "@/context/LanguageContext";

export default function PemaDetailPage() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <main className="min-h-screen bg-brand-white">
            {/* Immersive Hero Section */}
            <div className="relative h-[45vh] md:h-[40vh] w-full overflow-hidden bg-brand-dark">
                <div className="container mx-auto px-8 md:px-20 lg:px-32 h-full flex flex-col justify-end sm:pb-28 pb-52 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <SectionBadge dark={true} icon={Shield}>{t('about.founders')[2].role}</SectionBadge>
                            <h1 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tighter leading-[0.9]">
                                Pema Thilen
                                <span className="text-brand-light pl-2">Sherpa</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block pb-4 text-right"
                        >
                            <p className="text-brand-white/60 text-lg md:text-xl font-medium max-w-6xl ml-auto">
                                "The mission is simple but deeply personal—to provide U.S. travelers with a safe, authentic, and unforgettable way to experience Nepal."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Animated Mountain Line Overlay */}
                <MountainLine
                    className="absolute bottom-12 md:bottom-0 left-0 w-full h-32 text-brand-light/20"
                    color="var(--color-brand-light)"
                    duration={3}
                />

            </div>

            {/* Content Section with Negative Margin */}

            <section ref={containerRef} className="relative z-20">
                {/* Blended Parallax Background Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden container -mx-[-300px] ">
                    <motion.div
                        style={{ y: backgroundY, opacity: backgroundOpacity }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/images/Trekking/Abc/abc3.jpg"
                            alt="Himalayan Background"
                            fill
                            className="object-cover opacity-30"
                            sizes="100vw"
                        />
                        {/* Sophisticated Blending Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-white via-transparent to-brand-white/90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-white via-brand-white/20 to-transparent" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-10 py-20 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                        {/* Left Column: Visual & Stats Card */}
                        <div className="lg:col-span-4 pb-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="sticky top-32 space-y-8"
                            >
                                <div className="relative aspect-[3/4] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group max-w-[340px] mx-auto lg:mx-0">
                                    <Image
                                        src={pemaImg}
                                        alt="Pema Sherpa"
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 90vw, 340px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-60" />
                                </div>

                                <div className="grid grid-cols-2 gap-3 max-w-[340px] mx-auto lg:mx-0">
                                    <div className="p-6 rounded-[2rem] bg-brand-dark text-white flex flex-col justify-center items-center text-center">
                                        <p className="text-3xl font-black text-brand-light tracking-tighter">USA</p>
                                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-60">Army Reserve</p>
                                    </div>
                                    <div className="p-6 rounded-[2rem] bg-white border border-brand-light/20 flex flex-col justify-center items-center text-center shadow-lg">
                                        <p className="text-3xl font-black text-brand-dark tracking-tighter">100%</p>
                                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-medium/50">Safety Standards</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Narrative Biography */}
                        <div className="lg:col-span-8 pt-12 lg:pt-24 space-y-16">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-12 bg-brand-light" />
                                        <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">A Legacy of Discipline</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
                                        Where Heritage Meets <br />
                                        <span className="text-brand-medium">World-Class Professionalism.</span>
                                    </h2>
                                </div>

                                <div className="space-y-6 md:space-y-8 text-brand-dark/80 text-lg md:text-xl leading-[1.7] md:leading-[1.8] font-medium">
                                    {t('about.founders')[2].bio.split('\n\n').map((paragraph: string, idx: number) => (
                                        <p key={idx} className={idx === 0 ? "first-letter:text-5xl md:first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-brand-medium" : ""}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Expertise Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-brand-light/20">
                                <div className="group p-8 rounded-[2rem] bg-white border border-brand-light/10 hover:border-brand-light transition-all shadow-sm hover:shadow-xl">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-light flex items-center justify-center mb-6 shadow-lg">
                                        <Shield size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark mb-2">Safety Protocols</h4>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">Designing and executing the most rigorous safety and rescue protocols in the Himalayas.</p>
                                </div>
                                <div className="group p-8 rounded-[2rem] bg-white border border-brand-light/10 hover:border-brand-light transition-all shadow-sm hover:shadow-xl">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-medium text-brand-white flex items-center justify-center mb-6 shadow-lg">
                                        <Zap size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark mb-2">Technical Logistics</h4>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">Managing complex supply chains and remote camp operations with surgical precision.</p>
                                </div>
                            </div>

                            {/* Contact & Social Section */}
                            <div className="flex flex-wrap items-center gap-6 py-12">
                                <button className="px-12 py-5 rounded-full bg-brand-dark text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-medium transition-all shadow-2xl flex items-center gap-4 group">
                                    Contact Logistics Team
                                    <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex gap-4">
                                    <Link href="#" className="p-5 rounded-full bg-brand-light/10 text-brand-dark border border-brand-light/20 hover:bg-brand-light hover:text-white transition-all">
                                        <Linkedin size={20} />
                                    </Link>
                                    <Link href="#" className="p-5 rounded-full bg-brand-light/10 text-brand-dark border border-brand-light/20 hover:bg-brand-light hover:text-white transition-all">
                                        <Instagram size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topographic Background Pattern Footer */}
            <div className="py-24 bg-brand-dark text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,196,182,0.05),transparent_70%)]" />
                <div className="container relative z-10 mx-auto px-8">
                    <Quote className="mx-auto text-brand-light/20 mb-10" size={64} />
                    <p className="text-3xl md:text-5xl font-black text-white max-w-4xl mx-auto leading-tight tracking-tight">
                        "Real Sherpa roots, upheld by the integrity of military service. We invite you into our Himalayan home."
                    </p>
                </div>
            </div>
        </main>
    );
}
