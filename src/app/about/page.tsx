"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import { Mountain, Heart, Compass, Shield, Users, Camera, MapPin, Award, ArrowRight, ChevronDown, CheckCircle2, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import pembaImg from "./pemba/pemba.jpg";
import tashiImg from "./tashi/tashi.jpeg";
import pemaImg from "./pema/pema.jpg";

const FOUNDERS = [
    {
        name: "Pemba N. Sherpa",
        role: "Visionary Founder & Director",
        bio: "High altitude filmmaker, 2x Kilimanjaro summiteer, born and raised in the mountains of Solu Khumbu.",
        image: pembaImg,
        href: "/about/pemba"
    },
    {
        name: "Ngima Tashi Sherpa",
        role: "Director & Certified Guide",
        bio: "12+ years of experience across Nepal’s most challenging routes. Guided with heart and Sherpa spirit.",
        image: tashiImg,
        href: "/about/tashi"
    },
    {
        name: "Pema Thilen Sherpa",
        role: "Director & US Army Reserve Soldier",
        bio: "Himalayan Sherpa & U.S Army Reserve Soldier.Combining deep-rooted mountain wisdom with military-grade discipline & safety standards.",
        image: pemaImg,
        href: "/about/pema"
    }
];

const WHY_US_FEATURES = [
    {
        id: "leadership",
        title: "Unparalleled, Founder-Led Leadership",
        icon: Users,
        description: "Your trek is led by the founders themselves—Pemba N. Sherpa and Ngima Tashi Sherpa, professional, certified trekking guides born and raised on the Himalayan trails.",
        elaborated: "Pemba is also a high-altitude filmmaker, while Tashi brings deep knowledge of inner Himalayan culture and traditions. Together, we have trekked across and completed every major trekking region in Nepal, offering leadership rooted in firsthand experience, authenticity, and care."
    },
    {
        id: "safety",
        title: "Safety-First, Client-Focused Approach",
        icon: Shield,
        description: "With years of high-altitude guiding experience, your safety and well-being are our highest priority.",
        elaborated: "We care deeply about every client, providing personalized attention, thoughtful pacing, and meticulous planning so you feel supported at every step. We monitor health and altitude adjustment continuously."
    },
    {
        id: "tailored",
        title: "Tailored Treks for Every Kind of Explorer",
        icon: MapPin,
        description: "Whether you’re seeking the camaraderie of a group adventure, the intimacy of a private trek, or the focus of a true 1:1 journey, we cater to it all.",
        elaborated: "With personal guidance and close attention to detail, every trek is tailored to create a truly unforgettable experience that matches your physical ability and personal goals."
    },
    {
        id: "ethical",
        title: "Ethical, Responsible & Transparent",
        icon: CheckCircle2,
        description: "We practice responsible tourism with strong porter welfare, fair wages, proper equipment, and insurance.",
        elaborated: "Our commitment extends to environmental care and clear, transparent pricing with no hidden costs. We believe the mountains belong to everyone, and we protect them for future generations."
    },
    {
        id: "giving-back",
        title: "Trek With Purpose — Giving Back",
        icon: Globe,
        description: "To give back to the mountains and the people who make these journeys possible, we donate 10% of our profits through the Peaks for People Foundation (PFP).",
        elaborated: "These contributions support needy communities beyond major touristic areas, helping promote sustainable tourism and long-term community development where it is needed most."
    }
];

// Topographic Line SVG Component
const TopographicBackground = ({ y }: { y: any }) => (
    <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0,500 Q250,400 500,500 T1000,500 M0,600 Q250,500 500,600 T1000,600 M0,700 Q250,600 500,700 T1000,700 M0,400 Q250,300 500,400 T1000,400 M0,300 Q250,200 500,300 T1000,300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-dark"
            />
            <path
                d="M100,0 Q200,250 100,500 T100,1000 M200,0 Q300,250 200,500 T200,1000 M300,0 Q400,250 300,500 T300,1000"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-brand-dark"
                opacity="0.5"
            />
        </svg>
    </motion.div>
);

export default function AboutPage() {
    const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax Transforms
    const topoY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

    // Vision section parallax
    const galleryCard1Y = useTransform(scrollYProgress, [0.1, 0.4], [30, -30]);
    const galleryCard2Y = useTransform(scrollYProgress, [0.1, 0.4], [-20, 20]);
    const galleryCard3Y = useTransform(scrollYProgress, [0.1, 0.4], [60, -20]);

    return (
        <main ref={containerRef} className="min-h-screen bg-brand-white overflow-hidden relative">

            {/* Content Container */}
            <div className="relative z-10">

                {/* === SHARED BACKGROUND WRAPPER: Heritage + Founders === */}
                <div className="relative overflow-hidden">
                    {/* Shared abc1.jpg background, blended with white */}
                    <div className="absolute inset-0 pointer-events-none border-b border-brand-light/20">
                        <Image
                            src="/images/Trekking/Abc/abc1.jpg"
                            alt="Himalayas"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* White fade: heavy on left, lighter on right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
                        {/* Top and bottom seam blends */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
                    </div>

                    {/* === 1. ABOUT US & VISION === */}
                    <section className="relative mt-24 md:mt-32 lg:mt-52">
                        <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                                {/* Left: Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-6 md:space-y-8 mt-6 md:mt-10"
                                >
                                    <div className="space-y-4">
                                        <SectionBadge icon={Mountain}>Rooted in Sherpa Heritage</SectionBadge>
                                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] md:leading-[0.9] text-brand-dark tracking-tighter">
                                            Go Higher. <br />
                                            <span className="text-brand-medium">Live Deeper.</span>
                                        </h1>
                                    </div>
                                    <p className="text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                        A Little More Altitude is your trusted partner for unparalleled trekking across Nepal, from Everest Base Camp to remote Himalayan trails.
                                    </p>
                                    <div className="space-y-5 md:space-y-6 text-brand-dark/60 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-brand-medium/40 pl-5 md:pl-6">
                                        <p>
                                            Founded on the firsthand high-altitude experience of lifelong mountain companions <span className="text-brand-dark font-bold">Pemba N. Sherpa</span>, <span className="text-brand-dark font-bold">Ngima Tashi Sherpa</span>, and <span className="text-brand-dark font-bold">Pema Thilen Sherpa</span>—born and raised on the Himalayan trails—we deliver safe, authentic, and perspective-shifting trekking adventures that take you beyond breathtaking landscapes—toward deeper connection, purpose, and growth.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Right: Collage Images with Parallax */}
                                <div className="relative h-[600px] md:h-[800px] hidden lg:block overflow-visible">
                                    <motion.div
                                        style={{ y: galleryCard1Y }}
                                        className="absolute top-[-20px] right-0 w-[40%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-20"
                                    >
                                        <Image src="/images/Trekking/Abc/abc3.jpg" alt="Mountain Expedition" fill className="object-cover" />
                                    </motion.div>
                                    <motion.div
                                        style={{ y: galleryCard2Y }}
                                        className="absolute top-[20%] left-20 w-[45%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10"
                                    >
                                        <Image src="/images/Trekking/Abc/abc2.jpg" alt="Founder guiding" fill className="object-cover" />
                                    </motion.div>
                                    <motion.div
                                        style={{ y: galleryCard3Y }}
                                        className="absolute top-[280px] right-[0%] w-[40%] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-30"
                                    >
                                        <Image src="/images/Trekking/Abc/abc5.jpg" alt="Cultural connection" fill className="object-cover" />
                                    </motion.div>
                                </div>


                            </div>
                        </div>

                    </section>



                    {/* === 2. MEET THE FOUNDERS === */}
                    <div id="founders" className="relative pb-24">
                        <div className="container mx-auto px-6 md:px-8 text-center mb-12 md:mb-16 relative z-10">
                            <SectionBadge icon={Users}><p className="text-[14px]">Our Team</p></SectionBadge>
                            <p className="text-brand-dark text-lg md:text-xl lg:pr-12 mx-auto mt-6 text-center max-w-3xl px-4 md:px-8" >
                                "Our vision is simple but bold: to share the best experiences we’ve gained from our own journeys, guiding trekkers not just across trails, but into the soul of the Himalayas itself."
                            </p>
                        </div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-8 pb-12">
                            {FOUNDERS.map((founder, index) => (
                                <Link key={founder.name} href={founder.href}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: index * 0.15 }}
                                        whileHover={{ y: -20, scale: 1.02 }}
                                        className="group relative bg-white rounded-[3.5rem] overflow-hidden border border-brand-light/20 shadow-2xl transition-all duration-700 cursor-pointer"
                                    >
                                        <div className="relative aspect-[4/5]">
                                            <Image
                                                src={founder.image}
                                                alt={founder.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80" />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white z-10">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/20 border border-brand-light/30 mb-3 md:mb-4">
                                                    <span className="text-brand-light font-black text-[9px] md:text-[10px] uppercase tracking-widest">{founder.role}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-3 md:mb-4">{founder.name}</h3>
                                                <p className="text-white/70 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">{founder.bio}</p>
                                                <div className="mt-6 md:mt-8 flex items-center gap-2 md:gap-3 text-brand-light font-black text-[10px] md:text-xs uppercase tracking-widest group-hover:gap-5 transition-all duration-500">
                                                    Full Story
                                                    <ArrowRight size={14} className="md:w-4 md:h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA strip */}
                        <div className="text-center pb-24 px-8 pt-10">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 rounded-[2rem] bg-brand-dark text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-800/80 transition-all shadow-3xl flex items-center gap-4"
                                >
                                    Join Our Next Adventure
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
