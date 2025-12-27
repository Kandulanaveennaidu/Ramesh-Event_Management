import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Construction, Sparkles } from 'lucide-react';

const ProgressBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        // Check if user has closed the banner in this session
        const bannerClosed = sessionStorage.getItem('progressBannerClosed');
        if (!bannerClosed) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setIsClosed(true);
        sessionStorage.setItem('progressBannerClosed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && !isClosed && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600/90 to-gold-500/90 backdrop-blur-xl shadow-2xl border border-white/20">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 opacity-20"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                                style={{
                                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                                    backgroundSize: '30px 30px',
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative px-6 py-4">
                            <div className="flex items-center gap-4">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center"
                                >
                                    <Construction className="w-6 h-6 text-white" />
                                </motion.div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-white font-bold text-lg">
                                            Website In Progress
                                        </h3>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <Sparkles className="w-4 h-4 text-gold-300" />
                                        </motion.div>
                                    </div>
                                    <p className="text-white/90 text-sm">
                                        We're crafting something amazing! Stay tuned for updates.
                                    </p>
                                </div>

                                <button
                                    onClick={handleClose}
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Progress bar animation */}
                        <motion.div
                            className="h-1 bg-white/30"
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: 10, ease: 'linear' }}
                            onAnimationComplete={handleClose}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProgressBanner;
