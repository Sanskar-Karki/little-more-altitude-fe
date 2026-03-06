"use client";

import { Variants, motion } from "framer-motion";
import { Shield, Compass, Star, Heart, Leaf, Award, TrendingUp, Sparkles, Map, Mountain, Users, Calendar, Trophy } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

const STATS = [
    { label: "Clients Guided", value: 150, suffix: "+", icon: Users },
    { label: "Years of Experience", value: 10, suffix: "+", icon: Calendar },
    { label: "Overall Success Rate", value: 97, suffix: "%", icon: Trophy },
];

const REASONS = [
    {
        icon: Star,
        title: "Founder-Led Leadership",
        desc: "Your trek is led by Pemba, Tashi & Pema—professional guides born on Himalayan trails. We don't just organize; we lead.",
        size: "large",
        accent: "bg-amber-400"
    },
    {
        icon: Shield,
        title: "Safety First",
        desc: "Meticulous planning and personalized attention.",
        size: "small",
        accent: "bg-blue-400"
    },
    {
        icon: Compass,
        title: "Tailored Journeys",
        desc: "From private treks to 1:1 guidance.",
        size: "small",
        accent: "bg-purple-400"
    },
    {
        icon: Leaf,
        title: "Ethical Tourism",
        desc: "Fair wages, porter welfare, and environmental care.",
        size: "small",
        accent: "bg-emerald-400"
    },
    {
        icon: Heart,
        title: "Trek With Purpose",
        desc: "10% of profits support local communities.",
        size: "small",
        accent: "bg-rose-400"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export function WhyChooseUs() {
    return (
        <Section id="why-choose-us" background="white" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Immersive Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-light/10 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-medium/5 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT: Header & Bento Grid */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <SectionBadge>The Altitude Edge</SectionBadge>
                            <SectionHeading dark={false} gradientText="Above the Rest.">
                                Why We Stand
                            </SectionHeading>
                            <p className="text-brand-medium/70 text-lg max-w-2xl font-medium leading-relaxed">
                                Born in the mountains, raised on the trails. We combine deep local heritage with world-class safety protocols to give you a journey like no other.
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-6 gap-4"
                        >
                            {/* Feature 1: The Hero Card */}
                            <motion.div
                                variants={itemVariants}
                                className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-brand-dark p-10 text-white shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Mountain size={120} />
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-dark shadow-xl">
                                            <Star size={32} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tighter">
                                            FOUNDER-LED <br />
                                            <span className="text-brand-light uppercase text-xl tracking-[0.3em]">Leadership</span>
                                        </h3>
                                        <p className="text-white/60 text-lg max-w-md font-medium leading-relaxed">
                                            Lead by Pemba, Tashi & Pema—professional Himalayan guides. We carry the equipment, the knowledge, and the responsibility to get you there and back safely.
                                        </p>
                                    </div>
                                    <div className="pt-8 flex items-center gap-4">
                                        <div className="flex -space-x-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-brand-medium/20" />
                                            ))}
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-brand-light">Elite Guide Team</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Remaining Bento Items */}
                            {REASONS.slice(1).map((reason, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white border border-brand-light/20 p-8 hover:border-brand-light hover:shadow-xl transition-all duration-500"
                                >
                                    <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                        <reason.icon size={64} />
                                    </div>
                                    <div className="relative z-10 space-y-4">
                                        <div className={`w-12 h-12 rounded-xl ${reason.accent}/10 text-brand-dark flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <reason.icon size={24} />
                                        </div>
                                        <h4 className="text-brand-dark font-black tracking-tight leading-tight">{reason.title}</h4>
                                        <p className="text-brand-medium/60 text-xs font-medium leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Stats Card Integrated into Bento */}
                            <motion.div
                                variants={itemVariants}
                                className="md:col-span-2 bg-brand-light p-8 rounded-[2rem] flex flex-col justify-center items-center text-center group"
                            >
                                <Sparkles className="text-brand-dark/20 mb-4 group-hover:rotate-12 transition-transform" size={40} />
                                <p className="text-4xl font-black text-brand-dark tracking-tighter">100%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Incident Free</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Visual Collage (Immersive) */}
                    <div className="lg:col-span-12 xl:col-span-5 relative mt-12 lg:mt-0">
                        <div className="relative h-[600px] md:h-[700px] w-full max-w-lg mx-auto md:mx-0">

                            {/* Main Background Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200&auto=format&fit=crop"
                                    alt="Nepal Peaks"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors" />
                            </motion.div>

                            {/* Secondary Overlapping Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute bottom-10 left-0 w-3/5 h-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white z-20 group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop"
                                    alt="Trekkers"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Experience Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 -left-8 md:-left-12 z-30 bg-white p-6 rounded-3xl shadow-2xl border border-brand-light/30 backdrop-blur-xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-brand-dark rounded-2xl text-brand-light">
                                        <Map size={24} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-brand-dark leading-none">
                                            <CountUp to={40} suffix="+" />
                                        </p>
                                        <p className="text-[10px] font-bold uppercase text-brand-medium/50 tracking-widest">Active Routes</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-light/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-brand-light/10 rounded-full -z-10" />
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row - Ultra Modern */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 pt-12 border-t border-brand-light/20"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                        {STATS.map((stat, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-5 group">
                                <div className="p-4 rounded-2xl bg-brand-medium/5 text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-500 shadow-lg">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-center md:text-left">
                                    <h5 className="text-3xl font-black text-brand-dark tracking-tighter">
                                        <CountUp to={stat.value} suffix={stat.suffix} precision={stat.value % 1 !== 0 ? 1 : 0} />
                                    </h5>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-medium/40 leading-none mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
