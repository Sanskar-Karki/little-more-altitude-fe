"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Mountain, Instagram } from "lucide-react";
import type { Testimonial } from "@/types";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Adventure Enthusiast",
        content: "The Everest Base Camp trek was a life-changing experience. The guides were incredibly knowledgeable and supportive, making sure everyone felt safe and motivated throughout the journey.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        socialHandle: "@sarah_peaks",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Photographer",
        content: "As a photographer, I've traveled to many places, but the views on the Annapurna Circuit were unparalleled. SummitTrek's attention to detail and timing for the best shots was impressive.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        socialHandle: "@mchen_clicks",
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "First-time Trekker",
        content: "I was nervous about my first high-altitude trek, but the team made me feel confident and prepared. The experience exceeded all my expectations - I'm already planning my next adventure!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        socialHandle: "@emma_wanders",
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Corporate Executive",
        content: "Organized our company retreat with SummitTrek. The team-building aspects combined with the adventure created bonds that have strengthened our workplace culture immensely.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
        socialHandle: "@david_biz_adv",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <Section id="testimonials" background="dark">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-medium/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
            <Mountain className="absolute bottom-10 right-10 w-96 h-96 text-white/[0.02] -z-0 pointer-events-none" />

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
                <SectionBadge dark={true}>Testimonials</SectionBadge>
                <SectionHeading gradientText="Summit.">
                    Voices of the
                </SectionHeading>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-brand-white/70 font-medium"
                >
                    Real stories from adventurers who have touched the sky
                    with us.
                </motion.p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.x > 100) prev();
                            else if (info.offset.x < -100) next();
                        }}
                        className="relative p-6 md:p-10 rounded-[2rem] bg-brand-white/[0.02] backdrop-blur-xl shadow-2xl border border-brand-light/10 overflow-hidden cursor-grab active:cursor-grabbing group/card"
                    >
                        {/* Giant Decorative Quote */}
                        <Quote className="absolute top-2 right-2 h-18 w-18 text-brand-light/[0.03] -z-10 group-hover/card:rotate-16 transition-transform duration-700" />

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 pointer-events-none select-none relative z-10">
                            {/* Avatar & Social Proof */}
                            <div className="flex flex-col items-center gap-6 shrink-0">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-brand-light/20 blur-xl rounded-full scale-110" />
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover relative z-10 ring-4 ring-brand-light/30"
                                    />
                                    <div className="absolute -bottom-2 right-2 bg-brand-light text-brand-dark p-2 rounded-full z-20 shadow-lg">
                                        <Star className="h-5 w-5 fill-current" />
                                    </div>
                                </motion.div>

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/10 border border-brand-light/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-brand-light uppercase tracking-wider">Verified Journey</span>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 text-center md:text-left space-y-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-center md:justify-start gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < testimonials[currentIndex].rating ? 'fill-brand-light text-brand-light' : 'text-brand-white/20'}`} />
                                        ))}
                                    </div>
                                    <p className="text-lg md:text-xl text-white leading-[1.4] font-bold italic tracking-tight">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-brand-light/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <div className="font-black text-xl text-white tracking-wide">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-brand-light font-bold text-xs uppercase tracking-[0.2em] mt-1 opacity-80">
                                            {testimonials[currentIndex].role}
                                        </div>
                                    </div>
                                    {testimonials[currentIndex].socialHandle && (
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-brand-white/40 hover:text-brand-light transition-colors pointer-events-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Instagram size={16} />
                                            <span className="text-xs font-bold">{testimonials[currentIndex].socialHandle}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-6">
                    {/* Interactive Pagination */}
                    <div className="flex items-center">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className="group relative flex items-center justify-center p-2"
                                aria-label={`Go to testimonial ${index + 1}`}
                            >
                                <div className={`transition-all duration-500 rounded-full ${index === currentIndex
                                    ? "w-12 h-2 bg-brand-light"
                                    : "w-2 h-2 bg-brand-medium/50 group-hover:bg-brand-light/50"
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Button Group */}
                    <div className="flex gap-4">
                        <motion.button
                            whileHover={{ scale: 1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="p-3 rounded-2xl bg-brand-white/[0.03] text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 border border-brand-light/10 hover:border-brand-light/40 group/btn hover:cursor-pointer"
                            aria-label="Previous testimonial "
                        >
                            <ChevronLeft className="h-6 w-6  transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="p-3 rounded-2xl bg-brand-light text-brand-dark hover:bg-white transition-all duration-300 shadow-xl shadow-brand-light/20 group/btn hover:cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6  transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
