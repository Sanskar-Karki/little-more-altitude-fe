"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Expedition } from "@/components/sections/Expedition";
import { Mountain, Shield, Zap, ArrowRight, Gauge, Clock, Target, Users, Map } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/context/LanguageContext";

export default function ExpeditionPage() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yValue = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityValue = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const preparationFeatures = t('expedition.preparation.features') as any[];

    return (
        <main ref={containerRef} className="min-h-screen bg-brand-dark overflow-x-hidden">
            {/* Cinematic Hero Section - Compacted */}
            <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    style={{ y: yValue, scale: scaleValue }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=95"
                        alt="High Altitude Peaks"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/10 to-brand-dark" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.4)_100%)]" />
                </motion.div>

                <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                    <motion.div
                        style={{ opacity: opacityValue }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-6xl"
                    >
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <span className="px-5 py-2 rounded-full bg-brand-light text-brand-dark font-black text-[10px] uppercase tracking-[0.4em]">
                                    {t('expedition.hero.badge')}
                                </span>
                                <div className="h-px w-16 bg-brand-light/40" />
                                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                                    {t('expedition.hero.eliteAscent')}
                                </span>
                            </div>

                            <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-black text-white tracking-tighter leading-none mb-4">
                                {t('expedition.hero.title')} <br />
                                <span className="text-brand-light uppercase text-[0.45em] tracking-[0.2em] block mt-4">{t('expedition.hero.limits')}</span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                <p className="text-brand-white/70 text-xl md:text-2xl font-medium leading-relaxed max-w-xl border-l-2 border-brand-light/30 pl-8">
                                    {t('expedition.hero.description')}
                                </p>

                                <div className="flex gap-6">
                                    <button className="group px-10 py-6 bg-brand-light text-brand-dark rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all flex items-center gap-4 shadow-2xl">
                                        {t('expedition.hero.viewManifest')} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute left-10 bottom-20 hidden xl:flex flex-col items-center gap-12 opacity-30">
                    <p className="vertical-text text-[10px] font-black text-white tracking-[0.6em] uppercase">
                        {t('expedition.hero.protocol')}
                    </p>
                    <div className="w-px h-24 bg-gradient-to-b from-white to-transparent" />
                </div>

                {/* Quick Stats Dashboard - More Minimal */}
                <div className="absolute bottom-0 left-0 w-full z-20">
                    <div className="container mx-auto px-8 md:px-32 pb-16">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-t border-white/10 backdrop-blur-md bg-white/[0.02] rounded-t-[4rem] px-16">
                            {[
                                { icon: Mountain, label: t('expedition.stats.successRate'), value: "98", suffix: "%" },
                                { icon: Users, label: t('expedition.stats.guideRatio'), value: "1:1", suffix: "" },
                                { icon: Shield, label: t('expedition.stats.safetyIndex'), value: "100", suffix: "%" },
                                { icon: Target, label: t('expedition.stats.peakSummits'), value: "250", suffix: "+" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex items-center gap-3 text-brand-light/50">
                                        <stat.icon size={12} />
                                        <span className="text-[9px] font-black uppercase tracking-widest leading-none">{stat.label}</span>
                                    </div>
                                    <div className="text-2xl lg:text-3xl font-black text-white tracking-tighter leading-none">
                                        {isNaN(Number(stat.value)) ? stat.value : <CountUp to={Number(stat.value)} suffix={stat.suffix} />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: Math.random() * 0.3,
                                x: Math.random() * 100 + "%",
                                y: -20
                            }}
                            animate={{
                                y: "120vh",
                                x: (Math.random() * 100 - 10) + "%"
                            }}
                            transition={{
                                duration: Math.random() * 15 + 15,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10
                            }}
                            className="absolute w-1 h-1 bg-white rounded-full blur-[2px]"
                        />
                    ))}
                </div>
            </section>

            {/* Sticky Milestone Navigation - Functional */}
            <div className="hidden 2xl:block fixed right-16 top-1/2 -translate-y-1/2 z-50">
                <div className="flex flex-col gap-8 items-center py-10 px-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl">
                    <div className="w-px h-8 bg-brand-light/30" />
                    {[
                        { label: "01", name: t('expedition.nav.summits'), id: "expeditions" },
                        { label: "02", name: t('expedition.nav.protocol'), id: "preparation" },
                        { label: "03", name: t('expedition.nav.contact'), id: "contact" }
                    ].map((step) => (
                        <button
                            key={step.label}
                            onClick={() => document.getElementById(step.id)?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative h-8 w-8 flex items-center justify-center focus:outline-none"
                        >
                            <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-brand-light group-hover:scale-150 transition-all duration-300" />
                            <span className="absolute right-full mr-6 py-2 px-4 rounded-xl bg-brand-dark/90 border border-white/10 text-[9px] font-black tracking-[0.3em] text-brand-light opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none uppercase whitespace-nowrap">
                                {step.name}
                            </span>
                        </button>
                    ))}
                    <div className="w-px h-8 bg-brand-light/30" />
                </div>
            </div>

            <Expedition />

            {/* Preparation Section: Higher Contrast, Better Spacing */}
            <section id="preparation" className="py-24 relative overflow-hidden bg-brand-dark">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-light/[0.03] rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 border border-brand-light w-fit px-4 py-1 rounded-full">
                                    <p className="text-brand-light  tracking-widest uppercase">{t('expedition.preparation.badge')}</p>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                                    {t('expedition.preparation.title')} <br />
                                    <span className="text-brand-light">{t('expedition.preparation.success')}</span>
                                </h2>
                                <p className="text-brand-white/50 text-lg font-medium leading-relaxed max-w-lg">
                                    {t('expedition.preparation.description')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {preparationFeatures.map((item, i) => {
                                    const icons = [Gauge, Zap, Target, Shield];
                                    const Icon = icons[i];
                                    return (
                                        <div
                                            key={i}
                                            className="space-y-3 p-5 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-light/20 transition-all duration-300 group hover:bg-white/[0.04]"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-brand-light/5 text-brand-light/80 flex items-center justify-center group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300">
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-1">{item.title}</h4>
                                                <p className="text-brand-white/30 text-[10px] font-medium leading-relaxed uppercase tracking-wider">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] max-h-[550px] w-full max-w-md mx-auto lg:ml-auto">
                                <Image
                                    src="https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1000&q=90"
                                    alt="Elite Training"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-6 bg-brand-light p-6 rounded-[2.5rem] shadow-2xl">
                                        <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-light flex items-center justify-center">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <p className="text-brand-dark font-black text-2xl leading-none tracking-tighter">{t('expedition.preparation.ratio')}</p>
                                            <p className="text-brand-dark/60 text-[9px] font-bold uppercase tracking-widest mt-1">{t('expedition.preparation.ratioDesc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -inset-8 border border-brand-light/5 rounded-[4rem] -z-10 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)] max-w-md mx-auto lg:ml-auto left-0 right-0 lg:left-auto lg:right-0" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - More Minimal and Elegant */}
            <section id="contact" className="py-32 relative bg-brand-dark overflow-hidden">
                <div className="container relative z-10 mx-auto px-8 text-center">
                    <div className="inline-block px-8 py-3 rounded-full bg-white/[0.03] border border-white/10 text-brand-light text-[11px] font-black uppercase tracking-[0.4em] mb-12">
                        {t('expedition.cta.badge')}
                    </div>
                    <h2 className="text-6xl md:text-[7rem] font-black text-white tracking-tighter leading-[0.85] mb-12">
                        {t('expedition.cta.title')} <br />
                        <span className="text-brand-light uppercase text-[0.45em] tracking-[0.2em] block mt-8">{t('expedition.cta.awaits')}</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="px-16 py-8 bg-brand-light text-brand-dark rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all shadow-2xl">
                            {t('expedition.cta.request')}
                        </button>
                        <button className="px-12 py-8 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:bg-white/[0.08] transition-all">
                            {t('expedition.cta.speak')}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
