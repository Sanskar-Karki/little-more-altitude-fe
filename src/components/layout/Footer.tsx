"use client";

import Link from "next/link";
import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-brand-dark border-t border-brand-light/10 pt-16 pb-8 text-brand-white">
            <div className="container mx-auto px-8 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Mountain className="h-8 w-8 text-brand-light" />
                            <span className="text-xl font-bold">Little More Altitude</span>
                        </div>
                        <p className="text-brand-white/80 leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">{t('footer.explore')}</h4>
                        <ul className="space-y-3 text-brand-white/90">
                            <li><Link href="/trekking" className="hover:text-white transition-colors">{t('nav.trekking')}</Link></li>
                            <li><Link href="/expedition" className="hover:text-white transition-colors">{t('nav.expedition')}</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">{t('nav.faq')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">{t('footer.contact')}</h4>
                        <ul className="space-y-4 text-brand-white/90">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-brand-light" />
                                <span>{t('common.address')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-light" />
                                <span>+977 9823288095</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-light" />
                                <span>alittlemorealtitude25@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">{t('footer.stayUpdated')}</h4>
                        <p className="text-brand-white/80 mb-4">{t('footer.subscribeText')}</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                className="bg-brand-medium/30 border border-brand-light/20 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-brand-light text-white"
                            />
                            <button className="bg-brand-light hover:bg-brand-white text-brand-dark px-6 py-2 rounded-xl transition-all font-bold shadow-[0_4px_15px_rgba(80,140,155,0.3)] hover:shadow-[0_4px_25px_rgba(80,140,155,0.5)]">
                                {t('footer.go')}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-white/60 text-sm">
                        © {new Date().getFullYear()} Little More Altitude. {t('footer.rights')}
                    </p>
                    <div className="flex gap-6 text-brand-white/80">
                        <a href="#" className="hover:text-brand-light transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-light transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-light transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
