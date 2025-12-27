import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Rocket, Sparkles, Bell, CheckCircle, Heart, Calendar, MapPin } from 'lucide-react';
import logoImage from '../../assets/logo.jpg';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleGetQuoteClick = (e) => {
        e.preventDefault();
        setIsOpen(false);
        setShowComingSoon(true);
    };

    const handleCloseModal = () => {
        setShowComingSoon(false);
        setIsSubscribed(false);
        setEmail('');
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            subscribers.push({ email, subscribedAt: new Date().toISOString() });
            localStorage.setItem('subscribers', JSON.stringify(subscribers));
            setIsSubscribed(true);
            setTimeout(() => {
                handleCloseModal();
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
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${scrolled
                    ? 'bg-dark-950/95 backdrop-blur-lg shadow-lg shadow-black/20'
                    : 'bg-transparent'
                    }`}
            >
                {/* Top bar */}
                <div className="hidden md:block border-b border-dark-800/50">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-end gap-6 py-2 text-sm">
                            <a href="tel:+917672013249" className="flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors">
                                <Phone className="w-3 h-3" />
                                <span>+91 7672013249</span>
                            </a>
                            <a href="mailto:Ramevents0810@gmail.com" className="flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors">
                                <Mail className="w-3 h-3" />
                                <span>Ramevents0810@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main navbar */}
                <nav className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img
                                    src={logoImage}
                                    alt="RAM Event Management"
                                    className="h-20 w-auto object-contain rounded-lg"
                                    style={{
                                        mixBlendMode: 'lighten',
                                        filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))'
                                    }}
                                />
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="relative px-5 py-2 group"
                                >
                                    <span className={`text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-primary-500'
                                        : 'text-dark-300 group-hover:text-white'
                                        }`}>
                                        {link.name}
                                    </span>
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <span className="absolute inset-0 rounded-lg bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors"></span>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button - Shows Coming Soon Modal */}
                        <div className="hidden lg:block">
                            <button
                                onClick={handleGetQuoteClick}
                                className="btn-primary text-sm py-3 px-6"
                            >
                                Get Quote
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors z-[9999]"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 top-0 bg-dark-950 z-[9999]"
                        style={{ paddingTop: '96px' }}
                    >
                        <div className="absolute inset-0 bg-dark-950/98 backdrop-blur-xl" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-28 right-6 p-3 bg-primary-600 rounded-full text-white hover:bg-primary-500 transition-all z-50 shadow-lg"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="relative container mx-auto px-6 py-6 pt-20 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${location.pathname === link.path
                                            ? 'bg-primary-600/20 text-primary-500'
                                            : 'text-dark-300 hover:bg-dark-800 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="pt-4"
                            >
                                <button
                                    onClick={handleGetQuoteClick}
                                    className="btn-primary w-full text-center"
                                >
                                    Get Quote
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Coming Soon Modal for Get Quote */}
            <AnimatePresence>
                {showComingSoon && (
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
                                            Coming Soon!
                                        </h2>
                                        <p className="text-dark-300 text-sm">Online Quote System</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-4 sm:px-6 py-4 sm:py-5">
                                <p className="text-dark-300 text-sm sm:text-base mb-4 sm:mb-5">
                                    Our online quote system is under development. Meanwhile, contact us directly for personalized quotes:
                                </p>

                                {/* Contact Options */}
                                <div className="space-y-3 mb-5">
                                    <a
                                        href="tel:+917672013249"
                                        className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/50 border border-dark-800 hover:border-primary-600/50 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Call Us</p>
                                            <p className="text-dark-400 text-xs">+91 7672013249</p>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:Ramevents0810@gmail.com"
                                        className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/50 border border-dark-800 hover:border-primary-600/50 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Email Us</p>
                                            <p className="text-dark-400 text-xs">Ramevents0810@gmail.com</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Services Grid */}
                                <p className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-primary-500" />
                                    What's Coming Soon:
                                </p>
                                <div className="grid grid-cols-2 gap-2 mb-5">
                                    {upcomingServices.map((service, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.08 }}
                                            className="p-3 rounded-lg bg-dark-950/50 border border-dark-800"
                                        >
                                            <div className="w-7 h-7 rounded-md bg-primary-600/20 flex items-center justify-center mb-1.5">
                                                <service.icon className="w-3.5 h-3.5 text-primary-500" />
                                            </div>
                                            <h4 className="text-white font-semibold text-xs">{service.title}</h4>
                                            <p className="text-dark-400 text-[10px] leading-tight">{service.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Subscribe form */}
                                {!isSubscribed ? (
                                    <form onSubmit={handleSubscribe}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Bell className="w-4 h-4 text-primary-500" />
                                            <span className="text-white font-medium text-sm">Get notified when ready!</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2">
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
                                    RAM Event Management - Your Celebrations, Our Passion! 🙏
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
