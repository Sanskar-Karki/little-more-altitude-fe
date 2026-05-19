"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Mountain, Heart, Compass, Shield, Users, Camera, MapPin, Award, ArrowRight, ChevronDown, CheckCircle2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useLanguage } from "@/context/LanguageContext";
export default function AboutPage() {
    const { t } = useLanguage();
    const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax Transforms
    const topoY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    // Vision section parallax
    const galleryCard1Y = useTransform(scrollYProgress, [0.1, 0.4], [30, -30]);
    const galleryCard2Y = useTransform(scrollYProgress, [0.1, 0.4], [-20, 20]);
    const galleryCard3Y = useTransform(scrollYProgress, [0.1, 0.4], [60, -20]);

    const translatedFounders = (t('about.founders') as any[]) || [];
    const FOUNDERS = Array.isArray(translatedFounders) ? translatedFounders.map((founder, index) => {
        const images = ["/founders/pemba1.jpg", "/founders/tashi1.jpg", "/founders/pema1.jpg"];
        const hrefs = ["/about/pemba", "/about/tashi", "/about/pema"];
        return {
            ...founder,
            image: images[index],
            href: hrefs[index]
        };
    }) : [];

    const translatedFeatures = (t('about.features') as any[]) || [];
    const WHY_US_FEATURES = Array.isArray(translatedFeatures) ? translatedFeatures.map((feature, index) => {
        const icons = [Users, Shield, MapPin, CheckCircle2, Globe];
        const ids = ["leadership", "safety", "tailored", "ethical", "giving-back"];
        return {
            ...feature,
            id: ids[index],
            icon: icons[index]
        };
    }) : [];

    return (
        <main ref={containerRef} className="min-h-screen bg-brand-white overflow-hidden relative">
            <div className="relative z-10">
                {/* === 1. ABOUT US & VISION === */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none border-b border-brand-light/20">
                        <Image
                            src="/images/Trekking/Abc/abc1.jpg"
                            alt="Himalayas"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
                    </div>

                    <section className="relative mt-24 md:mt-32 lg:mt-52">
                        <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6 md:space-y-8"
                                >
                                    <div className="space-y-4">
                                        <SectionBadge icon={Mountain}>{t('about.badge')}</SectionBadge>
                                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] md:leading-[0.9] text-brand-dark tracking-tighter">
                                            {t('about.heading')} <br />
                                            <span className="text-brand-medium">{t('about.gradient')}</span>
                                        </h1>
                                    </div>
                                    <p className="text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                        {t('about.subheading')}
                                    </p>
                                    <div className="space-y-5 md:space-y-6 text-brand-dark/60 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-brand-medium/40 pl-5 md:pl-6">
                                        <p>{t('about.description')}</p>
                                    </div>
                                </motion.div>

                                <div className="relative h-[600px] md:h-[800px] hidden lg:block overflow-visible">
                                    <motion.div
                                        style={{ y: galleryCard1Y }}
                                        className="absolute top-[-20px] right-0 w-[40%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20"
                                    >
                                        <Image src="/founders/pemba2.jpg" alt="Mountain Expedition" fill className="object-cover" />
                                    </motion.div>
                                    <motion.div
                                        style={{ y: galleryCard2Y }}
                                        className="absolute top-[20%] left-20 w-[45%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10"
                                    >
                                        <Image src="/founders/group1.jpg" alt="Founder guiding" fill className="object-cover" />
                                    </motion.div>
                                    <motion.div
                                        style={{ y: galleryCard3Y }}
                                        className="absolute top-[280px] right-[0%] w-[40%] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-30"
                                    >
                                        <Image src="/founders/pemba5.jpg" alt="Cultural connection" fill className="object-cover" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* === SCROLL DOWN INDICATOR === */}
                    <div className="relative -top-70 z-10 flex flex-col items-center justify-center py-10 md:py-14 gap-3 select-none">
                        <motion.a
                            href="#founders"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center gap-3 group cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("founders")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="text-[11px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-medium"
                            >
                                {t('about.meetTeam')}
                            </motion.span>
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                className="w-6 h-10 rounded-full border-2 border-brand-medium/60 group-hover:border-brand-medium flex items-start justify-center pt-1.5 transition-colors duration-300"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1 h-2.5 rounded-full bg-brand-medium"
                                />
                            </motion.div>
                        </motion.a>
                    </div>

                    {/* === 2. MEET THE FOUNDERS === */}
                    <div id="founders" className="relative pb-14">
                        <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
                            <SectionBadge icon={Users}><p className="text-[14px]">{t('about.teamBadge')}</p></SectionBadge>
                            <p className="text-brand-dark text-lg md:text-xl lg:pr-12 mx-auto my-12 text-center max-w-3xl px-4 md:px-8" >
                                "{t('about.vision')}"
                            </p>
                        </div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto px-8 pb-12">
                            {FOUNDERS.map((founder, index) => (
                                <Link key={founder.name} href={founder.href}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:shadow-brand-medium/20 group-hover:-translate-y-2">
                                            <Image
                                                src={founder.image}
                                                alt={founder.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                        <div className="space-y-3 px-4">
                                            <span className="text-brand-medium font-bold text-[10px] md:text-[11px] uppercase tracking-[0.25em] block transition-colors group-hover:text-brand-dark">
                                                {founder.role.split('•')[0].split(',')[0]}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight transition-colors group-hover:text-brand-medium">
                                                {founder.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-brand-dark/40 font-black text-[10px] uppercase tracking-widest pt-1 transition-all duration-300 group-hover:gap-4 group-hover:text-brand-medium">
                                                {t('common.readMore') || "Read More"}
                                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center pb-24 px-8 pt-10">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 rounded-[2rem] bg-brand-dark text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-800/80 transition-all shadow-3xl flex items-center gap-4"
                                >
                                    {t('about.cta')}
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
