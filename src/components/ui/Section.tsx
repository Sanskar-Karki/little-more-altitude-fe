import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    background?: "dark" | "white" | "gradient";
    container?: boolean;
}

export function Section({
    id,
    children,
    className = "",
    background = "dark",
    container = true
}: SectionProps) {
    const bgClasses = {
        dark: "bg-brand-dark",
        white: "bg-brand-white",
        gradient: "bg-gradient-to-br from-brand-white via-brand-light/20 to-brand-medium/10",
    };

    return (
        <section
            id={id}
            className={`py-24 relative overflow-hidden ${bgClasses[background]} ${className}`}
        >
            {container ? (
                <div className="container mx-auto px-8 md:px-20 lg:px-32 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
