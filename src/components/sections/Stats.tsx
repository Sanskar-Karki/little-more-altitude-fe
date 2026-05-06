"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Users, Calendar, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Stats() {
    const { t } = useLanguage();

    const STATS = [
        {
            label: t('stats.clients'),
            value: 150,
            suffix: "+",
            icon: Users,
            color: "brand-light"
        },
        {
            label: t('stats.years'),
            value: 10,
            suffix: "+",
            icon: Calendar,
            color: "brand-medium"
        },
        {
            label: t('stats.success'),
            value: 97,
            suffix: "%",
            icon: Trophy,
            color: "brand-light"
        }
    ];

    return (
        <Section id="stats" background="dark" className="py-24">
            <div className="container mx-auto px-8 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {STATS.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="relative group text-center space-y-4"
                        >
                            <div className="flex justify-center">
                                <div className={`p-5 rounded-3xl bg-white/5 border border-white/10 group-hover:bg-brand-light/10 group-hover:border-brand-light/20 transition-all duration-500`}>
                                    <stat.icon className="w-8 h-8 text-brand-light" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-5xl md:text-6xl font-black text-white tracking-tight">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-brand-white/60 text-sm font-bold uppercase tracking-[0.2em]">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-brand-light/30 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
