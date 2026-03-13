"use client";

import { motion } from "framer-motion";
import { useEffect, useState, use } from "react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import {
    Mountain,
    Clock,
    Calendar,
    CheckCircle2,
    XCircle,
    MapPin,
    ArrowRight,
    Wind,
    Sun,
    Bird,
    Navigation,
    Activity,
    Loader2
} from "lucide-react";
import Image from "next/image";
import { getTrekBySlug, getStrapiMedia } from "@/lib/strapi";
import Link from "next/link";

export default function DynamicTrekPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [trek, setTrek] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!loading) {
            window.scrollTo(0, 0);
        }
    }, [loading]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTrekBySlug(slug);
                if (!data) {
                    setError("Trek not found");
                } else {
                    setTrek(data);
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load trek details");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 text-brand-light animate-spin mx-auto" />
                    <p className="text-white/60 font-black uppercase tracking-widest text-sm">Scaling the heights...</p>
                </div>
            </div>
        );
    }

    if (error || !trek) {
        return (
            <div className="min-h-screen bg-brand-dark flex items-center justify-center p-8">
                <div className="text-center space-y-8 max-w-md">
                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                        <Mountain className="text-white/20" size={48} />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-white tracking-tighter uppercase">{error || "Trek Not Found"}</h1>
                        <p className="text-white/40 font-medium">The trail you're looking for seems to be hidden in the mist.</p>
                    </div>
                    <Link href="/trekking" className="inline-block px-8 py-4 bg-brand-light text-brand-dark rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                        Back to All Treks
                    </Link>
                </div>
            </div>
        );
    }

    // Helper to render blocks (simplified)
    const renderBlocks = (blocks: any) => {
        if (!blocks) return null;
        return blocks.map((block: any, index: number) => {
            if (block.type === 'paragraph') {
                return <p key={index}>{block.children?.map((c: any) => c.text).join('')}</p>;
            }
            return null;
        });
    };

    return (
        <main className="min-h-screen bg-brand-white text-brand-dark overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-brand-dark">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={getStrapiMedia(trek.heroImage?.url) || "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=2000&q=90"}
                        alt={trek.name}
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent hidden lg:block" />
                </motion.div>

                <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:col-span-12 xl:col-span-8 space-y-8"
                        >
                            <div className="space-y-4">
                                <SectionBadge className="text-brand-light backdrop-blur-md bg-white/10 border-white/20">
                                    {trek.region || "Himalayas"}
                                </SectionBadge>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                                    {trek.name.split(' ').map((word: string, i: number) => (
                                        <span key={i}>
                                            {i === trek.name.split(' ').length - 1 ? (
                                                <span className="text-brand-light">{word}</span>
                                            ) : (
                                                <>{word} <br /></>
                                            )}
                                        </span>
                                    ))}
                                </h1>
                            </div>

                            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                                {trek.tagline}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3"
                                >
                                    <Mountain className="text-brand-light" size={18} />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">{trek.maxAltitude}</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3"
                                >
                                    <Sun className="text-amber-400" size={18} />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">{trek.bestSeason}</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                        <div className="w-1 h-2 bg-brand-light rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Quick Facts Bar */}
            <section className="relative z-20 -mt-24 md:-mt-20">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="bg-brand-dark rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/5">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-white/5 lg:divide-y-0 border-white/5">
                            {[
                                { label: "Max Altitude", value: trek.maxAltitude ? `${trek.maxAltitude.toLocaleString()}m` : "N/A", icon: Mountain },
                                { label: "Best Season", value: trek.bestSeason || "N/A", icon: Sun },
                                { label: "Duration", value: trek.duration || "N/A", icon: Clock },
                                { label: "Daily Activity", value: trek.dailyActivity || "N/A", icon: Activity },
                                { label: "Difficulty", value: trek.difficulty || "N/A", icon: Navigation },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="px-8 py-8 lg:py-10 flex flex-col items-center text-center space-y-4 hover:bg-white/[0.02] transition-colors group"
                                >
                                    <div className="flex items-center justify-center gap-3 text-brand-light/30 group-hover:text-brand-light/50 transition-colors">
                                        <stat.icon size={16} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</span>
                                    </div>
                                    <p className="text-xl font-black text-white tracking-tight leading-none">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <Section id="overview" background="white" className="pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <SectionBadge>Overview</SectionBadge>
                            <SectionHeading dark={false} gradientText="Experience.">
                                The Ultimate
                            </SectionHeading>
                            <div className="space-y-6 text-brand-medium/80 text-lg leading-relaxed font-medium">
                                {renderBlocks(trek.overviewText)}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-medium/10 flex items-center justify-center shrink-0">
                                    <Bird className="text-brand-medium" />
                                </div>
                                <p className="text-sm font-bold opacity-60">Spot rare Himalayan bird species in lush forests.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-medium/10 flex items-center justify-center shrink-0">
                                    <Wind className="text-brand-medium" />
                                </div>
                                <p className="text-sm font-bold opacity-60">Experience authentic culture in traditional villages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
                        <Image
                            src={getStrapiMedia(trek.overviewImage?.url) || "https://images.unsplash.com/photo-1682760345059-8d1aa5cfcb50?q=80&w=687&auto=format&fit=crop"}
                            alt="The Trail"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                </div>
            </Section>

            {/* Itinerary Section */}
            {trek.itinerary && trek.itinerary.length > 0 && (
                <div className="relative my-32">
                    <div className="absolute top-0 left-0 w-full h-20 md:h-32 -translate-y-[99%] z-10 pointer-events-none">
                        <svg className="w-full h-full fill-brand-dark" viewBox="0 0 1440 120" preserveAspectRatio="none">
                            <path d="M0,120 L0,90 L120,110 L250,20 L380,100 L500,0 L650,110 L800,40 L950,105 L1100,5 L1250,115 L1440,30 L1440,120 Z"></path>
                        </svg>
                    </div>

                    <Section id="itinerary" background="dark" className="py-20 md:py-32">
                        <div className="max-w-7xl mx-auto space-y-16">
                            <div className="text-center space-y-4">
                                <SectionBadge dark>The Journey</SectionBadge>
                                <SectionHeading dark gradientText="Day by Day.">
                                    Detailed Itinerary
                                </SectionHeading>
                                <p className="text-brand-white/50 text-base max-w-2xl mx-auto">
                                    Experience every moment of your adventure through the Himalayas
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {trek.itinerary.map((day: any, idx: number) => {
                                    const dayNum = day.dayNumber || day.day || (idx + 1);
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.8,
                                                delay: idx * 0.1,
                                                ease: [0.21, 0.47, 0.32, 0.98]
                                            }}
                                            className="group relative"
                                        >
                                            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 pt-12 transition-all duration-700 hover:bg-white/[0.06] hover:border-brand-light/30 hover:shadow-2xl hover:shadow-brand-light/5">
                                                <div className="absolute top-10 right-4 -translate-y-1/2">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-brand-light blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                                        <div className="relative bg-gradient-to-br from-brand-light to-brand-medium px-6 py-2 rounded-full border border-white/20 shadow-xl transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                                                            <span className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] block leading-none mb-1 opacity-70">Day</span>
                                                            <span className="text-2xl font-black text-brand-dark leading-none">
                                                                {dayNum < 10 ? `0${dayNum}` : dayNum}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="relative z-10 space-y-6">
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-px w-8 bg-brand-light/30 transition-all duration-700 group-hover:w-12 group-hover:bg-brand-light" />
                                                            {day.location && (
                                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light/10 border border-brand-light/10">
                                                                    <MapPin size={10} className="text-brand-light" />
                                                                    <span className="text-brand-light text-[14px] font-black uppercase tracking-widest">{day.location}</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-brand-light transition-colors duration-500">
                                                            {day.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-brand-white/50 text-base leading-relaxed font-medium transition-colors duration-500 group-hover:text-brand-white/80">
                                                        {day.description}
                                                    </p>
                                                </div>
                                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-light to-brand-medium w-0 transition-all duration-1000 group-hover:w-full" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </Section>
                    <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 translate-y-[99%] z-10 rotate-180 pointer-events-none">
                        <svg className="w-full h-full fill-brand-dark" viewBox="0 0 1440 120" preserveAspectRatio="none">
                            <path d="M0,120 L0,85 L150,115 L300,10 L450,100 L600,35 L750,110 L900,5 L1050,115 L1200,45 L1350,105 L1440,20 L1440,120 Z"></path>
                        </svg>
                    </div>
                </div>
            )}

            {/* Includes/Excludes */}
            <Section id="details" background="white" className="py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12 p-12 rounded-[3.5rem] bg-green-500/5 border border-brand-dark/10"
                    >
                        <div className="space-y-4">
                            <SectionBadge>Package</SectionBadge>
                            <h3 className="text-4xl font-black text-brand-dark tracking-tighter">
                                Trip <span className="text-green-600">Includes.</span>
                            </h3>
                        </div>
                        <ul className="space-y-6">
                            {trek.includes?.map((item: any, i: number) => (
                                <li key={i} className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-brand-medium/70 font-medium">{item.item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12 p-12 rounded-[4rem] bg-red-500/5 border border-red-500/10"
                    >
                        <div className="space-y-4">
                            <SectionBadge>Information</SectionBadge>
                            <h3 className="text-4xl font-black text-brand-dark tracking-tighter">
                                Trip <span className="text-red-500">Excludes.</span>
                            </h3>
                        </div>
                        <ul className="space-y-6">
                            {trek.excludes?.map((item: any, i: number) => (
                                <li key={i} className="flex gap-4">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                    <span className="text-brand-medium/70 font-medium">{item.item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* Call to Action */}
            <section className="py-32 bg-brand-dark relative overflow-hidden">
                <div className="container mx-auto px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                            READY TO TOUCH <br />
                            <span className="text-brand-light">THE SKY?</span>
                        </h2>
                        <button className="px-12 py-6 bg-brand-light text-brand-dark rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto">
                            Book This Adventure <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
                <Mountain className="absolute bottom-0 right-0 w-[60%] h-[60%] text-white/[0.02] -z-0 translate-y-20 translate-x-20" />
            </section>
        </main>
    );
}
