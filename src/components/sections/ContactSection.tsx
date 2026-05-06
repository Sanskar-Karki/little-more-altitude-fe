"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ContactFormData } from "@/types";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: t('contactSection.info.email'),
            value: "alittlemorealtitude25@gmail.com",
            href: "mailto:alittlemorealtitude25@gmail.com",
        },
        {
            icon: Phone,
            label: t('contactSection.info.call'),
            value: "+977 9823288095",
            href: "tel:+9779823288095",
        },
        {
            icon: MapPin,
            label: t('contactSection.info.visit'),
            value: t('common.address'),
            href: "#",
        },
        {
            icon: Clock,
            label: t('contactSection.info.hours'),
            value: t('contactSection.info.hoursValue'),
            href: "#",
        },
    ];

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

        alert(t('contactSection.form.success'));

        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <Section id="contact" background="white" className="overflow-visible">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

                {/* Contact Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-6">
                        <SectionBadge>{t('contactSection.badge')}</SectionBadge>
                        <SectionHeading dark={false} gradientText={t('contactSection.gradient')}>
                            {t('contactSection.heading')}
                        </SectionHeading>
                        <p className="text-xl text-brand-medium/70 font-medium max-w-xl leading-relaxed">
                            {t('contactSection.description')}
                        </p>
                    </div>

                    {/* Contact Methodology Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col gap-4 p-8 rounded-3xl bg-white shadow-xl shadow-brand-dark/[0.03] border border-brand-light/10 hover:border-brand-light/30 transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-light/10 text-brand-light flex items-center justify-center group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-500 shadow-sm">
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-brand-medium/50 uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-brand-dark font-bold text-lg group-hover:text-brand-medium transition-colors text-sm">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Premium Form Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative group/form">
                        <div className="absolute inset-0 bg-brand-light/20 blur-[80px] opacity-0 group-hover/form:opacity-30 transition-opacity duration-700" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative p-10 md:p-14 rounded-[3rem] bg-white shadow-2xl shadow-brand-dark/5 border border-brand-light/20 space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-brand-dark tracking-tight">{t('contactSection.form.title')}</h3>
                                <p className="text-brand-medium/60 text-sm font-medium">{t('contactSection.form.subheading')}</p>
                            </div>

                            <div className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest ml-1">{t('contactSection.form.name')}</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-14 px-6 rounded-2xl bg-brand-light/5 border border-brand-light/10 focus:border-brand-light focus:bg-white transition-all outline-none font-medium text-brand-dark placeholder:text-brand-medium/20"
                                            placeholder={t('contactSection.form.placeholderName')}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest ml-1">{t('contactSection.form.email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-14 px-6 rounded-2xl bg-brand-light/5 border border-brand-light/10 focus:border-brand-light focus:bg-white transition-all outline-none font-medium text-brand-dark placeholder:text-brand-medium/20"
                                            placeholder={t('contactSection.form.placeholderEmail')}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest ml-1">{t('contactSection.form.message')}</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-6 rounded-2xl bg-brand-light/5 border border-brand-light/10 focus:border-brand-light focus:bg-white transition-all outline-none font-medium text-brand-dark placeholder:text-brand-medium/20 resize-none"
                                        placeholder={t('contactSection.form.placeholderMessage')}
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                    className="w-full h-16 bg-brand-dark text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/20 hover:bg-brand-medium transition-all duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? t('contactSection.form.sending') : t('contactSection.form.submit')}
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
