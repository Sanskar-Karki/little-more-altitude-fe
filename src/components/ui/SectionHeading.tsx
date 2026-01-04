import { motion } from "framer-motion";

interface SectionHeadingProps {
    children: React.ReactNode;
    gradientText?: string;
    className?: string;
    dark?: boolean;
}

export function SectionHeading({
    children,
    gradientText,
    className = "",
    dark = true
}: SectionHeadingProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight ${dark ? 'text-white' : 'text-brand-dark'} ${className}`}
        >
            {children}
            {gradientText && (
                <>
                    {" "}<br className="hidden md:block" />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${dark ? 'from-brand-light to-brand-white' : 'from-brand-medium to-brand-light'}`}>
                        {gradientText}
                    </span>
                </>
            )}
        </motion.h2>
    );
}
