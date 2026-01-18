"use client";

import { motion } from "framer-motion";
import { Destinations } from "@/components/sections/Destinations";
import { Mountain, Compass, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function DestinationsPage() {
    return (
        <main className="min-h-screen bg-brand-white">
            {/* Minimalist Premium Hero for White Mode */}
            <section className="relative pt-35 overflow-hidden bg-brand-dark">

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-dark" />
            </section>

            {/* Destinations Grid Section - Already has white background and decorative elements */}
            <div className="-mt-16 relative z-20">
                <Destinations background="white" />
            </div>

            {/* Bottom CTA / Info */}
            <section className="py-24 bg-brand-white border-t border-brand-light/10">
                <div className="container mx-auto px-8 md:px-20 lg:px-32 text-center">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <Mountain className="mx-auto text-brand-light/40" size={48} />
                        <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
                            Can't find your <br />
                            <span className="text-brand-medium">dream summit?</span>
                        </h2>
                        <p className="text-brand-dark/60 text-lg">
                            We specialize in crafting bespoke, private expeditions tailored to your experience level and ambitions. Contact our expert guides today.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-brand-dark text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-medium transition-colors shadow-2xl"
                        >
                            Request Custom Itinerary
                        </motion.button>
                    </div>
                </div>
            </section>
        </main>
    );
}
