"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Map, Compass, Wind, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Nepal() {
    const { t } = useLanguage();
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
            <div ref={containerRef} className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center py-16 md:py-32">
                {/* Background Text - Simplified for performance */}
                <motion.div
                    style={{ y: ySlow }}
                    className="absolute top-20 -left-10 text-[18vw] font-black text-white/[0.03] select-none whitespace-nowrap pointer-events-none tracking-tighter will-change-transform"
                >
                    {t('nepal.badge').toUpperCase()}
                </motion.div>

                <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="space-y-5">
                                <SectionBadge dark>{t('nepal.badge')}</SectionBadge>
                                <SectionHeading dark gradientText={t('nepal.gradient')} className="text-3xl sm:text-4xl md:text-5xl lg:text-3rem">
                                    {t('nepal.heading')}
                                </SectionHeading>
                                <p className="text-brand-white/70 text-base md:text-xl leading-relaxed font-medium max-w-xl">
                                    {t('nepal.description')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {(t('nepal.highlights') as any[]).map((item, i) => {
                                    const icons = [Wind, Sun, Compass, Map];
                                    const colors = ["text-blue-400", "text-amber-400", "text-emerald-400", "text-brand-light"];
                                    const Icon = icons[i];
                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="group py-4 transition-colors duration-300"
                                        >
                                            <Icon className={`mb-4 w-6 h-6 ${colors[i]} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                            <h4 className="text-white font-black text-base uppercase tracking-wider mb-2">{item.title}</h4>
                                            <p className="text-brand-white/40 text-[13px] leading-relaxed group-hover:text-brand-white/60 transition-colors">{item.desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/trekking"
                                    className="inline-flex items-center gap-3 text-brand-light text-sm font-bold tracking-widest uppercase border-b border-brand-light/20 pb-2 hover:border-brand-light transition-all cursor-pointer"
                                >
                                    {t('nepal.exploreRegion')} <span>→</span>
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
                                    src="/images/HomePageImage/MardiHimal-Nepal.jpg"
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
                                className="absolute bottom-4 left-0 w-[55%] md:w-[60%] aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border border-white/10 will-change-transform"
                            >
                                <Image
                                    src="/images/HomePageImage/ebc1.jpg"
                                    alt="Nepal Culture"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <p className="text-brand-light text-3xl font-black">1953</p>
                                        <p className="text-white/60 text-[8px] uppercase tracking-[0.3em] font-bold">{t('nepal.firstSummit')}</p>
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
                                    <p className="text-white font-black text-lg tracking-tighter">{t('nepal.elite')}</p>
                                    <p className="text-white/40 text-[7px] uppercase font-bold tracking-[0.25em]">{t('nepal.difficulty')}</p>
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
