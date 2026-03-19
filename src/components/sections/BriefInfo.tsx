"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mountain, Users, Calendar, Trophy } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const STATS = [
    { label: "Clients Guided", value: 150, suffix: "+", icon: Users },
    { label: "Years of Experience", value: 10, suffix: "+", icon: Calendar },
    { label: "Overall Success Rate", value: 97, suffix: "%", icon: Trophy },
];

export function BriefInfo() {
    return (
        <Section id="info" background="white" className="overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                {/* Company Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center mt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <SectionBadge>Our Legacy</SectionBadge>
                            <SectionHeading dark={false} gradientText="Experience.">
                                The Little More
                            </SectionHeading>
                        </div>

                        <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-brand-dark/10 border border-brand-dark/10 overflow-hidden group hover:bg-brand-dark/15 transition-all duration-500">
                            <Mountain className="absolute -right-8 -bottom-8 h-32 w-40 md:h-48 md:w-58 text-brand-dark/[0.03] -z-10 group-hover:scale-110 transition-transform duration-700" />
                            <p className="text-brand-medium/80 text-base md:text-lg leading-relaxed font-medium">
                                Founded on the firsthand high-altitude experience of lifelong mountain companions
                                <span className="text-brand-dark font-bold ml-1">Pemba N. Sherpa</span>,
                                <span className="text-brand-dark font-bold ml-1">Ngima Tashi Sherpa</span>, and
                                <span className="text-brand-dark font-bold ml-1">Pema Thilen Sherpa</span>, born and raised on the Himalayan trails,<br className="hidden md:block" /><br className="hidden md:block" />
                                <span className="text-brand-medium font-bold ml-1">A Little More Altitude</span> delivers safe, authentic, and perspective-shifting trekking adventures
                                that take you beyond breathtaking landscapes—toward deeper connection, purpose, and growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block aspect-video lg:aspect-[9/11] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group/img order-first lg:order-last"
                    >
                        <img
                            src="/images/HomePageImage/MardiHimal-walk.jpg"
                            alt="Mount Everest and Nuptse"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 pt-6 ">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center space-y-2 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-dark/5 text-brand-dark flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-light transition-all duration-500">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-4xl font-black text-brand-dark tracking-tighter">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </h4>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-medium/50">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
