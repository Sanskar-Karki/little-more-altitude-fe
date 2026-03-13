"use client";

import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

export function WhatsAppButton() {
    // Replace with actual phone number
    const whatsappNumber = "9823288095";
    const message = "Hello! I'm interested in booking a trek with Little More Altitude.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 50,
                delay: 5
            }}
            className="fixed bottom-8 right-8 z-[100]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-16 h-16 bg-brand-dark text-[#25D366] rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.2)] transition-all hover:scale-110 active:scale-95 "
                aria-label="Contact on WhatsApp"
            >
                {/* Ripple Effect Animation */}
                <span className="absolute inset-0 rounded-full bg-[#25D365] animate-ping opacity-10" />

                <RiWhatsappFill size={40} className="relative z-10" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-brand-light/20 text-white text-sm font-bold whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    Chat with us
                </span>
            </a>
        </motion.div>
    );
}
