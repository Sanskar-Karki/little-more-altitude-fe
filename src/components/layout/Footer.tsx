import Link from "next/link";
import { Mountain, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
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
                        <p className="text-brand-white/60 leading-relaxed">
                            Your trusted partner for unparalleled trekking across Nepal.
                            Built on real high-altitude experience. Go Higher. Live Deeper.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">Explore</h4>
                        <ul className="space-y-3 text-brand-white/70">
                            <li><Link href="/trekking" className="hover:text-white transition-colors">Trekking</Link></li>
                            <li><Link href="/expedition" className="hover:text-white transition-colors">Expedition</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">Contact</h4>
                        <ul className="space-y-4 text-brand-white/70">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-brand-light" />
                                <span>Boudha, Kathmandu, Nepal</span>
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
                        <h4 className="text-lg font-semibold mb-6 text-brand-light">Stay Updated</h4>
                        <p className="text-brand-white/60 mb-4">Subscribe for latest treks and offers.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-brand-medium/30 border border-brand-light/20 rounded-xl px-4 py-2 w-full focus:outline-none focus:border-brand-light text-white"
                            />
                            <button className="bg-brand-light hover:bg-brand-white text-brand-dark px-6 py-2 rounded-xl transition-all font-bold shadow-[0_4px_15px_rgba(80,140,155,0.3)] hover:shadow-[0_4px_25px_rgba(80,140,155,0.5)]">
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-brand-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-brand-white/40 text-sm">
                        © {new Date().getFullYear()} Little More Altitude. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-brand-white/60">
                        <a href="#" className="hover:text-brand-light transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-light transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-light transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
