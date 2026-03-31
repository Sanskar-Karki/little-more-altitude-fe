import { motion } from "framer-motion";

import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
    icon?: LucideIcon;
}

export function SectionBadge({
    children,
    className = "",
    dark = false,
    icon: Icon
}: SectionBadgeProps) {
    const textColor = dark ? "text-brand-light" : "text-brand-dark";
    const dotColor = dark ? "bg-brand-light" : "bg-brand-dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-medium/10 border border-brand-light/20 ${className}`}
        >
            {Icon ? (
                <Icon size={14} className={textColor} />
            ) : (
                <span className={`w-2 h-2 rounded-full animate-pulse ${dotColor}`} />
            )}
            <span className={`text-xs font-bold uppercase tracking-[0.2em] ${textColor}`}>
                {children}
            </span>
        </motion.div>
    );
}
