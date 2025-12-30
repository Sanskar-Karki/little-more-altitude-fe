"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormData } from "@/types";

const contactInfo = [
    {
        icon: Mail,
        label: "Email Us",
        value: "hello@littlemorealtitude.com",
        href: "mailto:hello@littlemorealtitude.com",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+977 123 456 789",
        href: "tel:+977123456789",
    },
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Kathmandu, Nepal",
        href: "#",
    },
    {
        icon: Clock,
        label: "Working Hours",
        value: "Mon-Fri: 9AM - 6PM",
        href: "#",
    },
];

export function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        alert("Message sent! We'll get back to you within 24 hours.");

        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 bg-brand-medium/10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-brand-light/20 text-brand-light font-medium text-sm mb-6 uppercase tracking-wider">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready for Your Next{" "}
                            <span className="text-brand-light">Adventure?</span>
                        </h2>
                        <p className="text-lg text-brand-white/70 mb-10">
                            Whether you have questions about our treks, need help planning your
                            expedition, or want to create a custom itinerary, our team is here to help.
                        </p>

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-brand-dark border border-brand-light/10 hover:border-brand-light/30 hover:shadow-lg transition-all"
                                >
                                    <div className="p-3 rounded-lg bg-brand-light/10 text-brand-light">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-brand-white/60 mb-1">
                                            {item.label}
                                        </div>
                                        <div className="font-medium text-white">
                                            {item.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 md:p-10 rounded-2xl bg-brand-dark border border-brand-light/10 shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Send Us a Message
                            </h3>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="h-12"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="h-12"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                            Phone Number
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+977 123 456 789"
                                            className="h-12"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                        Your Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your dream adventure..."
                                        rows={5}
                                        required
                                        className="resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-12 bg-brand-light text-brand-dark font-bold rounded-lg hover:bg-brand-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full"
                                        />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="h-5 w-5" />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
