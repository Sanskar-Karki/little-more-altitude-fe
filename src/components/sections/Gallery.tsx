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
    // Moments
    {
        id: 1,
        src: "/gallery/moments/DSC00326.jpg",
        alt: "Trekking group enjoying the majestic scenery",
        category: "moments",
        size: "large"
    },
    {
        id: 2,
        src: "/gallery/moments/DSC08043.jpg",
        alt: "Trekkers ascending a high snow-covered slope",
        category: "moments",
        size: "medium"
    },
    {
        id: 3,
        src: "/gallery/moments/DSC08099.jpeg",
        alt: "Majestic moment beneath a snow-capped Himalayan peak",
        category: "moments",
        size: "medium"
    },
    {
        id: 4,
        src: "/gallery/moments/DSC08161.jpeg",
        alt: "Trekkers traversing a high mountain ridge",
        category: "moments",
        size: "small"
    },
    {
        id: 5,
        src: "/gallery/moments/IMG_1115.jpg",
        alt: "Stunning sunbeams over the mountain valleys",
        category: "moments",
        size: "medium"
    },
    {
        id: 6,
        src: "/gallery/moments/IMG_4172.jpg",
        alt: "A quiet moment in a traditional stone village",
        category: "moments",
        size: "small"
    },
    {
        id: 7,
        src: "/gallery/moments/IMG_4343.jpg",
        alt: "Joyful moments on the trekking trail",
        category: "moments",
        size: "large"
    },
    {
        id: 8,
        src: "/gallery/moments/IMG_4345.jpg",
        alt: "Breathtaking alpine panorama",
        category: "moments",
        size: "medium"
    },
    {
        id: 9,
        src: "/gallery/moments/IMG_4617.jpg",
        alt: "Pausing by ancient prayer flags",
        category: "moments",
        size: "small"
    },
    {
        id: 10,
        src: "/gallery/moments/IMG_4627.jpg",
        alt: "The group prepared for the ascent",
        category: "moments",
        size: "medium"
    },
    {
        id: 11,
        src: "/gallery/moments/IMG_4643.jpg",
        alt: "Reflecting beside a serene high-altitude lake",
        category: "moments",
        size: "large"
    },
    {
        id: 12,
        src: "/gallery/moments/IMG_5030.jpg",
        alt: "Celebrating reaching the high pass",
        category: "moments",
        size: "medium"
    },
    {
        id: 13,
        src: "/gallery/moments/IMG_5158.jpg",
        alt: "Sharing the journey along the trail",
        category: "moments",
        size: "small"
    },
    {
        id: 14,
        src: "/gallery/moments/IMG_5205.jpg",
        alt: "Climbing through glacier icefalls together",
        category: "moments",
        size: "large"
    },
    {
        id: 15,
        src: "/gallery/moments/IMG_6265.jpg",
        alt: "Sunset glow over the Annapurna massif",
        category: "moments",
        size: "medium"
    },
    {
        id: 16,
        src: "/gallery/moments/IMG_6376.jpg",
        alt: "Local warmth and hospitality in a tea house",
        category: "moments",
        size: "small"
    },
    {
        id: 17,
        src: "/gallery/moments/IMG_7169.jpg",
        alt: "Shared laughter at basecamp",
        category: "moments",
        size: "medium"
    },
    {
        id: 18,
        src: "/gallery/moments/IMG_7290.jpg",
        alt: "Dramatic clouds hovering over the peaks",
        category: "moments",
        size: "medium"
    },
    {
        id: 19,
        src: "/gallery/moments/IMG_7292.jpg",
        alt: "On the steep climbing trail",
        category: "moments",
        size: "small"
    },
    {
        id: 20,
        src: "/gallery/moments/okok.jpg",
        alt: "Chasing the golden hour on top",
        category: "moments",
        size: "large"
    },
    {
        id: 21,
        src: "/gallery/moments/oooo.jpg",
        alt: "Taking in the epic mountain horizon",
        category: "moments",
        size: "medium"
    },
    {
        id: 22,
        src: "/gallery/moments/opp.jpg",
        alt: "Trekking through deep snow fields",
        category: "moments",
        size: "small"
    },
    {
        id: 23,
        src: "/gallery/moments/ppp.jpg",
        alt: "Spinning the colorful prayer wheels",
        category: "moments",
        size: "medium"
    },
    // Culture
    {
        id: 24,
        src: "/gallery/culture/DSC08119.jpg",
        alt: "Dramatic sunbeams kissing the sharp Himalayan ridges",
        category: "culture",
        size: "medium"
    },
    {
        id: 25,
        src: "/gallery/culture/DSC08142.jpg",
        alt: "Traditional life amid extreme altitudes",
        category: "culture",
        size: "large"
    },
    {
        id: 26,
        src: "/gallery/culture/DSC08233.jpg",
        alt: "Traditional mountain stone structures along the trail",
        category: "culture",
        size: "medium"
    },
    {
        id: 27,
        src: "/gallery/culture/gatlang-tamang-village-trek-9-days-8-night_k5ea8.jpeg",
        alt: "Gatlang Tamang village heritage",
        category: "culture",
        size: "medium"
    },
    // Summits
    {
        id: 28,
        src: "/gallery/summits/2.png",
        alt: "Towering Himalayan summit",
        category: "summits",
        size: "large"
    },
    {
        id: 29,
        src: "/gallery/summits/COVER PHOTO FOR MANASLU.png",
        alt: "Manaslu — the spirit mountain",
        category: "summits",
        size: "medium"
    },
    {
        id: 30,
        src: "/gallery/summits/Cover_photo_for_Mardi_himal .jpg",
        alt: "Golden sunset over Mardi Himal base camp",
        category: "summits",
        size: "large"
    },
    {
        id: 31,
        src: "/gallery/summits/IMG_5572 (1).jpg",
        alt: "Approaching the summit ridge",
        category: "summits",
        size: "small"
    },
    {
        id: 32,
        src: "/gallery/summits/IMG_7303.jpg",
        alt: "High on the climbing route",
        category: "summits",
        size: "medium"
    },
    {
        id: 33,
        src: "/gallery/summits/Island-Peak.jpg.webp",
        alt: "Island Peak rising above the glacier",
        category: "summits",
        size: "medium"
    },
    {
        id: 34,
        src: "/gallery/summits/MardiHimal-Nepal-230.jpg",
        alt: "Stunning views from Mardi Himal viewpoint",
        category: "summits",
        size: "medium"
    },
    {
        id: 35,
        src: "/gallery/summits/MardiHimal-Nepal-246.jpg",
        alt: "Climbing the scenic ridges of Mardi Himal",
        category: "summits",
        size: "large"
    },
    // Landscape
    {
        id: 36,
        src: "/gallery/landscape/DSC00183.jpg",
        alt: "Breathtaking snow-dusted alpine valley and ridges",
        category: "landscape",
        size: "large"
    },
    {
        id: 37,
        src: "/gallery/landscape/DSC00200.jpg",
        alt: "Grand panorama of the frozen Himalayan peaks",
        category: "landscape",
        size: "medium"
    },
    {
        id: 38,
        src: "/gallery/landscape/big.jpg",
        alt: "Sweeping view across the Himalayan range",
        category: "landscape",
        size: "large"
    },
    {
        id: 39,
        src: "/gallery/landscape/c68e3cfae1eb9c6d842f86a27b410bcd-v11.jpg",
        alt: "Serene alpine valley under clear skies",
        category: "landscape",
        size: "medium"
    },
    {
        id: 40,
        src: "/gallery/landscape/images_4d9adf24-3b7c-42.jpg",
        alt: "Epic mountain range horizon",
        category: "landscape",
        size: "medium"
    }
];

export function Gallery() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const CATEGORIES = [
        { id: "all", label: t('gallery.categories.all') },
        { id: "moments", label: t('gallery.categories.moments') },
        { id: "culture", label: t('gallery.categories.culture') },
        { id: "summits", label: t('gallery.categories.summits') },
        { id: "landscape", label: t('gallery.categories.landscape') },
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
