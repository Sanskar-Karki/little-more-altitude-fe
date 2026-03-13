"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
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
        <section id="faq" className="py-12 sm:py-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-brand-light">Questions</span>
                    </h2>
                    <p className="text-lg text-brand-white/70">
                        Find answers to common questions about our trekking expeditions,
                        safety measures, and booking process.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-xl overflow-hidden bg-brand-medium/20 border border-brand-light/10 shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(item.id)}
                                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-brand-medium/30 cursor-pointer"
                                aria-expanded={openId === item.id}
                            >
                                <span className="font-semibold text-lg text-white pr-8">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 p-2 rounded-lg bg-brand-light/10 text-brand-light"
                                >
                                    {openId === item.id ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-brand-white/70 leading-relaxed">
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
