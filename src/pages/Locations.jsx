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
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                            Our Presence Across India
                        </h2>
                        <p className="text-dark-400">
                            Headquartered in Hyderabad, serving clients in 4 states
                        </p>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* Map placeholder */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-dark-900 border border-dark-800">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="relative inline-block mb-6">
                                        {/* India map outline placeholder */}
                                        <svg
                                            viewBox="0 0 400 400"
                                            className="w-64 h-64 text-dark-700"
                                            fill="currentColor"
                                        >
                                            <path d="M200 50 L270 80 L300 150 L320 200 L310 260 L280 300 L240 340 L200 360 L160 340 L120 300 L90 260 L80 200 L100 150 L130 80 Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-dark-700"
                                            />
                                            {/* Location markers */}
                                            <circle cx="200" cy="220" r="8" className="text-primary-500 fill-current animate-pulse" /> {/* Hyderabad */}
                                            <circle cx="190" cy="260" r="6" className="text-primary-500/70 fill-current" /> {/* AP */}
                                            <circle cx="140" cy="200" r="6" className="text-primary-500/70 fill-current" /> {/* Goa */}
                                            <circle cx="160" cy="140" r="6" className="text-primary-500/70 fill-current" /> {/* Rajasthan */}
                                        </svg>

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-primary-600/10 rounded-full blur-3xl"></div>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-6">
                                        {locations.map((loc) => (
                                            <div key={loc.name} className="flex items-center gap-2">
                                                <span className={`w-3 h-3 rounded-full ${loc.isHeadquarters ? 'bg-primary-500 animate-pulse' : 'bg-primary-500/70'}`}></span>
                                                <span className="text-dark-300 text-sm">{loc.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
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
