"use client";

import { motion } from "framer-motion";

interface MountainLineProps {
    className?: string;
    color?: string;
    duration?: number;
    delay?: number;
}

export function MountainLine({
    className = "",
    color = "currentColor",
    duration = 2,
    delay = 0
}: MountainLineProps) {
    return (
        <div className={`pointer-events-none overflow-hidden ${className}`}>
            <motion.svg
                viewBox="0 0 1000 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,100 L0,80 L100,90 L200,40 L300,70 L400,20 L500,85 L600,10 L700,95 L800,30 L900,100 L1000,50 L1000,100 Z"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration,
                        delay,
                        ease: "easeInOut"
                    }}
                    stroke={color}
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                />
                <motion.path
                    d="M0,80 L100,90 L200,40 L300,70 L400,20 L500,85 L600,10 L700,95 L800,30 L900,100 L1000,50"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: duration * 1.5,
                        delay,
                        ease: "easeOut"
                    }}
                    stroke={color}
                    strokeWidth="1.5"
                />
            </motion.svg>
        </div>
    );
}
