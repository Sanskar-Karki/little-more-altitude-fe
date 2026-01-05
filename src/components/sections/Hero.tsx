"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import homepage from "../../assets/homepage.jpg";
import mountainGrayscale from "../../assets/Mountain-grayscale.jpg";
import mountainRange from "../../assets/mountain-range-1.jpg";


const HERO_IMAGES = [
    homepage,
    mountainGrayscale,
    mountainRange,
];

const HERO_CONTENT = [
    {
        title: "Conquer Your Summit",
        subtitle: "Experience the thrill of high altitude trekking with certified guides."
    },
    {
        title: "Walk Above the Clouds",
        subtitle: "Discover hidden trails and breathtaking vistas in the Himalayas."
    },
    {
        title: "Adventure Awaits",
        subtitle: "Join us for an unforgettable journey into the wild."
    }
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
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
                        alt={HERO_CONTENT[index].title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark z-10" /> {/* Overlay */}
                </motion.div>
            </AnimatePresence>

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
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                            {HERO_CONTENT[index].title}
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-white/90 font-light max-w-2xl mx-auto">
                            {HERO_CONTENT[index].subtitle}
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 "
                        >
                            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-light text-brand-dark rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(80,140,155,0.4)] hover:cursor-pointer hover:shadow-[0_8px_40px_rgba(80,140,155,0.6)]">
                                <span className="relative z-10">Start Your Journey</span>
                                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </button>
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
