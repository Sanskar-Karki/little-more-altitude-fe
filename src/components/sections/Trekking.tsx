"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { MapPin, Clock, Star, ArrowRight, Search, X, Zap, Mountain, Loader2, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { getTrekkings, getMediaUrl } from "@/lib/trekking";

// Using local trekking data store

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

function TrekCard({ trek, index }: { trek: any; index: number }) {
    const isLocal = !!trek.slug;
    const name = trek.name;
    const location = trek.region || trek.location;
    const duration = trek.duration;
    const difficulty = trek.difficulty;
    const dailyActivity = trek.dailyActivity;
    const rating = trek.rating || 4.8;
    const image = isLocal ? getMediaUrl(trek.heroImage?.url) : trek.image;
    const slug = trek.slug;

    return (
        <Link href={slug ? `/trekking/${slug}` : "#"} className="block group">
            <div className="relative h-[400px] md:h-[460px] rounded-[2.5rem] md:rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-brand-dark">

                {/* Image */}
                <div className="absolute inset-0">
                    {image && (
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    )}
                    {/* Gradient: light at top, deep at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Top badges */}
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {dailyActivity && (
                            <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border bg-white/10 border-white/20 text-white flex items-center gap-1.5">
                                <Activity size={9} />
                                {dailyActivity}
                            </span>
                        )}
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border
                            ${difficulty === "Hard"
                                ? "bg-rose-500/20 border-rose-400/40 text-white"
                                : difficulty === "Challenging"
                                    ? "bg-amber-500/20 border-amber-400/40 text-white"
                                    : "bg-emerald-500/20 border-emerald-400/40 text-white"
                            }`}
                        >
                            {difficulty === "Hard" && <Zap size={9} className="inline mr-1 mb-0.5" />}
                            {difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full">
                        <Star size={11} className="text-amber-400 fill-amber-400" />
                        <span className="text-white font-bold text-xs">{rating}</span>
                    </div>
                </div>

                {/* Bottom info — sits directly on gradient, no box */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-6 space-y-3">
                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                        <MapPin size={11} className="text-brand-light shrink-0" />
                        <span className="text-brand-light font-bold text-[10px] uppercase tracking-[0.2em] truncate">{location}</span>
                    </div>

                    {/* Trek name */}
                    <h3 className="text-2xl font-black text-white leading-tight tracking-tight group-hover:text-brand-medium transition-colors duration-300">
                        {name}
                    </h3>

                    {/* Duration + CTA */}
                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                            <Clock size={12} className="text-white/40" />
                            <span className="text-white/60 text-xs font-semibold">{duration}</span>
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

function TrekSkeleton() {
    return (
        <div className="relative h-[400px] md:h-[460px] rounded-[2.5rem] md:rounded-[2rem] overflow-hidden bg-brand-dark animate-pulse border border-white/5">
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute top-5 left-5 right-5 flex justify-between">
                <div className="w-24 h-6 bg-white/10 rounded-full" />
                <div className="w-12 h-6 bg-white/10 rounded-full" />
            </div>
            <div className="absolute inset-x-0 bottom-0 px-6 pb-6 space-y-4">
                <div className="w-20 h-3 bg-white/10 rounded-full" />
                <div className="w-2/3 h-8 bg-white/10 rounded-xl" />
                <div className="flex justify-between items-center pt-2">
                    <div className="w-24 h-4 bg-white/5 rounded-full" />
                    <div className="w-24 h-10 bg-white/10 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function Trekking({ background = "white", autoFocusSearch = false }: { background?: "white" | "dark"; autoFocusSearch?: boolean }) {
    const isDark = background === "dark";
    const [treks, setTreks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [treksPerPage, setTreksPerPage] = useState(6);

    const filterSectionRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fetch treks from Strapi
    useEffect(() => {
        async function fetchTreks() {
            setLoading(true);
            try {
                console.log("Fetching treks...");
                const data = await getTrekkings();
                console.log("Fetched data:", data);
                setTreks(data);
            } catch (error) {
                console.error("Failed to fetch treks:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchTreks();
    }, []);

    // Filter logic
    const filteredTreks = useMemo(() => {
        return treks.filter((trek) => {
            const name = trek.name || "";
            const location = trek.region || trek.location || "";
            const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                location.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesDifficulty = !selectedDifficulty || trek.difficulty === selectedDifficulty;

            let matchesDuration = true;
            if (selectedDuration) {
                const daysStr = trek.duration ? trek.duration.split(" ")[0] : "0";
                const days = parseInt(daysStr);

                if (selectedDuration === "Short (< 10 Days)") matchesDuration = days < 10;
                else if (selectedDuration === "Medium (10-15 Days)") matchesDuration = days >= 10 && days <= 15;
                else if (selectedDuration === "Long (> 15 Days)") matchesDuration = days > 15;
            }

            return matchesSearch && matchesDifficulty && matchesDuration;
        });
    }, [treks, searchQuery, selectedDifficulty, selectedDuration]);

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
                <div ref={filterSectionRef} className="max-w-7xl mx-auto mb-2 sm:mb-12 scroll-mt-24">
                    <div className="flex flex-col xl:flex-row gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 group">
                            <div className="absolute left-6 inset-y-0 flex items-center text-brand-dark/40 group-focus-within:text-brand-medium transition-colors">
                                <Search size={22} />
                            </div>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search trails, regions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={cn(
                                    "w-full pl-14 md:pl-16 pr-12 md:pr-14 py-3.5 md:py-4 rounded-2xl md:rounded-[2rem] bg-white border border-brand-dark/10 shadow-sm focus:outline-none focus:border-brand-medium/50 focus:ring-4 focus:ring-brand-medium/5 text-brand-dark text-sm md:text-base placeholder:text-brand-dark/30 transition-all duration-300 font-semibold",
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
                            <div className={cn("flex flex-wrap md:flex-nowrap items-center gap-1.5 md:gap-2 px-1 py-1 md:px-1.5 bg-white/50 md:bg-white border border-brand-dark/5 md:border-brand-dark/10 rounded-2xl md:rounded-[2rem] shadow-sm", isDark && "bg-brand-white/5 border-white/5")}>
                                <span className={cn("text-[9px] font-black px-3 md:px-4 text-brand-dark/30 uppercase tracking-[0.2em] hidden sm:inline", isDark && "text-white/30")}>Time</span>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {durations.map((duration) => (
                                        <button
                                            key={duration}
                                            onClick={() => setSelectedDuration(selectedDuration === duration ? null : duration)}
                                            className={cn(
                                                "px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-full text-[11px] md:text-sm font-bold transition-all duration-300 tracking-wide cursor-pointer whitespace-nowrap",
                                                selectedDuration === duration
                                                    ? "bg-brand-medium text-white shadow-md transform scale-[1.02]"
                                                    : cn("hover:bg-brand-dark/5", isDark ? "text-white/70 hover:text-white" : "text-brand-dark/60 hover:text-brand-dark")
                                            )}
                                        >
                                            {duration.split(" (")[0]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Difficulty */}
                            <div className={cn("flex flex-wrap md:flex-nowrap items-center gap-1.5 md:gap-2 px-1 py-1 md:px-1.5 bg-white/50 md:bg-white border border-brand-dark/5 md:border-brand-dark/10 rounded-2xl md:rounded-[2rem] shadow-sm", isDark && "bg-brand-white/5 border-white/5")}>
                                <span className={cn("text-[9px] font-black px-3 md:px-4 text-brand-dark/30 uppercase tracking-[0.2em] hidden sm:inline", isDark && "text-white/30")}>Level</span>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {difficulties.map((difficulty) => (
                                        <button
                                            key={difficulty}
                                            onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
                                            className={cn(
                                                "px-4 md:px-5 py-2 md:py-3 rounded-xl md:rounded-full text-[11px] md:text-sm font-bold transition-all duration-300 tracking-wide cursor-pointer whitespace-nowrap",
                                                selectedDifficulty === difficulty
                                                    ? "bg-brand-dark text-white shadow-md transform scale-[1.02]"
                                                    : cn("hover:bg-brand-dark/5", isDark ? "text-white/70 hover:text-white" : "text-brand-dark/60 hover:text-brand-dark")
                                            )}
                                        >
                                            {difficulty}
                                        </button>
                                    ))}
                                </div>
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
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <TrekSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedTreks.map((trek, index) => (
                            <TrekCard key={trek.id} trek={trek} index={index} />
                        ))}
                    </div>
                )}

                {!loading && (
                    <>
                        {filteredTreks.length === 0 ? (
                            <div className="text-center py-20 md:py-40 bg-brand-dark/[0.02] rounded-[2rem] md:rounded-[4rem] border-2 border-dashed border-brand-dark/10 mt-12 px-6">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-xl md:shadow-2xl flex items-center justify-center mx-auto text-brand-dark/10 mb-8 md:mb-10">
                                    <Search className="w-10 h-10 md:w-16 md:h-16" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-dark tracking-tighter leading-tight">PATHS HIDDEN <br className="md:hidden" /> IN CLOUDS</h3>
                                    <p className="text-brand-dark/40 max-w-sm mx-auto text-base md:text-xl font-medium tracking-tight">
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
                                        className="px-8 md:px-12 py-4 md:py-6 bg-brand-dark text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-brand-medium transition-all duration-500 shadow-2xl mt-6 md:mt-8 cursor-pointer"
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
                    </>
                )}
            </div>
        </Section>
    );
}
