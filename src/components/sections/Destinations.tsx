"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

function DestinationCard({ destination, index }: { destination: any; index: number }) {
    const { t } = useLanguage();
    
    // We need to match images by index since they are not in translations
    const images = [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    ];

    const rating = 4.7 + (index % 3) * 0.1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-brand-light/5 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-700 hover:cursor-pointer"
        >
            {/* Background Image with Enhanced Zoom and Pan */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={images[index] || images[0]}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-transparent opacity-50" />

                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_120%,rgba(216,196,182,0.15),transparent_70%)]" />
            </div>

            {/* Top Badges - Refined */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-2xl bg-brand-light/20 backdrop-blur-xl border border-brand-light/30 text-brand-light text-xs font-black uppercase tracking-widest shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                >
                    {destination.price}
                </motion.div>

                <AnimatePresence>
                    {rating > 4.8 && (
                        <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-tighter">
                            <Star size={10} className="text-brand-light fill-brand-light" />
                            <span>{t('destinations.eliteChoice')}</span>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Main Content Area */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="space-y-5 transform transition-transform duration-700 group-hover:-translate-y-6">
                    {/* Location Badge */}
                    <div className="flex items-center gap-2 text-brand-light/80 text-[10px] font-bold uppercase tracking-[0.25em]">
                        <span className="w-4 h-px bg-brand-light/40" />
                        <MapPin size={10} />
                        <span>{destination.location}</span>
                    </div>

                    {/* Title with Gradient Polish */}
                    <h3 className="text-3xl font-black text-white leading-none tracking-tight">
                        {destination.name}
                    </h3>

                    {/* Quick Stats Strip */}
                    <div className="flex items-center gap-5 text-brand-white/60 text-xs font-semibold">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-brand-light/60" />
                            <span>{destination.duration}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-brand-light/30" />
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={10}
                                        className={`${i < Math.floor(rating) ? 'text-brand-light fill-brand-light' : 'text-white/20'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-white font-bold">{rating.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Hover Reveal Details - Enhanced */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                        <div className="overflow-hidden">
                            <div className="pt-6 flex items-center justify-between border-t border-brand-light/10 mt-2">
                                <div className="space-y-1">
                                    <p className="text-[10px] text-brand-light/60 uppercase tracking-widest font-bold">{t('destinations.intensity')}</p>
                                    <p className="text-white text-xs font-black uppercase">{destination.difficulty}</p>
                                </div>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white text-brand-dark font-black text-[10px] uppercase tracking-widest hover:bg-brand-light transition-colors shadow-xl"
                                >
                                    {t('destinations.viewExpedition')}
                                    <ArrowRight size={14} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edge Shine Effect */}
            <div className="absolute inset-0 border-[1.5px] border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none rounded-[2.5rem]" />
        </motion.div>
    );
}

export function Destinations({ limit, background = "white" }: { limit?: number; background?: "white" | "dark" }) {
    const { t } = useLanguage();
    const destinations = t('destinations.list') as any[];
    const displayedDestinations = limit ? destinations.slice(0, limit) : destinations;
    const isDark = background === "dark";

    return (
        <Section id="destinations" background={background} container={false} className="relative overflow-hidden">
            {/* Sophisticated Background Elements */}
            {!isDark && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-brand-light/10 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow" />
                    <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-medium/5 blur-[140px] rounded-full mix-blend-multiply" />
                    <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-brand-light/10 blur-[100px] rounded-full mix-blend-multiply animate-pulse" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
                </div>
            )}

            {isDark && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 -left-48 w-72 h-72 bg-brand-light/5 blur-[100px] rounded-full" />
                </div>
            )}

            <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <SectionBadge dark={isDark}>{t('destinations.badge')}</SectionBadge>
                    <SectionHeading dark={isDark} gradientText={t('destinations.gradient')}>
                        {t('destinations.heading')}
                    </SectionHeading>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`${isDark ? 'text-brand-white/60' : 'text-brand-dark/60'} text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium`}
                    >
                        {t('destinations.description')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {displayedDestinations.map((destination, index) => (
                        <DestinationCard
                            key={index}
                            destination={destination}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <button className={`group relative px-10 py-5 bg-transparent border-2 ${isDark ? 'border-brand-light/30 text-white hover:border-brand-light' : 'border-brand-dark/10 text-brand-dark hover:border-brand-medium'} rounded-full text-lg font-bold overflow-hidden transition-all hover:cursor-pointer`}>
                        <span className="relative z-10 flex items-center gap-3">
                            {t('destinations.viewMore')}
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className={`absolute inset-0 ${isDark ? 'bg-brand-light/20' : 'bg-brand-medium/10'} translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0`} />
                    </button>
                    <p className={`mt-6 ${isDark ? 'text-brand-white/40' : 'text-brand-dark/40'} text-sm font-medium tracking-wide`}>
                        {t('destinations.customRoutes')}
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
