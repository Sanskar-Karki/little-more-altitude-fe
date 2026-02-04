"use client";

import { motion } from "framer-motion";
import { Mountain, ArrowLeft, Search, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-brand-dark flex items-center justify-center p-8 overflow-hidden relative">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
                    alt="Atmospheric Mountains"
                    fill
                    className="object-cover opacity-20 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
            </div>

            {/* Moving Blizzard Particles */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: Math.random() * 0.4,
                            x: Math.random() * 100 + "%",
                            y: -20
                        }}
                        animate={{
                            y: "120vh",
                            x: (Math.random() * 100 - 10) + "%"
                        }}
                        transition={{
                            duration: Math.random() * 8 + 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        className="absolute w-0.5 h-0.5 bg-white rounded-full blur-[1px]"
                    />
                ))}
            </div>

            <div className="container relative z-20 max-w-4xl border-l-[1px] border-white/10 pl-12 py-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-12"
                >
                    {/* Error Code */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-brand-light">
                            <Compass className="animate-spin-slow" size={24} />
                            <span className="text-[12px] font-black uppercase tracking-[0.5em]">System Status: Drifted</span>
                        </div>
                        <h1 className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-white/5 italic">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <div className="space-y-6 -mt-24 md:-mt-40 relative z-30">
                        <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.85]">
                            LOST IN THE <br />
                            <span className="text-brand-light not-italic">WHITEOUT.</span>
                        </h2>
                        <p className="text-brand-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                            The trail you're looking for has been buried in a storm.
                            Our team is currently establishing a new route.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-start gap-8 pt-8">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-12 py-6 bg-brand-light text-brand-dark rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-white transition-all shadow-2xl"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                Return to Base Camp
                            </motion.button>
                        </Link>

                        <div className="flex items-center gap-4 text-white/20">
                            <div className="w-12 h-px bg-white/20" />
                            <span className="text-[10px] font-black uppercase tracking-widest italic">Signal Lost at High Altitude</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
        </main>
    );
}
