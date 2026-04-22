import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, Expand, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import LazyImage from '../components/ui/LazyImage';
import { services } from '../data/services';

const Gallery = () => {
    // Combine all gallery images from all services
    const allGalleryImages = services.reduce((acc, service) => {
        if (service.gallery) {
            const serviceImages = service.gallery.map(img => ({
                src: img,
                category: service.name,
                slug: service.slug
            }));
            return [...acc, ...serviceImages];
        }
        return acc;
    }, []);

    const categories = ['All', ...new Set(allGalleryImages.map(img => img.category))];
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayLimit, setDisplayLimit] = useState(8);

    useEffect(() => {
        setDisplayLimit(8);
    }, [activeCategory]);

    const filteredImages = activeCategory === 'All'
        ? allGalleryImages
        : allGalleryImages.filter(img => img.category === activeCategory);
    
    const visibleImages = filteredImages.slice(0, displayLimit);

    const handleLoadMore = () => {
        setDisplayLimit(prev => prev + 8);
    };

    return (
        <div className="pt-32 pb-20 overflow-hidden min-h-screen bg-dark-950">
            <div className="container mx-auto px-6">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/30 text-primary-500 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Event <span className="gradient-text">Gallery</span>
                    </h1>
                    <p className="text-dark-300 text-lg max-w-2xl mx-auto">
                        Witness the magic of our meticulously planned events. Every detail crafted to perfection, 
                        every moment captured for eternity.
                    </p>
                </AnimatedSection>

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                    : 'bg-dark-900 text-dark-400 border border-dark-800 hover:border-primary-600/50 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {visibleImages.map((img, index) => (
                            <motion.div
                                key={img.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-900 border border-dark-800 cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <LazyImage
                                    src={img.src}
                                    alt={img.category}
                                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-primary-500 text-sm font-medium mb-1">{img.category}</p>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-white font-bold text-lg">Professional Setup</h3>
                                            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                                                <Expand className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                {displayLimit < filteredImages.length && (
                    <AnimatedSection delay={0.2} className="text-center mt-16">
                        <button
                            onClick={handleLoadMore}
                            className="btn-secondary group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Load More Memories
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-primary-600/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                    </AnimatedSection>
                )}

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <Camera className="w-16 h-16 text-dark-700 mx-auto mb-6 opacity-20" />
                        <p className="text-dark-500 text-xl font-medium">No images found for this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-dark-950/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl border border-dark-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.category}
                                className="w-full h-full object-contain bg-dark-950"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-950 to-transparent">
                                <p className="text-primary-500 font-medium mb-2">{selectedImage.category}</p>
                                <h2 className="text-white text-3xl font-display font-bold">Premium Event Management</h2>
                            </div>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-dark-900/80 border border-dark-800 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
                            >
                                <span className="text-2xl">&times;</span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
