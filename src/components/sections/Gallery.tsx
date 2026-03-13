"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
    size: "small" | "medium" | "large";
}

const CATEGORIES = ["All", "Expeditions", "Culture", "Landscape", "Moments"];

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=1200&auto=format&fit=crop",
        alt: "Majestic Everest Peak",
        category: "Landscape",
        size: "large"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=800&auto=format&fit=crop",
        alt: "Trekkers on the Trail",
        category: "Expeditions",
        size: "medium"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=800&auto=format&fit=crop",
        alt: "Mountain Village Life",
        category: "Culture",
        size: "small"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        alt: "Basecamp Sunrise",
        category: "Moments",
        size: "medium"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=800&auto=format&fit=crop",
        alt: "Sacred Prayer Flags",
        category: "Culture",
        size: "small"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop",
        alt: "Glacial Expedition",
        category: "Expeditions",
        size: "large"
    },

    {
        id: 7,
        src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1200&auto=format&fit=crop",
        alt: "Starry Himalayan Night",
        category: "Landscape",
        size: "medium"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        alt: "Alpine Turquoise Lake",
        category: "Landscape",
        size: "small"
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=800&auto=format&fit=crop",
        alt: "Summit Victory",
        category: "Moments",
        size: "medium"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=800&auto=format&fit=crop",
        alt: "Highland Yak Caravan",
        category: "Culture",
        size: "medium"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop",
        alt: "Expedition Night Camp",
        category: "Expeditions",
        size: "small"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        alt: "Mountain Ridge Trek",
        category: "Expeditions",
        size: "medium"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=800&auto=format&fit=crop",
        alt: "Himalayan Golden Hour",
        category: "Landscape",
        size: "medium"
    }
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return galleryImages;
        return galleryImages.filter(img => img.category === activeCategory);
    }, [activeCategory]);

    const openLightbox = (image: GalleryImage) => setSelectedImage(image);
    const closeLightbox = () => setSelectedImage(null);

    const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const nextIdx = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIdx]);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const prevIdx = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIdx]);
    };

    return (
        <Section id="gallery" background="white" className="pt-6 md:pt-10">
            <div className="space-y-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <div className="space-y-4 max-w-2xl text-center lg:text-left">
                        <SectionBadge>Our Gallery</SectionBadge>
                        <SectionHeading gradientText="Captured. " >
                            <span className="text-brand-dark/80"> Himalayan Stories</span>
                        </SectionHeading>
                        <p className="text-brand-dark/60 text-lg font-medium leading-relaxed">
                            A glimpse into the extraordinary landscapes, vibrant cultures, and
                            challenging expeditions that define our journeys.
                        </p>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 bg-brand-dark/5 p-1.5 rounded-[1.5rem] md:rounded-2xl md:overflow-visible">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative cursor-pointer px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-sm font-black md:font-bold uppercase tracking-widest md:tracking-normal transition-all duration-300 whitespace-nowrap ${activeCategory === cat
                                    ? "text-brand-light"
                                    : "text-brand-dark/40 hover:text-brand-dark"
                                    }`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-brand-dark rounded-xl shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                            layout
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    layoutId={`gallery-image-${image.id}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative group cursor-pointer overflow-hidden rounded-[2rem] bg-brand-dark/5 ${image.size === 'large' ? 'md:row-span-2' : ''
                                        }`}
                                    onClick={() => openLightbox(image)}
                                >
                                    <motion.img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[250px] sm:min-h-[300px]"
                                        loading="lazy"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            className="space-y-2"
                                        >
                                            <span className="px-3 py-1 rounded-full bg-brand-light/20 backdrop-blur-md text-brand-light text-[10px] font-black uppercase tracking-widest border border-brand-light/30">
                                                {image.category}
                                            </span>
                                            <h3 className="text-white font-bold text-xl">{image.alt}</h3>
                                            <div className="pt-4 flex items-center text-brand-light gap-2 font-bold text-xs uppercase tracking-wider">
                                                <Maximize2 size={16} />
                                                <span>View Details</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Premium Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-brand-dark/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute cursor-pointer top-8 right-8 z-[110] p-4 rounded-full bg-white/5 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 hover:rotate-90"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-8 pointer-events-none">
                            <button
                                onClick={prevImage}
                                className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 -translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 md:opacity-100 md:translate-x-0 cursor-pointer"
                            >
                                <ChevronLeft size={32} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="pointer-events-auto p-4 rounded-full bg-white/5 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 md:opacity-100 md:translate-x-0 cursor-pointer"
                            >
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-8">
                            <motion.div
                                key={selectedImage.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[70vh] object-contain"
                                />

                                {/* Info Panel */}
                                <div className="bg-brand-dark/80 backdrop-blur-md p-8 md:p-10 border-t border-white/5 w-full">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="space-y-3">
                                            <span className="px-4 py-1.5 rounded-full bg-brand-light text-brand-dark text-[10px] font-black uppercase tracking-[0.2em]">
                                                {selectedImage.category}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                                {selectedImage.alt}
                                            </h2>
                                        </div>
                                        <div className="text-brand-white/40 font-bold tracking-widest text-xl">
                                            {currentIndex + 1} <span className="text-brand-light/30">/</span> {filteredImages.length}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
