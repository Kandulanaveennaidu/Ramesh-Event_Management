import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '200px', // Start loading even earlier for better UX
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            {...props}
        >
            {/* Shimmer Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-dark-900 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-dark-800 to-transparent animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>
            )}

            {/* Actual Image */}
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    decoding="async"
                    className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </div>
    );
};

export default LazyImage;
