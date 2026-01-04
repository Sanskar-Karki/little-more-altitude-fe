"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS: { label: string; href: string }[] = [
    { label: "Destinations", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-brand-dark/80 backdrop-blur-md border-brand-light/20 py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-8 md:px-20 lg:px-32 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Mountain className="h-8 w-8 text-brand-light transition-transform group-hover:scale-110" />
                    <span className="text-xl font-bold text-white tracking-wide">
                        Little More Altitude
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-brand-white/80 hover:text-brand-light font-medium transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full bg-brand-light text-brand-dark font-semibold hover:bg-white transition-colors shadow-[0_0_15px_rgba(216,196,182,0.4)] hover:shadow-[0_0_20px_rgba(245,239,231,0.4)]"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-light/20 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-brand-white font-medium hover:text-brand-light transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 mt-4 rounded-full bg-brand-light text-brand-dark font-bold hover:bg-white transition-colors"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
