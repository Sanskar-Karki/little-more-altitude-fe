"use client";

import { ContactSection } from "@/components/sections/ContactSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const yCenter = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <main ref={containerRef} className="min-h-screen bg-brand-white overflow-hidden relative">
            {/* Subtle Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="relative pt-24 lg:pt-32">
                {/* Blur gradient orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        style={{
                            background: "radial-gradient(circle at 50% 50%, #213555, #3E5879, #21355533)",
                            y: yLeft
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 z-0"
                    />
                    <motion.div
                        style={{
                            background: "radial-gradient(circle at 50% 50%, #3E5879, #213555, #3E587922)",
                            y: yRight
                        }}
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-60 -right-32 w-[700px] h-[700px] rounded-full blur-[120px] opacity-35 z-0"
                    />
                    <motion.div
                        style={{
                            background: "radial-gradient(circle, #21355522, #3E587911)",
                            y: yCenter
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[90px] opacity-20 z-0"
                    />
                </div>

                <div className="relative z-10">
                    <ContactSection />
                </div>
            </div>
        </main>
    );
}
