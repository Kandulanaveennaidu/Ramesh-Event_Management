import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
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

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
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

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className="btn-primary text-sm py-3 px-6"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:text-primary-500 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-dark-950/98 backdrop-blur-lg border-t border-dark-800"
                    >
                        <div className="container mx-auto px-6 py-6 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
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
                                <Link to="/contact" className="btn-primary w-full text-center">
                                    Get Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
