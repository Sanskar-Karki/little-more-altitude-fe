"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
    size: "small" | "medium" | "large";
}

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "/gallery/DSC08099.jpeg",
        alt: "Majestic Snow-Capped Himalayan Peak",
        category: "landscape",
        size: "large"
    },
    {
        id: 2,
        src: "/gallery/DSC08161.jpeg",
        alt: "Trekkers Traversing a Ridge",
        category: "expeditions",
        size: "medium"
    },
    {
        id: 3,
        src: "/gallery/IMG_1115.jpg",
        alt: "Stunning Sunbeams over Mountain Valleys",
        category: "landscape",
        size: "medium"
    },
    {
        id: 4,
        src: "/gallery/IMG_4172.jpg",
        alt: "Traditional Stone Village in the Himalayas",
        category: "culture",
        size: "small"
    },
    {
        id: 5,
        src: "/gallery/IMG_4343.jpg",
        alt: "Joyful Moments on the Trekking Trail",
        category: "moments",
        size: "medium"
    },
    {
        id: 6,
        src: "/gallery/IMG_4345.jpg",
        alt: "Breathtaking Alpine Panorama",
        category: "landscape",
        size: "large"
    },
    {
        id: 7,
        src: "/gallery/IMG_4617.jpg",
        alt: "Ancient Buddhist Stupa and Prayer Flags",
        category: "culture",
        size: "small"
    },
    {
        id: 8,
        src: "/gallery/IMG_4627.jpg",
        alt: "Expedition Group Prepared for Ascent",
        category: "expeditions",
        size: "medium"
    },
    {
        id: 9,
        src: "/gallery/IMG_4643.jpg",
        alt: "A Serene High-Altitude Turquoise Lake",
        category: "landscape",
        size: "large"
    },
    {
        id: 10,
        src: "/gallery/IMG_5030.jpg",
        alt: "Celebrating reaching the High Pass",
        category: "moments",
        size: "medium"
    },
    {
        id: 11,
        src: "/gallery/IMG_5158.jpg",
        alt: "Himalayan Culture and Local Heritage",
        category: "culture",
        size: "small"
    },
    {
        id: 12,
        src: "/gallery/IMG_5205.jpg",
        alt: "Climbing through Glacier Icefalls",
        category: "expeditions",
        size: "large"
    },
    {
        id: 13,
        src: "/gallery/IMG_6265.jpg",
        alt: "Sunset Glow over Annapurna Massif",
        category: "landscape",
        size: "medium"
    },
    {
        id: 14,
        src: "/gallery/IMG_6376.jpg",
        alt: "Local Warmth and Hospitality in Tea House",
        category: "culture",
        size: "small"
    },
    {
        id: 15,
        src: "/gallery/IMG_7169.jpg",
        alt: "Shared Laughter at Basecamp",
        category: "moments",
        size: "medium"
    },
    {
        id: 16,
        src: "/gallery/IMG_7290.jpg",
        alt: "Dramatic Clouds hovering over Peaks",
        category: "landscape",
        size: "medium"
    },
    {
        id: 17,
        src: "/gallery/IMG_7292.jpg",
        alt: "Steep Climbing Trail to the Summit",
        category: "expeditions",
        size: "small"
    },
    {
        id: 18,
        src: "/gallery/IMG_7303.jpg",
        alt: "Mani Stone Inscriptions on the Trail",
        category: "culture",
        size: "medium"
    },
    {
        id: 19,
        src: "/gallery/okok.jpg",
        alt: "Chasing the Golden Hour on Top",
        category: "moments",
        size: "large"
    },
    {
        id: 20,
        src: "/gallery/oooo.jpg",
        alt: "Epic Mountain Range Horizon",
        category: "landscape",
        size: "medium"
    },
    {
        id: 21,
        src: "/gallery/opp.jpg",
        alt: "Trekking through Deep Snow Fields",
        category: "expeditions",
        size: "small"
    },
    {
        id: 22,
        src: "/gallery/ppp.jpg",
        alt: "Colorful Prayer Wheels at Monastery",
        category: "culture",
        size: "medium"
    },
    {
        id: 23,
        src: "/gallery/DSC00183.jpg",
        alt: "Breathtaking snow-dusted alpine valley and ridges",
        category: "landscape",
        size: "large"
    },
    {
        id: 24,
        src: "/gallery/DSC00200.jpg",
        alt: "Grand panorama of the frozen Himalayan peaks",
        category: "landscape",
        size: "medium"
    },
    {
        id: 25,
        src: "/gallery/DSC00326.jpg",
        alt: "Trekking group enjoying the majestic scenery",
        category: "moments",
        size: "medium"
    },
    {
        id: 26,
        src: "/gallery/DSC08043.jpg",
        alt: "Trekkers ascending a high snow-covered slope",
        category: "expeditions",
        size: "large"
    },
    {
        id: 27,
        src: "/gallery/DSC08119.jpg",
        alt: "Dramatic sunbeams kissing the sharp Himalayan ridges",
        category: "landscape",
        size: "medium"
    },
    {
        id: 28,
        src: "/gallery/DSC08142.jpg",
        alt: "Navigating deep snow trails in extreme altitudes",
        category: "expeditions",
        size: "small"
    },
    {
        id: 29,
        src: "/gallery/DSC08233.jpg",
        alt: "Trekkers passing traditional mountain stone structures",
        category: "culture",
        size: "medium"
    },
    {
        id: 30,
        src: "/gallery/IMG_4643 (2).jpg",
        alt: "Serene alpine valley under clear skies",
        category: "landscape",
        size: "medium"
    },
    {
        id: 31,
        src: "/gallery/IMG_5572 (1).jpg",
        alt: "Experiencing the rustic charm of highland teahouses",
        category: "moments",
        size: "small"
    },
    {
        id: 32,
        src: "/gallery/MardiHimal-Nepal-230.jpg",
        alt: "Stunning views from Mardi Himal Viewpoint",
        category: "landscape",
        size: "medium"
    },
    {
        id: 33,
        src: "/gallery/MardiHimal-Nepal-246.jpg",
        alt: "Climbing up the scenic ridges of Mardi Himal",
        category: "expeditions",
        size: "large"
    },
    {
        id: 34,
        src: "/gallery/Cover_photo_for_Mardi_himal .jpg",
        alt: "Golden sunset over Mardi Himal base camp",
        category: "landscape",
        size: "large"
    }
];

export function Gallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const CATEGORIES = [
        { id: "all", label: t('gallery.categories.all') },
        { id: "expeditions", label: t('gallery.categories.expeditions') },
        { id: "culture", label: t('gallery.categories.culture') },
        { id: "landscape", label: t('gallery.categories.landscape') },
        { id: "moments", label: t('gallery.categories.moments') },
    ];

    const filteredImages = useMemo(() => {
        if (activeCategory === "all") return galleryImages;
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
                        <SectionBadge>{t('gallery.badge')}</SectionBadge>
                        <SectionHeading dark={false} gradientText={t('gallery.gradient')} >
                            <span className="text-brand-dark/80"> {t('gallery.heading')}</span>
                        </SectionHeading>

                        <p className="text-brand-dark/60 text-lg font-medium leading-relaxed">
                            {t('gallery.description')}
                        </p>
                        <p className="text-brand-dark font-bold text-lg">
                            • High borosilicate glass (heat &amp; cold resistant)
                        </p>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 bg-brand-dark/5 p-1.5 rounded-[1.5rem] md:rounded-2xl md:overflow-visible">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`relative cursor-pointer px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-[10px] md:text-sm font-black md:font-bold uppercase tracking-widest md:tracking-normal transition-all duration-300 whitespace-nowrap ${activeCategory === cat.id
                                    ? "text-brand-light"
                                    : "text-brand-dark/40 hover:text-brand-dark"
                                    }`}
                            >
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-brand-dark rounded-xl shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat.label}</span>
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
                                    className={`relative group cursor-pointer overflow-hidden rounded-[2rem] bg-brand-dark/5 min-h-[250px] sm:min-h-[300px] ${image.size === 'large' ? 'md:row-span-2' : ''
                                        }`}
                                    onClick={() => openLightbox(image)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                                                {t(`gallery.categories.${image.category}`)}
                                            </span>
                                            <h3 className="text-white font-bold text-xl">{image.alt}</h3>
                                            <div className="pt-4 flex items-center text-brand-light gap-2 font-bold text-xs uppercase tracking-wider">
                                                <Maximize2 size={16} />
                                                <span>{t('gallery.viewDetails')}</span>
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
                        className="fixed inset-0 z-[100] bg-brand-dark/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 pt-20 md:pt-28 group"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute cursor-pointer top-20 md:top-24 right-4 md:right-8 z-[110] p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 hover:rotate-90"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 md:px-8 pointer-events-none z-[105]">
                            <button
                                onClick={prevImage}
                                className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 md:-translate-x-full md:group-hover:translate-x-0 md:opacity-0 md:group-hover:opacity-100 cursor-pointer backdrop-blur-md"
                            >
                                <ChevronLeft size={28} className="md:w-8 md:h-8" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300 md:translate-x-full md:group-hover:translate-x-0 md:opacity-0 md:group-hover:opacity-100 cursor-pointer backdrop-blur-md"
                            >
                                <ChevronRight size={28} className="md:w-8 md:h-8" />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center z-[101]">
                            <motion.div
                                key={selectedImage.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col h-full max-h-[85vh] md:max-h-[90vh] w-full bg-black/40"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex-1 min-h-0 w-full flex flex-col p-2 md:p-4">
                                    <div className="relative flex-1 w-full h-full">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            fill
                                            sizes="100vw"
                                            className="object-contain rounded-xl"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Info Panel */}
                                <div className="bg-brand-dark/90 backdrop-blur-md p-6 md:p-10 border-t border-white/5 w-full shrink-0">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                                        <div className="space-y-2 md:space-y-3">
                                            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-light text-brand-dark text-[10px] font-black uppercase tracking-[0.2em]">
                                                {t(`gallery.categories.${selectedImage.category}`)}
                                            </span>
                                            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-tight line-clamp-2">
                                                {selectedImage.alt}
                                            </h2>
                                        </div>
                                        <div className="text-brand-white/40 font-bold tracking-widest text-lg md:text-xl shrink-0">
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
