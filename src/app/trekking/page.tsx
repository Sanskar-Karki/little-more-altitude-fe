"use client";

import { motion } from "framer-motion";
import { Trekking } from "@/components/sections/Trekking";
import { Mountain, Compass, MapPin, Wind, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TrekkingPage() {
    return (
        <main className="min-h-screen bg-brand-white">
            <section className="relative overflow-hidden bg-brand-dark">
                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-20">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:flex items-center gap-8 text-white/20 font-black text-sm uppercase tracking-[0.5em] origin-right -rotate-90 translate-x-12"
                        >
                            <span>Est. 2012</span>
                            <div className="w-24 h-px bg-white/10" />
                            <span>Nepal Himalayas</span>
                        </motion.div>
                    </div>
                </div>

                {/* Abstract decorative element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(180,150,130,0.08)_0%,transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-brand-white rounded-t-[6rem] z-10" />
            </section>

            <div className="relative z-20 -mt-16">
                <Trekking background="white" autoFocusSearch />
            </div>


        </main>
    );
}
