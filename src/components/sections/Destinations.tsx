"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import type { Destination } from "@/types";

const destinations: Destination[] = [
    {
        id: 1,
        name: "Everest Base Camp",
        location: "Nepal",
        duration: "14 Days",
        difficulty: "Challenging",
        rating: 4.9,
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Annapurna Circuit",
        location: "Nepal",
        duration: "18 Days",
        difficulty: "Moderate",
        rating: 4.8,
        price: "$1,999",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Torres del Paine",
        location: "Chile",
        duration: "8 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$2,299",
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Mont Blanc Circuit",
        location: "France",
        duration: "11 Days",
        difficulty: "Challenging",
        rating: 4.7,
        price: "$2,799",
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Kilimanjaro Summit",
        location: "Tanzania",
        duration: "7 Days",
        difficulty: "Challenging",
        rating: 4.8,
        price: "$2,199",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50b0?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Inca Trail to Machu Picchu",
        location: "Peru",
        duration: "4 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$1,599",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    },
];

export function Destinations() {
    return (
        <section id="destinations" className="py-24 bg-brand-dark">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-light/20 text-brand-light font-medium text-sm mb-6 uppercase tracking-wider">
                        Popular Destinations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Explore Our Top <span className="text-brand-light">Adventures</span>
                    </h2>
                    <p className="text-lg text-brand-white/70">
                        Discover handpicked trekking experiences across the world's most
                        spectacular mountain ranges.
                    </p>
                </motion.div>

                {/* Destinations Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group rounded-2xl overflow-hidden bg-brand-medium/20 border border-brand-light/10 shadow-lg hover:shadow-2xl transition-all"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-sm font-semibold">
                                    {destination.price}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                                    <Star className="h-4 w-4 fill-brand-light text-brand-light" />
                                    <span className="font-medium">{destination.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-xl text-white mb-2">
                                    {destination.name}
                                </h3>
                                <div className="flex items-center gap-2 text-brand-white/60 text-sm mb-3">
                                    <MapPin className="h-4 w-4" />
                                    <span>{destination.location}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2 text-brand-white/60">
                                        <Calendar className="h-4 w-4" />
                                        <span>{destination.duration}</span>
                                    </div>
                                    <span className="px-2 py-1 rounded-md bg-brand-light/20 text-brand-light font-medium text-xs">
                                        {destination.difficulty}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-brand-light text-brand-dark font-bold rounded-full hover:bg-brand-white transition-colors shadow-lg"
                    >
                        View All Destinations
                        <ArrowRight className="h-5 w-5" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
