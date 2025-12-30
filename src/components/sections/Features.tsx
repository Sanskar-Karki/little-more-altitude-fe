"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, HeartHandshake, MountainSnow } from "lucide-react";

const FEATURES = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Our guides are certified in First Aid and mountaineering safety. Your well-being is our priority."
    },
    {
        icon: UserCheck,
        title: "Experienced Guides",
        description: "Local Sherpa guides with decades of experience on the highest peaks of the Himalayas."
    },
    {
        icon: HeartHandshake,
        title: "Sustainable Travel",
        description: "We practice Leave No Trace principles and support local communities in trekking regions."
    },
    {
        icon: MountainSnow,
        title: "Tailored Itineraries",
        description: "From beginner hikes to expedition-style climbs, we customize trips to your fitness level."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-brand-medium/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-brand-light font-semibold tracking-wider uppercase">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">The Little More Altitude Difference</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl bg-brand-dark border border-brand-light/10 hover:border-brand-light/30 transition-all hover:shadow-lg hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-light/10 flex items-center justify-center mb-6 group-hover:bg-brand-light group-hover:text-brand-dark transition-colors text-brand-light">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-brand-white/70 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
