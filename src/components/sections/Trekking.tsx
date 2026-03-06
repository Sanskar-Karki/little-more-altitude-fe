import { useState, useMemo, useRef, useEffect } from "react";
import { MapPin, Calendar, Star, ArrowRight, Search, Filter, X, Zap, Clock, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Destination } from "@/types";
import { cn } from "@/lib/utils";

const treks: Destination[] = [
    {
        id: 1,
        name: "Everest Base Camp",
        location: "Solu-Khumbu, Nepal",
        duration: "14 Days",
        difficulty: "Challenging",
        rating: 4.9,
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Annapurna Circuit",
        location: "Gandaki, Nepal",
        duration: "18 Days",
        difficulty: "Moderate",
        rating: 4.8,
        price: "$1,999",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Mardi Himal",
        location: "Annapurna, Nepal",
        duration: "6 Days",
        difficulty: "Moderate",
        rating: 4.8,
        price: "$850",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1000&q=90",
        slug: "mardi-himal"
    },
    {
        id: 4,
        name: "Manaslu Circuit",
        location: "Gorkha, Nepal",
        duration: "15 Days",
        difficulty: "Hard",
        rating: 4.9,
        price: "$2,199",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=82",
    },
    {
        id: 5,
        name: "Langtang Valley",
        location: "Rasua, Nepal",
        duration: "10 Days",
        difficulty: "Moderate",
        rating: 4.7,
        price: "$1,499",
        image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        name: "Gokyo Lakes",
        location: "Khumbu, Nepal",
        duration: "12 Days",
        difficulty: "Challenging",
        rating: 4.8,
        price: "$1,899",
        image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 7,
        name: "Upper Mustang",
        location: "Mustang, Nepal",
        duration: "14 Days",
        difficulty: "Moderate",
        rating: 4.9,
        price: "$2,599",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    },
];

const difficulties = ["Moderate", "Challenging", "Hard"];
const durations = ["Short (< 10 Days)", "Medium (10-15 Days)", "Long (> 15 Days)"];

const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages: (number | string)[] = [];
    const showMax = 5; // Reduced to show dots earlier

    if (totalPages <= showMax) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);

        // Left ellipsis and window
        if (currentPage > 4) {
            pages.push("...");
        }

        const start = Math.max(2, currentPage - 2);
        const end = Math.min(totalPages - 1, currentPage + 2);

        for (let i = start; i <= end; i++) {
            if (!pages.includes(i)) pages.push(i);
        }

        // Right ellipsis and window
        if (currentPage < totalPages - 3) {
            pages.push("...");
        }

        if (!pages.includes(totalPages)) {
            pages.push(totalPages);
        }
    }
    return pages;
};

function TrekCard({ trek, index }: { trek: Destination; index: number }) {
    return (
        <Link href={trek.slug ? `/trekking/${trek.slug}` : "#"} className="block group">
            <div className="relative h-[460px] rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-brand-dark">

                {/* Image */}
                <div className="absolute inset-0">
                    <Image
                        src={trek.image}
                        alt={trek.name}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient: light at top, deep at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border
                        ${trek.difficulty === "Hard"
                            ? "bg-rose-500/20 border-rose-400/40 text-white"
                            : trek.difficulty === "Challenging"
                                ? "bg-amber-500/20 border-amber-400/40 text-white"
                                : "bg-emerald-500/20 border-emerald-400/40 text-white"
                        }`}
                    >
                        {trek.difficulty === "Hard" && <Zap size={9} className="inline mr-1 mb-0.5" />}
                        {trek.difficulty}
                    </span>
                    <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full">
                        <Star size={11} className="text-amber-400 fill-amber-400" />
                        <span className="text-white font-bold text-xs">{trek.rating}</span>
                    </div>
                </div>

                {/* Bottom info — sits directly on gradient, no box */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 space-y-3">
                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                        <MapPin size={11} className="text-brand-light shrink-0" />
                        <span className="text-brand-light font-bold text-[10px] uppercase tracking-[0.2em] truncate">{trek.location}</span>
                    </div>

                    {/* Trek name */}
                    <h3 className="text-2xl font-black text-white leading-tight tracking-tight group-hover:text-brand-medium transition-colors duration-300">
                        {trek.name}
                    </h3>

                    {/* Duration + CTA */}
                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-white/40" />
                            <span className="text-white/60 text-xs font-semibold">{trek.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 border border-white/20 group-hover:border-brand-medium group-hover:bg-brand-medium text-white/70 group-hover:text-white pl-4 pr-3 py-2 rounded-full transition-all duration-300">
                            <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function Trekking({ background = "white", autoFocusSearch = false }: { background?: "white" | "dark"; autoFocusSearch?: boolean }) {
    const isDark = background === "dark";
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [treksPerPage, setTreksPerPage] = useState(6);

    const filterSectionRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Filter logic
    const filteredTreks = useMemo(() => {
        return treks.filter((trek) => {
            const matchesSearch = trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trek.location.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesDifficulty = !selectedDifficulty || trek.difficulty === selectedDifficulty;

            const days = parseInt(trek.duration.split(" ")[0]);
            let matchesDuration = true;
            if (selectedDuration === "Short (< 10 Days)") matchesDuration = days < 10;
            else if (selectedDuration === "Medium (10-15 Days)") matchesDuration = days >= 10 && days <= 15;
            else if (selectedDuration === "Long (> 15 Days)") matchesDuration = days > 15;

            return matchesSearch && matchesDifficulty && matchesDuration;
        });
    }, [searchQuery, selectedDifficulty, selectedDuration]);

    const totalPages = Math.ceil(filteredTreks.length / treksPerPage);

    const paginatedTreks = useMemo(() => {
        const startIndex = (currentPage - 1) * treksPerPage;
        return filteredTreks.slice(startIndex, startIndex + treksPerPage);
    }, [filteredTreks, currentPage, treksPerPage]);

    // Reset page when filters or items per page change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedDifficulty, selectedDuration, treksPerPage]);

    // Scroll to results when page changes
    useEffect(() => {
        if (currentPage > 1) {
            filterSectionRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [currentPage]);

    // Auto-focus search on mount (trekking page only)
    useEffect(() => {
        if (autoFocusSearch) {
            const timer = setTimeout(() => {
                searchInputRef.current?.focus();
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [autoFocusSearch]);

    // Scroll to top of filters when searching or filtering
    useEffect(() => {
        if (searchQuery || selectedDifficulty || selectedDuration) {
            const timer = setTimeout(() => {
                filterSectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [searchQuery, selectedDifficulty, selectedDuration]);

    return (
        <Section id="trekking" background={background} container={false} className="relative overflow-hidden py-20">
            {!isDark && (
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(180,150,130,0.03)_0%,transparent_70%)]" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_80%,rgba(180,150,130,0.03)_0%,transparent_70%)]" />
                </div>
            )}

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto text-center mb-15 mt-32 space-y-4">
                    <SectionHeading dark={isDark} gradientText="Step by Step.">
                        Curated Trekking
                    </SectionHeading>
                    <p className={`${isDark ? 'text-brand-white/40' : 'text-brand-dark/40'} text-lg max-w-xl mx-auto font-medium`}>
                        From the sacred paths of Mustang to the legendary Everest trails.
                    </p>
                </div>

                {/* Modern Discovery Bar */}
                <div ref={filterSectionRef} className="max-w-7xl mx-auto mb-12 scroll-mt-24">
                    <div className="flex flex-col xl:flex-row gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 group">
                            <div className="absolute left-6 inset-y-0 flex items-center text-brand-dark/40 group-focus-within:text-brand-medium transition-colors">
                                <Search size={22} />
                            </div>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search trails, regions, or peaks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={cn(
                                    "w-full pl-16 pr-14 py-4 rounded-[2rem] bg-white border border-brand-dark/20 shadow-[0_8px_30px_rgba(0,0,0,0.04)] focus:outline-none focus:border-brand-medium/30 focus:ring-2 focus:ring-brand-dark/40 text-brand-dark text-base placeholder:text-brand-dark/30 transition-all duration-300 font-semibold",
                                    isDark && "bg-brand-white/5 border-white/5 text-white placeholder:text-white/20 focus:border-brand-medium/50"
                                )}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-6 inset-y-0 flex items-center text-brand-dark/30 hover:text-brand-medium transition-colors cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        {/* Filter Selectors */}
                        <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                            {/* Duration */}
                            <div className={cn("flex items-center gap-2 px-1.5 py-1 bg-white border border-brand-dark/10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-x-auto no-scrollbar whitespace-nowrap", isDark && "bg-brand-white/5 border-white/5")}>
                                <span className={cn("text-[10px] font-black px-4 text-brand-dark/30 uppercase tracking-[0.2em]", isDark && "text-white/30")}>Time</span>
                                {durations.map((duration) => (
                                    <button
                                        key={duration}
                                        onClick={() => setSelectedDuration(selectedDuration === duration ? null : duration)}
                                        className={cn(
                                            "px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 inline-block tracking-wide cursor-pointer",
                                            selectedDuration === duration
                                                ? "bg-brand-medium text-white shadow-lg transform scale-[1.02]"
                                                : cn("hover:bg-brand-dark/5", isDark ? "text-white/70 hover:text-white" : "text-brand-dark/60 hover:text-brand-dark")
                                        )}
                                    >
                                        {duration.split(" (")[0]}
                                    </button>
                                ))}
                            </div>

                            {/* Difficulty */}
                            <div className={cn("flex items-center gap-2 px-1.5 py-1 bg-white border border-brand-dark/10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-x-auto no-scrollbar whitespace-nowrap", isDark && "bg-brand-white/5 border-white/5")}>
                                <span className={cn("text-[10px] font-black px-4 text-brand-dark/30 uppercase tracking-[0.2em]", isDark && "text-white/30")}>Level</span>
                                {difficulties.map((difficulty) => (
                                    <button
                                        key={difficulty}
                                        onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
                                        className={cn(
                                            "px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 inline-block tracking-wide cursor-pointer",
                                            selectedDifficulty === difficulty
                                                ? "bg-brand-dark text-white shadow-lg transform scale-[1.02]"
                                                : cn("hover:bg-brand-dark/5", isDark ? "text-white/70 hover:text-white" : "text-brand-dark/60 hover:text-brand-dark")
                                        )}
                                    >
                                        {difficulty}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Filters Summary */}
                    {(searchQuery || selectedDifficulty || selectedDuration) && (
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6 ml-2">
                            {searchQuery && (
                                <div className="flex items-center gap-2 bg-brand-medium/10 text-brand-medium px-4 py-2 rounded-full border border-brand-medium/20 shadow-sm transition-all hover:bg-brand-medium/20">
                                    <Search size={12} />
                                    <span className="text-[11px] font-bold tracking-wide">"{searchQuery}"</span>
                                    <button onClick={() => setSearchQuery("")} className="hover:text-brand-dark ml-1"><X size={14} /></button>
                                </div>
                            )}

                            {selectedDifficulty && (
                                <div className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-full shadow-sm">
                                    <Mountain size={12} />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">{selectedDifficulty}</span>
                                    <button onClick={() => setSelectedDifficulty(null)} className="ml-1 cursor-pointer text-white/70 hover:text-white"><X size={14} /></button>
                                </div>
                            )}

                            {selectedDuration && (
                                <div className="flex items-center gap-2 bg-brand-medium text-white px-4 py-2 rounded-full shadow-sm">
                                    <Clock size={12} />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">{selectedDuration.split(" (")[0]}</span>
                                    <button onClick={() => setSelectedDuration(null)} className="ml-1 cursor-pointer text-white/70 hover:text-white"><X size={14} /></button>
                                </div>
                            )}

                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedDifficulty(null);
                                    setSelectedDuration(null);
                                }}
                                className={cn("text-[10px] font-black uppercase tracking-[0.15em] ml-2 transition-colors", isDark ? "text-white/40 hover:text-white" : "text-brand-dark/40 hover:text-brand-dark")}
                            >
                                Clear All
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedTreks.map((trek, index) => (
                        <TrekCard key={trek.id} trek={trek} index={index} />
                    ))}
                </div>

                {filteredTreks.length === 0 ? (
                    <div className="text-center py-40 bg-brand-dark/[0.02] rounded-[4rem] border-2 border-dashed border-brand-dark/10 mt-12">
                        <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center mx-auto text-brand-dark/10 mb-10">
                            <Search size={64} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-5xl font-black text-brand-dark tracking-tighter">PATHS HIDDEN IN CLOUDS</h3>
                            <p className="text-brand-dark/40 max-w-sm mx-auto text-xl font-medium tracking-tight">
                                We couldn't find any trails matching your current search.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedDifficulty(null);
                                    setSelectedDuration(null);
                                    setTimeout(() => {
                                        filterSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 100);
                                }}
                                className="px-12 py-6 bg-brand-dark text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-brand-medium transition-all duration-500 shadow-2xl mt-8"
                            >
                                Reset Journey
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Modern Pagination Area */
                    <div className="mt-20">
                        <div className="h-px w-full bg-brand-dark/10 mb-12" />

                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
                            {/* Left Side: Result Info & Show Per Page */}
                            <div className="flex flex-col gap-4 items-center md:items-start">
                                <p className={cn("text-[10px] font-black uppercase tracking-[0.2em]", isDark ? "text-white/20" : "text-brand-dark/20")}>
                                    Showing {Math.min(filteredTreks.length, (currentPage - 1) * treksPerPage + 1)}-{Math.min(filteredTreks.length, currentPage * treksPerPage)} of {filteredTreks.length} results
                                </p>

                                <div className={cn("flex items-center gap-2 px-1.5 py-1 bg-white border border-brand-dark/10 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)]", isDark && "bg-brand-white/5 border-white/5")}>
                                    <span className={cn("text-[10px] font-black px-4 text-brand-dark/30 uppercase tracking-[0.2em]", isDark && "text-white/30")}>Show</span>
                                    {[6, 12, 18, 24].map((count) => (
                                        <button
                                            key={count}
                                            onClick={() => setTreksPerPage(count)}
                                            className={cn(
                                                "w-12 h-12 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center tracking-wide cursor-pointer",
                                                treksPerPage === count
                                                    ? "bg-brand-medium text-white shadow-lg transform scale-[1.05]"
                                                    : cn("hover:bg-brand-dark/5", isDark ? "text-white/70 hover:text-white" : "text-brand-dark/60 hover:text-brand-dark")
                                            )}
                                        >
                                            {count}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                        disabled={currentPage === 1}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-dark/10",
                                            currentPage === 1
                                                ? "opacity-30 cursor-not-allowed"
                                                : isDark
                                                    ? "text-white hover:bg-white/10"
                                                    : "text-brand-dark hover:bg-brand-dark hover:text-white"
                                        )}
                                    >
                                        <ArrowRight size={18} className="rotate-180" />
                                    </button>

                                    <div className="flex items-center gap-2 mx-4">
                                        {getPageNumbers(currentPage, totalPages).map((pageNum, i) => {
                                            if (pageNum === "...") {
                                                return (
                                                    <span key={`ellipsis-${i}`} className={cn("w-10 h-10 flex items-center justify-center text-sm font-black", isDark ? "text-white/40" : "text-brand-dark/40")}>
                                                        ...
                                                    </span>
                                                );
                                            }
                                            const isCurrent = currentPage === pageNum;
                                            return (
                                                <button
                                                    key={pageNum}
                                                    onClick={() => setCurrentPage(pageNum as number)}
                                                    className={cn(
                                                        "w-10 h-10 rounded-full text-sm font-black transition-all duration-300 border",
                                                        isCurrent
                                                            ? "bg-brand-dark border-brand-dark text-white shadow-xl scale-110"
                                                            : cn(
                                                                "border-transparent",
                                                                isDark
                                                                    ? "text-white/40 hover:text-white hover:border-white/20"
                                                                    : "text-brand-dark/40 hover:text-brand-dark hover:border-brand-dark/20"
                                                            )
                                                    )}
                                                >
                                                    {pageNum}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                        disabled={currentPage === totalPages}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-dark/10",
                                            currentPage === totalPages
                                                ? "opacity-30 cursor-not-allowed"
                                                : isDark
                                                    ? "text-white hover:bg-white/10"
                                                    : "text-brand-dark hover:bg-brand-dark hover:text-white"
                                        )}
                                    >
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}
