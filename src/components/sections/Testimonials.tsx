"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Adventure Enthusiast",
        content: "The Everest Base Camp trek was a life-changing experience. The guides were incredibly knowledgeable and supportive, making sure everyone felt safe and motivated throughout the journey.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Photographer",
        content: "As a photographer, I've traveled to many places, but the views on the Annapurna Circuit were unparalleled. SummitTrek's attention to detail and timing for the best shots was impressive.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "First-time Trekker",
        content: "I was nervous about my first high-altitude trek, but the team made me feel confident and prepared. The experience exceeded all my expectations - I'm already planning my next adventure!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Corporate Executive",
        content: "Organized our company retreat with SummitTrek. The team-building aspects combined with the adventure created bonds that have strengthened our workplace culture immensely.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-medium/20 text-brand-light font-medium text-sm mb-6 uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What Our <span className="text-brand-light">Trekkers</span> Say
                    </h2>
                    <p className="text-lg text-brand-white/70">
                        Real stories from adventurers who have experienced the magic of
                        expeditions with us.
                    </p>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="relative p-8 md:p-12 rounded-3xl bg-brand-medium/20 shadow-2xl border border-brand-light/10"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 p-4 rounded-full bg-brand-medium/30 text-brand-light">
                                <Quote className="h-8 w-8" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                {/* Avatar */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="flex-shrink-0"
                                >
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-brand-light/20"
                                    />
                                </motion.div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-brand-light text-brand-light" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium font-sans italic">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Author */}
                                    <div>
                                        <div className="font-bold text-lg text-white">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-brand-white/60">
                                            {testimonials[currentIndex].role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "bg-brand-light w-8"
                                            : "bg-brand-medium hover:bg-brand-white/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={prev}
                                className="p-3 rounded-full bg-brand-medium/30 text-white hover:bg-brand-light hover:text-brand-dark transition-colors border border-brand-light/10"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={next}
                                className="p-3 rounded-full bg-brand-medium/30 text-white hover:bg-brand-light hover:text-brand-dark transition-colors border border-brand-light/10"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
