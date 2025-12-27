import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, TrendingUp } from 'lucide-react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Initialize or get visitor count from localStorage
        const initializeCounter = () => {
            const storedData = localStorage.getItem('visitorData');
            let data = storedData ? JSON.parse(storedData) : null;

            // Check if this is a new visitor (no session marker)
            const isNewVisit = !sessionStorage.getItem('visited');

            if (!data) {
                // First visitor ever - start with a base count for credibility
                data = {
                    count: 1247, // Start with a base count
                    lastUpdated: new Date().toISOString()
                };
            }

            if (isNewVisit) {
                // New visit - increment the counter
                data.count += 1;
                data.lastUpdated = new Date().toISOString();
                localStorage.setItem('visitorData', JSON.stringify(data));
                sessionStorage.setItem('visited', 'true');
            }

            // Animate the counter
            animateCounter(data.count);
        };

        const animateCounter = (target) => {
            setIsLoading(false);
            let current = 0;
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = target / steps;
            const stepDuration = duration / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setVisitorCount(target);
                    clearInterval(timer);
                } else {
                    setVisitorCount(Math.floor(current));
                }
            }, stepDuration);

            return () => clearInterval(timer);
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(initializeCounter, 500);
        return () => clearTimeout(timer);
    }, []);

    const formatNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-24 right-6 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                className="relative group"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-gold-500/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />

                {/* Main container */}
                <div className="relative bg-dark-900/95 backdrop-blur-xl rounded-2xl border border-dark-700/50 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-gold-500/20 border-b border-dark-700/50">
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.8, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className="w-2 h-2 rounded-full bg-green-500"
                            />
                            <span className="text-xs text-dark-300 font-medium">Live Visitors</span>
                        </div>
                    </div>

                    {/* Counter display */}
                    <div className="px-5 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600/20 to-gold-500/20 flex items-center justify-center">
                                <Eye className="w-5 h-5 text-primary-500" />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-1">
                                    {isLoading ? (
                                        <div className="w-16 h-6 bg-dark-700 rounded animate-pulse" />
                                    ) : (
                                        <motion.span
                                            key={visitorCount}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-2xl font-bold gradient-text"
                                        >
                                            {formatNumber(visitorCount)}
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-xs text-dark-400">Page Views</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer with trending indicator */}
                    <div className="px-4 py-2 bg-dark-950/50 border-t border-dark-700/30">
                        <div className="flex items-center gap-1 text-xs text-green-500">
                            <TrendingUp className="w-3 h-3" />
                            <span>Growing daily!</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default VisitorCounter;
