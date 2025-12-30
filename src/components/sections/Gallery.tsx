"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Dramatic mountain peaks at sunset",
        category: "Mountains",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers on a mountain trail",
        category: "Trekking",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
        alt: "Camping under the stars",
        category: "Camping",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80",
        alt: "Snow-capped Himalayan peaks",
        category: "Mountains",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Alpine meadow with wildflowers",
        category: "Nature",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise over mountain range",
        category: "Mountains",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Starry night over mountain peak",
        category: "Night",
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80",
        alt: "Suspension bridge in the mountains",
        category: "Trekking",
    },
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => setSelectedImage(null);

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    return (
        <section id="gallery" className="py-24 bg-brand-medium/10">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Moments from the <span className="text-brand-light">Mountains</span>
                    </h2>
                    <p className="text-lg text-brand-white/70">
                        Captured moments from our expeditions around the world.
                        Every image tells a story of adventure and discovery.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openLightbox(image, index)}
                            className={`relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >
                            <div className={`aspect-square ${index === 0 || index === 5 ? "md:aspect-auto md:h-full" : ""}`}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-brand-light/90 text-brand-dark text-sm font-medium">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 p-3 rounded-full bg-brand-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X className="h-6 w-6" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-6 p-3 rounded-full bg-brand-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </motion.button>

                        <motion.img
                            key={selectedImage.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-6 p-3 rounded-full bg-brand-white/10 text-white hover:bg-brand-light hover:text-brand-dark transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </motion.button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-white font-medium">{selectedImage.alt}</p>
                            <p className="text-brand-white/60 text-sm">
                                {currentIndex + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
