"use client";

import { motion } from "framer-motion";
import { Mountain } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-dark px-4 overflow-hidden">
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Atmospheric Background Silhouettes */}
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 0.1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-[120%] h-[50%] bg-white/5 rounded-t-[100%] blur-[100px]"
                />
            </div>

            {/* Glowing Orbs for atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-light/10 rounded-full blur-[120px] z-0" />
            
            <div className="relative z-10 flex flex-col items-center gap-10">
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: [0.7, 1, 0.7],
                        scale: [0.98, 1, 0.98]
                    }}
                    transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                    }}
                    className="relative"
                >
                    <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-brand-light/30 blur-3xl rounded-full opacity-30" />
                    <Mountain className="w-24 h-24 md:w-32 md:h-32 text-brand-light relative" strokeWidth={1} />
                </motion.div>

                {/* Text Loader */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-[0.4em] pl-[0.4em]">
                            LITTLE <span className="text-brand-light">MORE</span> ALTITUDE
                        </h2>
                    </motion.div>
                    
                    {/* Progress Bar Container */}
                    <div className="w-56 h-[1.5px] bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div 
                            className="absolute inset-y-0 left-0 bg-brand-light shadow-[0_0_10px_rgba(216,196,182,0.8)]"
                            animate={{ 
                                x: ["-100%", "150%"] 
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ width: "40%" }}
                        />
                    </div>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[9px] text-brand-light/50 uppercase tracking-[0.6em] font-black mt-2 pl-[0.6em]"
                    >
                        Descending into thin air...
                    </motion.p>
                </div>
            </div>

            {/* Bottom Corner Accent */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 text-[8px] text-white uppercase tracking-[0.5em] font-bold"
            >
                Himalayan Heritage • Professional Safety
            </motion.div>
        </div>
    );
}
