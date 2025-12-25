import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin,
    Facebook, Instagram, Twitter, Youtube,
    ArrowUp
} from 'lucide-react';
import logoImage from '../../assets/logo.jpg';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Weddings', path: '/services/marriage' },
        { name: 'Birthday', path: '/services/birthday' },
        { name: 'Corporate Events', path: '/services/corporate-events' },
        { name: 'House Warming', path: '/services/house-warming' },
        { name: 'Baby Shower', path: '/services/baby-shower' },
    ];

    return (
        <footer className="relative bg-dark-950 border-t border-dark-800">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-6 pt-16 pb-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <motion.img
                                src={logoImage}
                                alt="RAM Event Management"
                                className="h-24 w-auto object-contain rounded-lg"
                                style={{
                                    mixBlendMode: 'lighten',
                                    filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))'
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            />
                        </Link>
                        <p className="text-dark-400 text-sm leading-relaxed mb-6">
                            Where Events Reflects Culture, Traditions, and Sanathana Dharma. Creating memorable experiences since years.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-dark-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-dark-400 hover:text-primary-500 transition-colors text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link
                                        to={service.path}
                                        className="text-dark-400 hover:text-primary-500 transition-colors text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+917672013249"
                                    className="flex items-start gap-3 text-dark-400 hover:text-primary-500 transition-colors group"
                                >
                                    <Phone className="w-5 h-5 mt-0.5 text-primary-500" />
                                    <div className="text-sm">
                                        <p>+91 7672013249</p>
                                        <p>+91 8886313249</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:Ramevents0810@gmail.com"
                                    className="flex items-start gap-3 text-dark-400 hover:text-primary-500 transition-colors"
                                >
                                    <Mail className="w-5 h-5 mt-0.5 text-primary-500" />
                                    <span className="text-sm">Ramevents0810@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-dark-400">
                                    <MapPin className="w-5 h-5 mt-0.5 text-primary-500" />
                                    <span className="text-sm">Hyderabad, Telangana, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-dark-800 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-dark-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} RAM Event Management Pvt. Ltd. All rights reserved.
                        </p>

                        {/* Back to top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            className="flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors text-sm"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
