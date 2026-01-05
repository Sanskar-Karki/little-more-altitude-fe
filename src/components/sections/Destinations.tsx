"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import type { Destination } from "@/types";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const destinations: Destination[] = [
    {
        id: 1,
        name: "Everest Base Camp",
        location: "Solu-Khumbu, Nepal",
        duration: "14 Days",
        difficulty: "Challenging",
        rating: 4.9,
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Annapurna Circuit",
        location: "Gandaki, Nepal",
        duration: "18 Days",
        difficulty: "Moderate",
        rating: 4.8,
        price: "$1,999",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Torres del Paine",
        location: "Patagonia, Chile",
        duration: "8 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$2,299",
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Mont Blanc Circuit",
        location: "Chamonix, France",
        duration: "11 Days",
        difficulty: "Challenging",
        rating: 4.7,
        price: "$2,799",
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Kilimanjaro Summit",
        location: "Moshi, Tanzania",
        duration: "7 Days",
        difficulty: "Challenging",
        rating: 4.8,
        price: "$2,199",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Inca Trail",
        location: "Cusco, Peru",
        duration: "4 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$1,599",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    },
];

function DestinationCard({ destination, index }: { destination: Destination; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative h-[450px] rounded-[2rem]  overflow-hidden  border border-brand-light/10 shadow-2xl"
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* Badges */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <div className="px-4 py-1.5 rounded-full bg-brand-light/90 backdrop-blur-md text-brand-dark text-xs font-black uppercase tracking-widest shadow-lg">
                    {destination.price}
                </div>
                {destination.rating > 4.8 && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                        <TrendingUp size={14} className="text-brand-light" />
                        <span>Trending</span>
                    </div>
                )}
            </div>

            {/* Content Container - Slides up on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="space-y-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-brand-light/90 text-xs font-bold uppercase tracking-widest">
                            <MapPin size={12} />
                            <span>{destination.location}</span>
                        </div>
                        <h3 className="text-3xl font-black text-white leading-tight tracking-tight">
                            {destination.name}
                        </h3>
                    </div>

                    <div className="flex items-center gap-6 text-brand-white/70 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-brand-light" />
                            <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star size={16} className="text-brand-light fill-brand-light" />
                            <span>{destination.rating}</span>
                        </div>
                    </div>

                    {/* Hidden Description or Additional Info - Revealed on Hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <div className="pt-4 flex items-center justify-between border-t border-brand-light/10 mt-4">
                            <span className="px-3 py-1 rounded-lg bg-brand-light/10 border border-brand-light/20 text-brand-light text-[10px] font-bold uppercase tracking-widest">
                                {destination.difficulty}
                            </span>
                            <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                                Explore Details
                                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Glassmorphism Border Overlay */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none rounded-[2.5rem]" />
        </motion.div>
    );
}

export function Destinations() {
    return (
        <Section id="destinations" background="dark" container={false} className="relative overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute -top-24 -right-24 w-96 h-96 border border-brand-light/5 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -left-48 w-72 h-72 bg-brand-light/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <SectionBadge dark={true}>Curated Journeys</SectionBadge>
                    <SectionHeading gradientText="Your Next Summit.">
                        Explore Our World Class
                    </SectionHeading>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        From the soaring peaks of the Himalayas to the rugged paths of Patagonia,
                        every destination is hand-selected for its soul-stirring beauty.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {destinations.map((destination, index) => (
                        <DestinationCard
                            key={destination.id}
                            destination={destination}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <button className="group relative px-10 py-5 bg-transparent border-2 border-brand-light/30 text-white rounded-full text-lg font-bold overflow-hidden transition-all hover:border-brand-light">
                        <span className="relative z-10 flex items-center gap-3">
                            View More Expeditions
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-brand-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
                    </button>
                    <p className="mt-6 text-brand-white/40 text-sm font-medium tracking-wide">
                        Over 40+ custom routes available upon request
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
