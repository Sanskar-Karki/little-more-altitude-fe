"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import type { FAQItem } from "@/types";

const faqItems: FAQItem[] = [
    {
        id: 1,
        question: "What fitness level is required for trekking?",
        answer: "Our treks range from beginner-friendly to challenging. We recommend regular cardio exercise like hiking, jogging, or cycling for at least 2-3 months before your trek. Our team will provide a personalized fitness guide based on your chosen expedition.",
    },
    {
        id: 2,
        question: "What equipment do I need to bring?",
        answer: "We provide a comprehensive packing list upon booking. Essential items include sturdy hiking boots, layered clothing, a quality backpack, and a sleeping bag. We also offer equipment rental for items like trekking poles, down jackets, and sleeping bags.",
    },
    {
        id: 3,
        question: "How do you ensure safety during treks?",
        answer: "Safety is our top priority. All our guides are certified in wilderness first aid and carry emergency communication devices. We maintain strict altitude acclimatization schedules, monitor weather conditions, and have evacuation plans in place for every trek.",
    },
    {
        id: 4,
        question: "What is included in the trek package?",
        answer: "Our packages typically include airport transfers, accommodation, meals during the trek, experienced guides and porters, permits, and group equipment. Detailed inclusions and exclusions are listed on each trek page and booking confirmation.",
    },
    {
        id: 5,
        question: "Can I customize my trekking itinerary?",
        answer: "Absolutely! We specialize in custom itineraries. Whether you want to extend your trip, add rest days, combine multiple treks, or include cultural experiences, our team will work with you to create your perfect adventure.",
    },
    {
        id: 6,
        question: "What is your cancellation policy?",
        answer: "We understand plans can change. Cancellations made 60+ days before departure receive a full refund minus processing fees. 30-60 days receives 50% refund, and less than 30 days is non-refundable. We recommend travel insurance for all bookings.",
    },
];

export function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    useEffect(() => {
        // Use a small timeout to ensure the scroll happens after the browser's default scroll restoration
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "instant" });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section ref={containerRef} id="faq" className="relative py-24 sm:py-32 bg-brand-dark overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y: backgroundY }}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
                        alt="Himalayan Backdrop"
                        fill
                        className="object-cover opacity-70 grayscale-[0.2] contrast-110"
                        priority
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
                </motion.div>
            </div>

            <div className="container relative z-10 mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <SectionBadge dark icon={HelpCircle}>Support Center</SectionBadge>
                    <SectionHeading dark gradientText="Everything You Need to Know.">
                        Frequently Asked Questions
                    </SectionHeading>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-brand-white/60 font-medium"
                    >
                        Find answers to common questions about our trekking expeditions,
                        safety measures, and booking process.
                    </motion.p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-5">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/[0.04] hover:border-brand-light/30"
                        >
                            <button
                                onClick={() => toggleFAQ(item.id)}
                                className="w-full flex items-center justify-between p-8 text-left transition-colors cursor-pointer group"
                                aria-expanded={openId === item.id}
                            >
                                <span className="font-bold text-xl text-white pr-8 group-hover:text-brand-light transition-colors duration-300">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{
                                        rotate: openId === item.id ? 180 : 0,
                                        backgroundColor: openId === item.id ? "rgba(var(--brand-light-rgb), 0.2)" : "rgba(255, 255, 255, 0.05)"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 p-3 rounded-2xl text-brand-light shadow-inner"
                                >
                                    {openId === item.id ? (
                                        <Minus className="h-6 w-6" />
                                    ) : (
                                        <Plus className="h-6 w-6" />
                                    )}
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8">
                                            <div className="h-px w-12 bg-brand-light/30 mb-6" />
                                            <p className="text-brand-white/50 text-base leading-relaxed font-medium">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
