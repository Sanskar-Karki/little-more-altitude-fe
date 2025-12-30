"use client";

import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-brand-light font-semibold tracking-wider uppercase">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Not Just a Trek,<br /> It's a <span className="text-brand-light">Transformation.</span>
                            </h2>
                            <p className="text-brand-white/70 text-lg leading-relaxed">
                                At Little More Altitude, we believe that the mountains are not just a destination,
                                but a pathway to self-discovery. Founded by a team of passionate mountaineers,
                                we specialize in crafting bespoke trekking experiences that challenge your limits
                                and expand your horizons.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-brand-medium/30 text-brand-light">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Mission</h4>
                                    <p className="text-sm text-brand-white/60">To make the Himalayas accessible to dreamers worldwide.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-brand-medium/30 text-brand-light">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">Excellence</h4>
                                    <p className="text-sm text-brand-white/60">Certified guides and top-tier safety standards.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1526330084361-b84497e59678?q=80&w=800"
                                alt="Trekking group"
                                className="rounded-2xl object-cover h-64 w-full translate-y-8 shadow-2xl"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1518081461904-9d8f136351c2?q=80&w=800"
                                alt="Solo climber"
                                className="rounded-2xl object-cover h-64 w-full shadow-2xl"
                            />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-medium/20 blur-3xl rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
