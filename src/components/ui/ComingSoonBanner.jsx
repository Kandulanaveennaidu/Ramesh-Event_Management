import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Sparkles, Bell, Mail, CheckCircle, Heart, Calendar, MapPin, Phone } from 'lucide-react';

const ComingSoonBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Show banner on every page load after 1.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsVisible(false);
        setIsClosed(true);
        // No sessionStorage - banner will show again on refresh
    };

    const handleBannerClick = (e) => {
        if (e.target.closest('.close-button')) {
            return;
        }
        setShowModal(true);
    };

    const handleCloseModal = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setShowModal(false);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            subscribers.push({ email, subscribedAt: new Date().toISOString() });
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
            setIsSubscribed(true);
            setTimeout(() => {
                setShowModal(false);
                handleClose();
            }, 2000);
        }
    };

    const upcomingServices = [
        { icon: Heart, title: 'Wedding Planning', description: 'Complete wedding management' },
        { icon: Calendar, title: 'Event Booking', description: 'Easy online scheduling' },
        { icon: MapPin, title: 'New Locations', description: 'Expanding to more cities' },
        { icon: Phone, title: '24/7 Support', description: 'Round the clock help' },
    ];

    return (
        <>
            {/* Compact Banner - Medium Size */}
            <AnimatePresence>
                {isVisible && !isClosed && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                        className="fixed top-20 right-4 sm:right-6 w-auto max-w-[280px] sm:max-w-xs cursor-pointer"
                        style={{ zIndex: 9999 }}
                        onClick={handleBannerClick}
                    >
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 to-gold-500 shadow-xl border border-white/20">
                            {/* Content - Compact */}
                            <div className="relative px-3 py-2.5 sm:px-4 sm:py-3">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <motion.div
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center"
                                    >
                                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </motion.div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <h3 className="text-white font-bold text-sm sm:text-base">
                                                Coming Soon!
                                            </h3>
                                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-300" />
                                        </div>
                                        <p className="text-white/80 text-xs truncate">
                                            Tap to see more
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="close-button flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                                    >
                                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <motion.div
                                className="h-0.5 bg-white/40"
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: 12, ease: 'linear' }}
                                onAnimationComplete={handleClose}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
                        style={{ zIndex: 99999 }}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-sm sm:max-w-md bg-dark-900 rounded-2xl sm:rounded-3xl border border-dark-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-4 bg-gradient-to-r from-primary-600/20 to-gold-500/20">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-dark-800/80 hover:bg-dark-700 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </button>

                                <div className="flex items-center gap-3 pr-8">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center flex-shrink-0"
                                    >
                                        <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-display font-bold text-white">
                                            We're Expanding!
                                        </h2>
                                        <p className="text-dark-300 text-sm">RAM Event Management</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-4 sm:px-6 py-4 sm:py-5">
                                <p className="text-dark-300 text-sm sm:text-base mb-4 sm:mb-5">
                                    We're improving our services to make your celebrations even more special:
                                </p>

                                {/* Services Grid - Responsive */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
                                    {upcomingServices.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.08 }}
                                            className="p-3 rounded-lg sm:rounded-xl bg-dark-950/50 border border-dark-800"
                                        >
                                            <div className="w-8 h-8 rounded-md bg-primary-600/20 flex items-center justify-center mb-2">
                                                <service.icon className="w-4 h-4 text-primary-500" />
                                            </div>
                                            <h4 className="text-white font-semibold text-xs sm:text-sm mb-0.5">{service.title}</h4>
                                            <p className="text-dark-400 text-[10px] sm:text-xs leading-tight">{service.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Subscribe form - Responsive */}
                                {!isSubscribed ? (
                                    <form onSubmit={handleSubscribe}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Bell className="w-4 h-4 text-primary-500" />
                                            <span className="text-white font-medium text-sm">Get notified!</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                            <div className="flex-1 relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-500" />
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full pl-10 pr-3 py-2.5 bg-dark-950 border border-dark-700 rounded-lg text-white text-sm placeholder:text-dark-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                                                />
                                            </div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-gold-500 rounded-lg text-white text-sm font-semibold shadow-lg"
                                            >
                                                Notify Me
                                            </motion.button>
                                        </div>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <div>
                                            <p className="text-green-500 font-semibold text-sm">You're on the list!</p>
                                            <p className="text-green-400/80 text-xs">We'll notify you soon.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-4 sm:px-6 py-3 bg-dark-950/50 border-t border-dark-800">
                                <p className="text-center text-dark-500 text-xs">
                                    Thank you for choosing RAM Event Management! 🙏
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ComingSoonBanner;
