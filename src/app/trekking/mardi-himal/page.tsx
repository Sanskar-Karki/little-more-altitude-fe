"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
    Mountain,
    Clock,
    Calendar,
    ChevronRight,
    CheckCircle2,
    XCircle,
    MapPin,
    ArrowRight,
    Wind,
    Sun,
    Bird,
    Navigation,
    Activity
} from "lucide-react";
import Image from "next/image";

const ITINERARY = [
    {
        day: 1,
        title: "Arrival in Kathmandu",
        location: "Kathmandu (1,400m)",
        desc: "Arrival in Kathmandu and shift to hotel. Take some time to rest and prepare for the journey ahead."
    },
    {
        day: 2,
        title: "Kathmandu to Pokhara",
        location: "Pokhara (822m)",
        desc: "A scenic drive through river valleys and rolling hills brings you to Pokhara, the gateway to the Annapurna region, where mountain views set the tone for the adventure ahead."
    },
    {
        day: 3,
        title: "Siddhing to Low Camp",
        location: "Low Camp (2,970m)",
        desc: "After a drive to Siddhing (1,700m), the trek begins through terraced farmland and dense forests, gradually climbing to Low Camp surrounded by peaceful mountain landscapes."
    },
    {
        day: 4,
        title: "Low Camp to High Camp",
        location: "High Camp (3,580m)",
        desc: "Today’s trek follows a ridge trail through rhododendron forests, opening up to breathtaking views of Machhapuchhre, Annapurna South, and the surrounding peaks as you reach High Camp."
    },
    {
        day: 5,
        title: "High Camp to Rest Camp",
        location: "Viewpoint (4,500m)",
        desc: "An early morning hike leads to the Mardi Himal Viewpoint for a spectacular sunrise over the Himalayas. After returning to High Camp for breakfast, the trail descends through alpine terrain to Rest Camp (2,600m)."
    },
    {
        day: 6,
        title: "Rest Camp to Pokhara",
        location: "Pokhara via Kalimati (1,800m)",
        desc: "The final day takes you through lush forests rich in birdlife, passing Forest Camp before reaching Kalimati, from where we drive back to Pokhara."
    },
    {
        day: 7,
        title: "Pokhara to Kathmandu",
        location: "Kathmandu",
        desc: "Scenic drive back from Pokhara to Kathmandu. Enjoy the changing landscapes one last time."
    },
    {
        day: 8,
        title: "Departure",
        location: "TIA Airport",
        desc: "Departure from Kathmandu to your home country. Carry back unforgettable Himalayan memories."
    }
];

const INCLUDES = [
    "International arrival and departure transfers in private vehicle.",
    "Kathmandu - Khangjim - Kathmandu transfer in private vehicle.",
    "Trek permit fees and NP fees required for the trek.",
    "Accommodation in tea houses during the trek.",
    "Meals on full board basis during the trek (Breakfast, lunch, and dinner).",
    "English speaking local expert guide and porter on the trek.",
    "Salary and insurance for staffs.",
    "Kitbags (Duffel Bag).",
    "All government taxes."
];

const EXCLUDES = [
    "International airfare and Nepal entry visa fee.",
    "Accommodation, lunch, and dinner in Kathmandu.",
    "Soft drinks and alcoholic beverages like Coke, Beer, Mineral water.",
    "Entrance fees for heritage sites, monasteries, and museum.",
    "Personal trekking gears and equipment.",
    "Personal nature expenses like phone calls, Wi-Fi, Gadget charging, Laundry, Shower, Gratitude.",
    "Insurance and emergency rescue evacuation.",
    "Any items not mentioned in 'Service included' section."
];

export default function MardiHimalPage() {
    return (
        <main className="min-h-screen bg-brand-white text-brand-dark overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-center overflow-hidden bg-brand-dark">
                {/* Parallax Background */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=2000&q=90"
                        alt="Machhapuchhre Summit"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent hidden lg:block" />
                </motion.div>

                <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Text Content Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div className="space-y-4">
                                <SectionBadge className="text-brand-light backdrop-blur-md bg-white/10 border-white/20">
                                    Annapurna Region
                                </SectionBadge>
                                <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
                                    MARDI <br />
                                    <span className="text-brand-light">HIMAL.</span>
                                </h1>
                            </div>

                            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-xl leading-relaxed">
                                A hidden gem in the Annapurna range, offering the closest views of Machhapuchhre (Fishtail)
                                through ancient rhododendron forests and high alpine ridges.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3"
                                >
                                    <Mountain className="text-brand-light" size={18} />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">4,500m Peak</span>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-3"
                                >
                                    <Sun className="text-amber-400" size={18} />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">Sunrise View</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Interactive Hero Element/Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="lg:col-span-5 hidden lg:flex justify-end"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-brand-light/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative p-12 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-8">
                                    <div className="space-y-2">
                                        <p className="text-brand-light font-black text-xs uppercase tracking-[0.4em]">Intensity</p>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="h-2 w-8 rounded-full bg-brand-light" />)}
                                            <div className="h-2 w-8 rounded-full bg-white/20" />
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/10 w-full" />
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-12">
                                            <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Technical</p>
                                            <p className="text-white font-black">MODERATE</p>
                                        </div>
                                        <div className="flex items-center justify-between gap-12">
                                            <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">Experience</p>
                                            <p className="text-white font-black">NOT REQUIRED</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
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
            <section className="relative z-20 -mt-20">
                <div className="container mx-auto px-8 md:px-20">
                    <div className="bg-brand-dark rounded-[3rem] p-8 md:p-12 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Max Altitude", value: "4,500m", icon: Mountain },
                            { label: "Best Season", value: "Spring/Autumn", icon: Sun },
                            { label: "Duration", value: "5-7 Days", icon: Clock },
                            { label: "Difficulty", value: "Moderate", icon: Navigation },
                        ].map((stat) => (
                            <div key={stat.label} className="space-y-2 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-3 text-brand-light/60">
                                    <stat.icon size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</span>
                                </div>
                                <p className="text-2xl font-black text-white">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <Section id="overview" background="white" className="pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <SectionBadge>Overview</SectionBadge>
                            <SectionHeading dark={false} gradientText="Machhapuchhre.">
                                The Shadow of
                            </SectionHeading>
                            <div className="space-y-6 text-brand-medium/80 text-lg leading-relaxed font-medium">
                                <p>
                                    The trek begins with a scenic drive from Pokhara to Sidding, ascending through
                                    peaceful forests and traditional villages. From Sidding to Low Camp,
                                    rhododendron and oak forests provide a serene backdrop while glimpses of the
                                    Annapurna range begin to appear.
                                </p>
                                <p>
                                    As you reach High Camp, you are surrounded by towering peaks and alpine
                                    landscapes. An early morning hike to the Viewpoint unveils a breathtaking
                                    sunrise over Machhapuchhre (Fishtail), Hiunchuli, and Annapurna South.
                                </p>
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
                            src="https://images.unsplash.com/photo-1682760345059-8d1aa5cfcb50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0"
                            alt="The Fishtail Ridge"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                </div>
            </Section>

            {/* Itinerary Section */}
            <div className="relative my-32">
                {/* Top Mountain Cut */}
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
                                Experience every moment of your adventure through the Annapurna region
                            </p>
                        </div>

                        {/* Two Column Grid - Compact Design */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {ITINERARY.map((day, idx) => (
                                <motion.div
                                    key={day.day}
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
                                        {/* Topographic Background Pattern */}
                                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
                                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <path d="M0,20 Q25,10 50,20 T100,20 T150,20" fill="none" stroke="white" strokeWidth="0.5" />
                                                <path d="M0,40 Q25,30 50,40 T100,40 T150,40" fill="none" stroke="white" strokeWidth="0.5" />
                                                <path d="M0,60 Q25,50 50,60 T100,60 T150,60" fill="none" stroke="white" strokeWidth="0.5" />
                                            </svg>
                                        </div>

                                        {/* Floating Day Badge */}
                                        <div className="absolute top-10 right-4 -translate-y-1/2">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-brand-light blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                                                <div className="relative bg-gradient-to-br from-brand-light to-brand-medium px-6 py-2 rounded-full border border-white/20 shadow-xl transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                                                    <span className="text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] block leading-none mb-1 opacity-70">Day</span>
                                                    <span className="text-2xl font-black text-brand-dark leading-none">
                                                        {day.day < 10 ? `0${day.day}` : day.day}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="relative z-10 space-y-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-px w-8 bg-brand-light/30 transition-all duration-700 group-hover:w-12 group-hover:bg-brand-light" />
                                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light/10 border border-brand-light/10">
                                                        <MapPin size={10} className="text-brand-light" />
                                                        <span className="text-brand-light text-[14px] font-black uppercase tracking-widest">{day.location}</span>
                                                    </div>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-brand-light transition-colors duration-500">
                                                    {day.title}
                                                </h3>
                                            </div>

                                            <p className="text-brand-white/50 text-base leading-relaxed font-medium transition-colors duration-500 group-hover:text-brand-white/80">
                                                {day.desc}
                                            </p>

                                            {/* Corner Decorative Icon */}
                                            <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-10 transition-all duration-700 transform group-hover:scale-105 ">
                                                <Mountain size={100} className="text-white" />
                                            </div>
                                        </div>

                                        {/* Reveal-on-hover Progress Bar */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-light to-brand-medium w-0 transition-all duration-1000 group-hover:w-full" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </Section>
                {/* Bottom Mountain Cut */}
                <div className="absolute bottom-0 left-0 w-full h-20 md:h-32 translate-y-[99%] z-10 rotate-180 pointer-events-none">
                    <svg className="w-full h-full fill-brand-dark" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,120 L0,85 L150,115 L300,10 L450,100 L600,35 L750,110 L900,5 L1050,115 L1200,45 L1350,105 L1440,20 L1440,120 Z"></path>
                    </svg>
                </div>
            </div>

            {/* Includes/Excludes */}
            <Section id="details" background="white" className="py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Includes */}
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
                            {INCLUDES.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                                    <span className="text-brand-medium/70 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Excludes */}
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
                            {EXCLUDES.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                    <span className="text-brand-medium/70 font-medium">{item}</span>
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
                {/* Decorative background */}
                <Mountain className="absolute bottom-0 right-0 w-[60%] h-[60%] text-white/[0.02] -z-0 translate-y-20 translate-x-20" />
            </section>
        </main>
    );
}
