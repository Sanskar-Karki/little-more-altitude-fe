"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ebc from "../../../public/images/HomePageImage/ebc.jpg";
import abcsun from "../../../public/images/HomePageImage/abcsun.jpg";
import Langtang from "../../../public/images/HomePageImage/Langtang.jpg";
import Manaslu from "../../../public/images/HomePageImage/Manaslu.jpg";
import Mardi from "../../../public/images/HomePageImage/MardiHimal-Nepal.jpg";

const HERO_IMAGES = [
    abcsun,
    Mardi,
    Langtang,
    Manaslu,
    ebc,
];

export function Hero() {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);

    const SLUGS = [
        "annapurna-base-camp-trek",
        "mardi-himal-trek",
        "langtang-valley-trek",
        "manaslu-circuit-trek",
        "everest-base-camp-trek"
    ];

    const translatedContent = t('hero.content') as { title: string, subtitle: string }[];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => {
                const next = prev + 1;
                return next >= HERO_IMAGES.length ? 0 : next;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={HERO_IMAGES[index]}
                        alt={translatedContent[index].title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 z-10" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-8 md:px-20 lg:px-32 text-center ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl">
                            {translatedContent[index].title}
                        </h1>
                        <p className="text-lg md:text-2xl text-brand-white/90 font-light max-w-2xl mx-auto drop-shadow-lg px-4 md:px-0">
                            {translatedContent[index].subtitle}
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 "
                        >
                            <Link href={SLUGS[index].startsWith('/') ? SLUGS[index] : `/trekking/${SLUGS[index]}`}>
                                <button className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-brand-light text-brand-dark rounded-full text-base md:text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(80,140,155,0.4)] hover:cursor-pointer">
                                    <span className="relative z-10">{t('hero.cta')}</span>
                                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
                {HERO_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-brand-light w-10" : "bg-white/30 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
