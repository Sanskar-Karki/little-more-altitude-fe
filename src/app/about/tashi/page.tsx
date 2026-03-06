"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Award, ChevronLeft, Mountain, Mail, Linkedin, Instagram, Compass, Users, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MountainLine } from "@/components/ui/MountainLine";

export default function TashiDetailPage() {
    return (
        <main className="min-h-screen bg-brand-white">
            {/* Immersive Hero Section */}
            <div className="relative h-[40vh] w-full overflow-hidden bg-brand-dark">

                <div className="container mx-auto px-8 md:px-20 lg:px-32 h-full flex flex-col justify-end pb-28 relative z-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <SectionBadge dark={true}>Director & Operations Chief</SectionBadge>
                            <h1 className="text-xl md:text-4xl font-black text-white mt-2  tracking-tighter leading-[0.85]">
                                Ngima Tashi
                                <span className="text-brand-light pl-1">Sherpa</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block pb-4 text-right"
                        >
                            <p className="text-brand-white/60 text-lg md:text-xl font-medium max-w-6xl ml-auto">
                                "Service is not just about showing the way; it's about making the heart feel at home in the clouds."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Animated Mountain Line Overlay */}
                <MountainLine
                    className="absolute bottom-0 left-0 w-full h-32 text-brand-light/20"
                    color="var(--color-brand-light)"
                    duration={3}
                />
            </div>

            {/* Content Section with Negative Margin */}
            <section className="relative z-20 -mt-12">
                <div className="container mx-auto px-8 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

                        {/* Left Column: Visual & Stats Card */}
                        <div className="lg:col-span-4 pb-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="sticky top-32 space-y-8"
                            >
                                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group max-w-[340px] mx-auto lg:mx-0">
                                    <Image
                                        src="/tashi.jpg"
                                        alt="Ngima Tashi Sherpa"
                                        fill
                                        className="object-cover transition-all duration-1000 group-hover:scale-110"
                                        unoptimized
                                    />
                                    {/* Subtle Overlay on image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent opacity-60" />
                                </div>

                                <div className="grid grid-cols-2 gap-3 max-w-[340px] mx-auto lg:mx-0">
                                    <div className="p-6 rounded-[2rem] bg-brand-medium text-white flex flex-col justify-center items-center text-center shadow-2xl">
                                        <p className="text-3xl font-black text-brand-light tracking-tighter">12+</p>
                                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-70">Expeditions</p>
                                    </div>
                                    <div className="p-6 rounded-[2rem] bg-white border border-brand-light/20 flex flex-col justify-center items-center text-center shadow-lg">
                                        <p className="text-3xl font-black text-brand-dark tracking-tighter">100%</p>
                                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-medium/50">Safety</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Narrative Biography */}
                        <div className="lg:col-span-8 pt-12 lg:pt-24 space-y-16">
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-12 bg-brand-light" />
                                        <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">The Heart of Service</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
                                        Forge in Resilience, <br />
                                        <span className="text-brand-medium">Guided by Spirit.</span>
                                    </h2>
                                </div>

                                <div className="space-y-8 text-brand-dark/80 text-xl leading-[1.8] font-medium">
                                    <p className="first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-brand-medium">
                                        In the high valley of Kharikhola, Tashi Sherpa's journey was written in the dust of the mountain trails before he could even tie his boots. At just 13, he was already shouldering the physical and mental loads of high-altitude life, working as a porter during his school breaks to help his father.
                                    </p>
                                    <p>
                                        Life took a sharp turn when Tashi was 15. The untimely loss of his father left him as the sudden pillar of his family. He didn't just inherit a responsibility; he inherited a legacy. Tourism was the only door open, and he stepped through it with an unmatched level of determination. Every climb was for survival, but every step was for growth.
                                    </p>
                                    <p>
                                        Over 12 years, Tashi has climbed every step of the ladder—from porter to assistant guide, to leading some of the most complex treks in the Himalayas. This hard-won experience is what makes him a master of operations. He doesn't just know the maps; he knows the people, the teahouses, the hidden routes, and how to manage a team in the thin air where every decision counts.
                                    </p>
                                    <div className="bg-brand-medium border border-brand-light/30 p-10 rounded-[3rem] text-2xl font-black text-white leading-relaxed flex items-start gap-6 shadow-2xl">
                                        <div className="p-3 bg-brand-light/20 rounded-2xl">
                                            <Heart size={32} className="text-brand-light fill-brand-light" />
                                        </div>
                                        <span>"I guide with my heart because I know how much it means to feel safe when you are miles away from the rest of the world."</span>
                                    </div>
                                    <p>
                                        Tashi's philosophy is simple: #GuidedWithHeart. He leads with a quiet confidence that only comes from having walked every role on the mountain. For him, a successful trek isn't just about reaching a landmark; it's about the safety, well-being, and unforgettable memories of every single guest in his care.
                                    </p>
                                </div>
                            </div>

                            {/* Expertise Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-brand-light/20">
                                <div className="group p-8 rounded-[2rem] bg-white border border-brand-light/10 hover:border-brand-light transition-all shadow-sm hover:shadow-xl">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-light flex items-center justify-center mb-6 shadow-lg">
                                        <Compass size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark mb-2">Operations Master</h4>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">Perfect logistics and safety management across Nepal's most rugged and legendary routes.</p>
                                </div>
                                <div className="group p-8 rounded-[2rem] bg-white border border-brand-light/10 hover:border-brand-light transition-all shadow-sm hover:shadow-xl">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-medium text-brand-white flex items-center justify-center mb-6 shadow-lg">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-brand-dark mb-2">Cultural Liaison</h4>
                                    <p className="text-sm text-brand-dark/60 leading-relaxed">Connecting guests with the deep traditions and local communities of the high Himalayas.</p>
                                </div>
                            </div>

                            {/* Contact & Social Section */}
                            <div className="flex flex-wrap items-center gap-6 py-12">
                                <button className="px-12 py-5 rounded-full bg-brand-medium text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-dark transition-all shadow-2xl flex items-center gap-4 group">
                                    Plan with Tashi
                                    <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex gap-4">
                                    <Link href="#" className="p-5 rounded-full bg-brand-light/10 text-brand-dark border border-brand-light/20 hover:bg-brand-light hover:text-white transition-all">
                                        <Linkedin size={20} />
                                    </Link>
                                    <Link href="#" className="p-5 rounded-full bg-brand-light/10 text-brand-dark border border-brand-light/20 hover:bg-brand-light hover:text-white transition-all">
                                        <Instagram size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topographic Background Pattern Footer */}
            <div className="py-24 bg-brand-dark text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,196,182,0.05),transparent_70%)]" />
                <div className="container relative z-10 mx-auto px-8">
                    <Quote className="mx-auto text-brand-light/20 mb-10" size={64} />
                    <p className="text-3xl md:text-5xl font-black text-white max-w-4xl mx-auto leading-tight tracking-tight">
                        "The mountain only cares if you respect its rhythm. I guide to help you find that rhythm within yourself."
                    </p>
                </div>
            </div>
        </main>
    );
}
