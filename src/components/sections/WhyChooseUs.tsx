"use client";

import { Variants, motion } from "framer-motion";
import { Shield, Map, Compass } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";

const STATS = [
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Happy Trekkers", value: 2.5, suffix: "k" },
    { label: "Routes Explored", value: 40, suffix: "+" },
    { label: "Safety Rating", value: 100, suffix: "%" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export function WhyChooseUs() {
    return (
        <Section id="why-choose-us" background="dark">
            {/* Background decorative elements with floating animation */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-light/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-medium/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Visual Section - Staggered Grid with Parallax Entry */}
                <div className="relative order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 w-full">
                    <div className="relative grid grid-cols-12 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, x: 80, scale: 1 }}

                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="col-span-8 overflow-hidden rounded-[2.5rem] shadow-2xl border border-brand-light/10"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200&auto=format&fit=crop"
                                alt="Majestic Mountain"
                                className="aspect-[4/5] object-cover transition-transform duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 60, scale: 0.8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                            className="col-span-6 -mt-32 -ml-12 lg:-ml-24 z-10 overflow-hidden rounded-[2.5rem] shadow-2xl border border-brand-light/10 bg-brand-dark"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop"
                                alt="Trekkers in the wild"
                                className="aspect-square object-cover transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                    {/* Floating Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, x: 20, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-brand-light p-4 rounded-3xl shadow-2xl hidden xl:block"
                    >
                        <div className="flex items-center gap-4 text-brand-dark">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="p-3 bg-brand-dark rounded-2xl text-brand-light"
                            >
                                <Compass size={32} />
                            </motion.div>
                            <div>
                                <p className="font-extrabold text-2xl">
                                    <CountUp to={15} suffix="+" />
                                </p>
                                <p className="opacity-70 text-sm font-bold">Years of Adventure</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Content Section with Staggered Elements */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-10 order-1 lg:order-2"
                >
                    <div className="space-y-6">
                        <SectionBadge dark={true}>Why Choose Us</SectionBadge>

                        <SectionHeading gradientText="Altitude Difference.">
                            The Little More
                        </SectionHeading>

                        <motion.p
                            variants={itemVariants}
                            className="text-brand-white/80 text-xl leading-relaxed max-w-xl font-medium"
                        >
                            We provide more than just travel—we provide partners in your personal transformation
                            amidst the world's most breathtaking landscapes.
                        </motion.p>
                    </div>

                    {/* Key Pillars - Animated Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: Shield, title: "Unmatched Safety", desc: "Top-tier gear and medical-certified guides for every expedition." },
                            { icon: Map, title: "Expert Local Intel", desc: "Routes known only to locals, providing authentic cultural immersion." }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="group p-8 rounded-3xl bg-brand-white/[0.03] border border-brand-light/10 hover:border-brand-light/30 transition-all duration-500 hover:bg-brand-white/[0.05]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-light/10 text-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500">
                                    <pillar.icon size={28} />
                                </div>
                                <h4 className="text-white font-bold text-2xl mb-3">{pillar.title}</h4>
                                <p className="text-brand-white/60 text-base leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Animated Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-brand-light/10"
                    >
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="space-y-1"
                            >
                                <p className="text-4xl font-extrabold text-white tracking-tighter">
                                    <CountUp to={stat.value} suffix={stat.suffix} precision={stat.value % 1 !== 0 ? 1 : 0} />
                                </p>
                                <p className="text-brand-light/60 text-[10px] font-bold uppercase tracking-[0.15em] leading-tight">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
