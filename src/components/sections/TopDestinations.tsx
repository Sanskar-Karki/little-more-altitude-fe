"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mountain } from "lucide-react";
import abcsun from "../../../public/images/HomePageImage/abcsun.jpg";
import Manaslu from "../../../public/images/HomePageImage/Manaslu.jpg";
import ebc from "../../../public/images/HomePageImage/ebc.jpg";
import { useLanguage } from "@/context/LanguageContext";

export function TopDestinations() {
    const { t } = useLanguage();
    const destinations = t('topDestinations.list') as any[];
    
    const IMAGES = [abcsun, Manaslu, ebc];
    const HEIGHTS = ["4,000m+", "5,000m+", "6,000m+"];
    const SLUGS = [
        "/trekking/annapurna-base-camp-trek",
        "/trekking/manaslu-circuit-trek",
        "/trekking/everest-base-camp-trek"
    ];

    return (
        <Section id="top-destinations" background="white">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
                    <SectionBadge>{t('topDestinations.badge')}</SectionBadge>
                    <SectionHeading dark={false} gradientText={t('topDestinations.gradient')}>
                        {t('topDestinations.heading')}
                    </SectionHeading>
                    <p className="text-brand-medium/60 text-base md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        {t('topDestinations.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {destinations.map((dest, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <Link href={SLUGS[idx]}>
                                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-brand-light/20 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700 cursor-pointer">
                                    <Image
                                        src={IMAGES[idx]}
                                        alt={dest.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-90" />

                                    <div className="absolute top-6 left-6">
                                        <div className="px-4 py-2 rounded-2xl bg-brand-light/20 backdrop-blur-md border border-brand-light/30 text-brand-light text-xs font-black uppercase tracking-widest">
                                            {HEIGHTS[idx]}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 space-y-2 md:space-y-3">
                                        <div className="flex items-center gap-2 text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.25em]">
                                            <Mountain size={10} />
                                            <span>{dest.tag}</span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                                            {dest.name}
                                        </h3>
                                        <p className="text-brand-white/60 text-xs md:text-sm font-medium">
                                            {dest.location}
                                        </p>

                                        <div className="pt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                                            <div className="flex items-center gap-2 text-brand-light text-sm font-bold group/btn">
                                                {t('topDestinations.discoverMore')}
                                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
