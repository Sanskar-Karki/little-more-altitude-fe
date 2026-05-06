"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mountain, Instagram, Facebook, Twitter, ArrowRight, MapPin, Mail, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export function Navbar() {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const NAV_LINKS = [
        { label: t('nav.home'), href: "/", icon: Home, mobileOnly: true },
        { label: t('nav.about'), href: "/about", icon: Mountain },
        { label: t('nav.trekking'), href: "/trekking", icon: ArrowRight },
        { label: t('nav.expedition'), href: "/expedition", icon: ArrowRight },
        { label: t('nav.gallery'), href: "/gallery", icon: ArrowRight },
        { label: t('nav.faq'), href: "/faq", icon: ArrowRight },
        { label: t('nav.contact'), href: "/contact", icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHomePage = pathname === "/";

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                (scrolled || isOpen)
                    ? "bg-brand-dark py-3 md:py-4 shadow-lg border-brand-light/20"
                    : isHomePage
                        ? "bg-transparent py-4 md:py-6"
                        : "bg-brand-dark py-4 md:py-6"
            )}
        >
            <div className="container mx-auto px-5 md:px-20 lg:px-32 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(e) => {
                        if (isHomePage) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="flex items-center gap-2 group"
                >
                    <Mountain className="h-7 w-7 md:h-8 md:w-8 text-brand-light transition-transform group-hover:scale-110" />
                    <span className="text-lg md:text-xl font-bold text-white tracking-wide">
                        Little More Altitude
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.filter(l => !l.mobileOnly).map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    if (isActive) {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                                className={cn(
                                    "font-medium transition-colors relative group",
                                    isActive ? "text-brand-light" : "text-brand-white/80 hover:text-brand-light"
                                )}
                            >
                                {link.label}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-brand-light transition-all duration-300",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )} />
                            </Link>
                        );
                    })}
                    <LanguageSwitcher />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Modern Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 md:hidden bg-brand-dark/95 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Menu Content */}
                        <div className="flex-1 flex flex-col justify-center px-10 pt-24 pb-12 gap-8 overflow-y-auto">
                            <div className="space-y-6">
                                {NAV_LINKS.map((link, i) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    setIsOpen(false);
                                                    if (isActive) {
                                                        e.preventDefault();
                                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                                    }
                                                }}
                                                className={cn(
                                                    "group flex items-center justify-between py-2 text-4xl font-black transition-all",
                                                    isActive ? "text-brand-light" : "text-white/40 hover:text-white"
                                                )}
                                            >
                                                <span>{link.label}</span>
                                                <link.icon className={cn(
                                                    "h-6 w-6 transition-transform group-hover:translate-x-2",
                                                    isActive ? "text-brand-light opacity-100" : "opacity-0"
                                                )} />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Contact Info in Mobile Menu */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto pt-10 border-t border-white/10 space-y-6"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white/50">
                                        <MapPin size={18} className="text-brand-light" />
                                        <span className="text-sm font-medium">{t('common.address')}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/50">
                                        <Mail size={18} className="text-brand-light" />
                                        <span className="text-sm font-medium">{t('common.email')}</span>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    {[
                                        { icon: Instagram, href: "#" },
                                        { icon: Facebook, href: "#" },
                                        { icon: Twitter, href: "#" }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-light hover:border-brand-light transition-all"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
