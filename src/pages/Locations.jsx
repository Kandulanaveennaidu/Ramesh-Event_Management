import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import LocationCard from '../components/ui/LocationCard';

const locations = [
    {
        name: 'Telangana',
        description: 'Our headquarters in Hyderabad serves the entire Telangana region. Experience our full range of premium event management services.',
        isHeadquarters: true,
    },
    {
        name: 'Andhra Pradesh',
        description: 'Extending our expertise to Andhra Pradesh, we bring traditional ceremonies and modern celebrations to the entire state.',
        isHeadquarters: false,
    },
    {
        name: 'Goa',
        description: 'Perfect destination weddings and beach celebrations with our specialized Goa team combining local expertise with our signature touch.',
        isHeadquarters: false,
    },
    {
        name: 'Rajasthan',
        description: 'Royal celebrations in the land of palaces. We create majestic events that capture the grandeur of Rajasthani heritage.',
        isHeadquarters: false,
    },
];

const Locations = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-b from-dark-900 to-dark-950">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="relative container mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-6"
                        >
                            Our Locations
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                        >
                            Serving Across <span className="gradient-text">India</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            From our headquarters in Hyderabad, we've expanded our premium event
                            management services across multiple states. Wherever you are, we bring
                            the same dedication to excellence and tradition.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <LocationCard key={location.name} location={location} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Real-time Location
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                            Our Presence Across India
                        </h2>
                        <p className="text-dark-300 text-lg">
                            Headquartered in <span className="text-primary-500 font-bold">Hyderabad</span>, serving clients in 4 major states
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Map Container */}
                        <AnimatedSection className="lg:col-span-2 rounded-3xl overflow-hidden border border-dark-800 shadow-2xl shadow-primary-600/5 aspect-video lg:aspect-auto lg:h-[600px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2736209351056!2d78.4344583!3d17.4069333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 grayscale-[0.2]"
                            ></iframe>
                        </AnimatedSection>

                        {/* Location Details */}
                        <div className="space-y-6">
                            <AnimatedSection delay={0.2} className="card-glass p-8 border-primary-600/20">
                                <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                                    Corporate Headquarters
                                </h3>
                                <p className="text-dark-300 mb-6">
                                    Our central operations hub managing all events across India.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
                                        <div className="w-10 h-10 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-500 shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Hyderabad, Telangana</p>
                                            <p className="text-dark-400 text-sm">Corporate Office</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3} className="card-glass p-8">
                                <h3 className="text-xl font-display font-bold text-white mb-6">Service Reach</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {locations.map((loc) => (
                                        <div key={loc.name} className="flex items-center gap-3 p-3 rounded-xl bg-dark-800/30 border border-dark-800">
                                            <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                                            <span className="text-dark-300 text-sm font-medium">{loc.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-dark-800">
                                    <p className="text-dark-400 text-sm italic">
                                        * Also providing specialized services for destination weddings across all major Indian heritage cities.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-gold-400/20"></div>
                            <div className="absolute inset-0 bg-dark-950/80"></div>

                            {/* Content */}
                            <div className="relative p-12 md:p-16 text-center">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                    Planning an Event in Your City?
                                </h2>
                                <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-10">
                                    No matter where you are located, our team will travel to you.
                                    Contact us to discuss your event requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link to="/contact" className="btn-primary group">
                                        <span>Contact Us</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <a
                                        href="tel:+917672013249"
                                        className="btn-secondary"
                                    >
                                        Call: +91 7672013249
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Locations;
