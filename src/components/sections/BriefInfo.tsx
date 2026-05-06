"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mountain, Users, Calendar, Trophy } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/context/LanguageContext";

export function BriefInfo() {
    const { t } = useLanguage();

    const STATS = [
        { label: t('briefInfo.stats.clients'), value: 150, suffix: "+", icon: Users },
        { label: t('briefInfo.stats.years'), value: 10, suffix: "+", icon: Calendar },
        { label: t('briefInfo.stats.success'), value: 97, suffix: "%", icon: Trophy },
    ];

    return (
        <Section id="info" background="white" className="overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                {/* Company Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <SectionBadge>{t('briefInfo.badge')}</SectionBadge>
                            <SectionHeading dark={false} gradientText={t('briefInfo.gradient')}>
                                {t('briefInfo.heading')}
                            </SectionHeading>
                        </div>
 
                        <div className="relative pl-6 md:pl-10 border-l-2 border-brand-medium/20">
                            <p className="text-brand-medium/80 text-base md:text-xl lg:text-2xl leading-relaxed font-medium">
                                {t('briefInfo.description')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block aspect-video lg:aspect-[9/11] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group/img order-first lg:order-last"
                    >
                        <img
                            src="/images/HomePageImage/Mardi-Clientpp.jpg"
                            alt="Mount Everest and Nuptse"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 pt-6 ">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center space-y-2 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 text-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-500">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-brand-dark tracking-tighter">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </h4>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-medium/50">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
