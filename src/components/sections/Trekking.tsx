"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Destination } from "@/types";

const treks: Destination[] = [
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
        id: 7,
        name: "Mardi Himal",
        location: "Annapurna, Nepal",
        duration: "6 Days",
        difficulty: "Moderate",
        rating: 4.8,
        price: "$850",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1000&q=90",
        slug: "mardi-himal"
    },
    {
        id: 3,
        name: "Manaslu Circuit",
        location: "Gorkha, Nepal",
        duration: "15 Days",
        difficulty: "Hard",
        rating: 4.9,
        price: "$2,199",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=82",
    },
    {
        id: 4,
        name: "Langtang Valley",
        location: "Rasua, Nepal",
        duration: "10 Days",
        difficulty: "Moderate",
        rating: 4.7,
        price: "$1,499",
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Gokyo Lakes",
        location: "Khumbu, Nepal",
        duration: "12 Days",
        difficulty: "Challenging",
        rating: 4.8,
        price: "$1,899",
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Upper Mustang",
        location: "Mustang, Nepal",
        duration: "14 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$2,599",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    },
];

function TrekCard({ trek, index }: { trek: Destination; index: number }) {
    return (
        <Link href={trek.slug ? `/trekking/${trek.slug}` : "#"}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-brand-dark/5 shadow-2xl transition-all duration-700 hover:cursor-pointer"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={trek.image}
                        alt={trek.name}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
                </div>


                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                    <div className="space-y-4 transform transition-transform duration-700 group-hover:-translate-y-4">
                        <div className="flex items-center gap-2 text-brand-light font-black text-[9px] uppercase tracking-[0.3em]">
                            <MapPin size={10} />
                            <span>{trek.location}</span>
                        </div>

                        <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">
                            {trek.name}
                        </h3>

                        <div className="flex items-center gap-6 text-brand-white/70 text-xs font-bold">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-brand-light" />
                                <span>{trek.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star size={14} className="text-brand-light fill-brand-light" />
                                <span className="text-white">{trek.rating}</span>
                            </div>
                        </div>

                        <div className="h-px bg-white/10 w-full" />

                        <div className="flex items-center justify-between pt-2">
                            <span className="text-[10px] text-white/50 uppercase font-black tracking-widest">{trek.difficulty}</span>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="bg-brand-light p-2 rounded-full text-brand-dark"
                            >
                                <ArrowRight size={16} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export function Trekking({ background = "white" }: { background?: "white" | "dark" }) {
    const isDark = background === "dark";

    return (
        <Section id="trekking" background={background} container={false} className="relative overflow-hidden py-32">
            {!isDark && (
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(180,150,130,0.05)_0%,transparent_70%)]" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_80%,rgba(180,150,130,0.05)_0%,transparent_70%)]" />
                </div>
            )}

            <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center my-14 space-y-6">
                    <SectionBadge dark={isDark}>The High Trails</SectionBadge>
                    <SectionHeading dark={isDark} gradientText="Step by Step.">
                        Curated Trekking
                    </SectionHeading>
                    <p className={`${isDark ? 'text-brand-white/40' : 'text-brand-dark/40'} text-xl max-w-2xl mx-auto font-medium`}>
                        From the sacred paths of Mustang to the legendary Everest trails, we bring you closer to the soul of the mountains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {treks.map((trek, index) => (
                        <TrekCard key={trek.id} trek={trek} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
