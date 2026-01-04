"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    duration?: number;
    delay?: number;
    precision?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

export function CountUp({
    to,
    from = 0,
    duration = 2,
    delay = 0,
    precision = 0,
    className = "",
    suffix = "",
    prefix = "",
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(from, to, {
            duration,
            delay,
            ease: "easeOut",
            onUpdate(value) {
                if (ref.current) {
                    ref.current.textContent = `${prefix}${value.toFixed(precision)}${suffix}`;
                }
            },
        });

        return () => controls.stop();
    }, [isInView, from, to, duration, delay, precision, prefix, suffix]);

    return (
        <span ref={ref} className={className}>
            {prefix}{from}{suffix}
        </span>
    );
}
