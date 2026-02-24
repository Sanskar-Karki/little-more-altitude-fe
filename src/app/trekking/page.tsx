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
                <Trekking background="white" />
            </div>

            {/* Trekking Philosophy */}
            <section className="py-32 bg-brand-white">
                <div className="container mx-auto px-8 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="relative h-[600px] rounded-[4rem] overflow-hidden group shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                                alt="Philosophy"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20" />
                        </div>
                        <div className="flex flex-col justify-center space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter">
                                    THE SLOW <br />
                                    <span className="text-brand-medium">JOURNEY.</span>
                                </h2>
                                <p className="text-brand-dark/60 text-lg leading-relaxed">
                                    We believe trekking isn't just about the destination, but the rhythm of the path.
                                    Our itineraries are designed with generous acclimatization and hand-picked local teahouses.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "Local Impact", desc: "Supporting mountain communities directly through fair employment." },
                                    { title: "Expert Guides", desc: "Native leaders with decades of trail wisdom." },
                                    { title: "Safety Protocol", desc: "Oxygen and medical kits on every high-altitude pass." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-medium/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-brand-medium" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-brand-dark text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                                            <p className="text-brand-dark/50 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 bg-brand-dark text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-brand-medium transition-colors shadow-2xl self-start mt-8"
                            >
                                Plan Your Trek <ArrowRight size={16} className="inline ml-2" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
