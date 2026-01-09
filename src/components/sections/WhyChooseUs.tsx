"use client";

import { Variants, motion, AnimatePresence } from "framer-motion";
import { Shield, Compass, Star, Heart, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { useState, useEffect } from "react";

const STATS = [
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Happy Trekkers", value: 2.5, suffix: "k" },
    { label: "Routes Explored", value: 40, suffix: "+" },
    { label: "Safety Rating", value: 100, suffix: "%" },
];

const REASONS = [
    {
        icon: Star,
        title: "Unparalleled, Founder-Led Leadership",
        desc: "Your trek is led by the founders themselves—Pemba N. Sherpa and Ngima Tashi Sherpa, professional certified guides born and raised on Himalayan trails. Pemba is a high-altitude filmmaker, while Tashi brings deep knowledge of inner Himalayan culture."
    },
    {
        icon: Shield,
        title: "Safety-First, Client-Focused Approach",
        desc: "With years of high-altitude guiding experience, your safety and well-being are our highest priority. We provide personalized attention, thoughtful pacing, and meticulous planning so you feel supported at every step."
    },
    {
        icon: Compass,
        title: "Tailored Treks for Every Explorer",
        desc: "Whether you're seeking a group adventure, a private trek, or a 1:1 journey, we cater to it all. personal guidance and close attention to detail, every trek is tailored to create a truly unforgettable experience."
    },
    {
        icon: Leaf,
        title: "Ethical, Responsible & Transparent",
        desc: "We practice responsible tourism with strong porter welfare, fair wages, proper equipment, insurance, environmental care, and clear, transparent pricing with no hidden costs."
    },
    {
        icon: Heart,
        title: "Trek With Purpose — Giving Back",
        desc: "To give back to the mountains, we donate 10% of our profits from every trek to support needy communities outside major touristic areas, contributing to sustainable tourism and community development."
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export function WhyChooseUs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

    const truncateText = (text: string, limit: number) => {
        const words = text.trim().split(/\s+/).filter(Boolean);
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    const toggleExpanded = (id: string) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const getWordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % REASONS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + REASONS.length) % REASONS.length);
    };

    // Calculate which 2 cards to show on desktop, or 1 on mobile
    const visibleIndices = isMobile
        ? [currentIndex]
        : [currentIndex, (currentIndex + 1) % REASONS.length];

    return (
        <Section id="why-choose-us" background="dark" className="py-18!">
            {/* Background decorative elements */}
            <motion.div
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-light/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-medium/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Visual Section */}
                <div className="relative order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 w-full">
                    <div className="relative grid grid-cols-12 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, x: 80, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="col-span-8 overflow-hidden rounded-[2.5rem] shadow-2xl border border-brand-light/10"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200&auto=format&fit=crop"
                                alt="Majestic Mountain"
                                className="aspect-[4/5] object-cover transition-transform duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 60, scale: 0.8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                            className="col-span-6 -mt-32 -ml-12 lg:-ml-24 z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border border-brand-light/10 bg-brand-dark"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop"
                                alt="Trekkers in the wild"
                                className="aspect-square object-cover transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, x: 20, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-brand-light p-4 rounded-3xl shadow-2xl hidden xl:block"
                    >
                        <div className="flex items-center gap-4 text-brand-dark">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="p-3 bg-brand-dark rounded-2xl text-brand-light"
                            >
                                <Compass size={32} />
                            </motion.div>
                            <div>
                                <p className="font-extrabold text-2xl">
                                    <CountUp to={15} suffix="+" />
                                </p>
                                <p className="opacity-70 text-sm font-bold">Years of Adventure</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Content Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-10 order-1 lg:order-2"
                >
                    <div className="space-y-6">
                        <SectionBadge dark={true}>Why Choose Us</SectionBadge>
                        <SectionHeading gradientText="Altitude Difference.">
                            The Little More
                        </SectionHeading>
                        <motion.p
                            variants={itemVariants}
                            className="text-brand-white/80 text-lg leading-relaxed max-w-xl font-medium"
                        >
                            Built on real high-altitude experience and deep local knowledge, we help you Go Higher and Live Deeper.
                        </motion.p>
                    </div>

                    {/* Reasons Slider - 2-Card View with Stacking Animation */}
                    <div className="relative overflow-visible">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[360px] md:min-h-[320px] relative">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {visibleIndices.map((idx, i) => {
                                    const pillar = REASONS[idx];
                                    return (
                                        <motion.div
                                            key={pillar.title}
                                            layout
                                            initial={{ opacity: 0, x: 100, scale: 0.9, zIndex: 0 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                scale: 1,
                                                zIndex: 10 - i, // i=0 is left, stays above
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                    delay: i * 0.1
                                                }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: -100,
                                                scale: 0.9,
                                                zIndex: 0,
                                                transition: { duration: 0.3 }
                                            }}
                                            className="h-full"
                                        >
                                            <div className="group p-8 rounded-[2rem] bg-brand-white/[0.03] border border-brand-light/10 hover:border-brand-light/30 transition-all duration-500 hover:bg-brand-white/[0.05] h-full flex flex-col backdrop-blur-sm relative">
                                                <div className="w-14 h-14 rounded-2xl bg-brand-light/10 text-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500 shrink-0 shadow-lg">
                                                    <pillar.icon size={28} />
                                                </div>
                                                <h4 className="text-white font-bold text-xl mb-3 leading-tight">{pillar.title}</h4>
                                                <div className="text-brand-white/60 text-sm leading-relaxed flex-grow">
                                                    {expandedIds.includes(pillar.title)
                                                        ? pillar.desc
                                                        : truncateText(pillar.desc, 50)}
                                                    {getWordCount(pillar.desc) > 50 && (
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleExpanded(pillar.title);
                                                            }}
                                                            className="ml-2 text-brand-light font-bold hover:underline cursor-pointer"
                                                        >
                                                            {expandedIds.includes(pillar.title) ? "Show Less" : "Read More..."}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Pagination & Nav */}
                        <div className="flex items-center gap-6 mt-10">
                            <div className="flex gap-2.5">
                                {REASONS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i
                                            ? "w-10 bg-brand-light shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                                            : "w-2 bg-brand-light/20 hover:bg-brand-light/40"
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-3 ml-auto">
                                <button
                                    onClick={prevSlide}
                                    className="p-3.5 rounded-2xl bg-brand-white/5 border border-brand-light/10 hover:bg-brand-light hover:text-brand-dark transition-all duration-500 hover:scale-110 active:scale-95 group shadow-xl"
                                >
                                    <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-3.5 rounded-2xl bg-brand-white/5 border border-brand-light/10 hover:bg-brand-light hover:text-brand-dark transition-all duration-500 hover:scale-110 active:scale-95 group shadow-xl"
                                >
                                    <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-brand-light/10"
                    >
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="space-y-1"
                            >
                                <p className="text-3xl font-black text-white tracking-tighter">
                                    <CountUp to={stat.value} suffix={stat.suffix} precision={stat.value % 1 !== 0 ? 1 : 0} />
                                </p>
                                <p className="text-brand-light/50 text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
