import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

const Services = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-b from-dark-900 to-dark-950">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="relative container mx-auto px-6">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-6"
                        >
                            Our Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                        >
                            Complete Event <span className="gradient-text">Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            From sacred ceremonies to grand celebrations, we offer comprehensive event
                            management services that blend tradition with modern excellence. Explore our
                            range of services designed to make your special moments unforgettable.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    {/* Traditional Ceremonies */}
                    <AnimatedSection className="mb-12">
                        <h2 className="text-2xl font-display font-bold text-white mb-2">
                            Traditional Ceremonies
                        </h2>
                        <p className="text-dark-400">
                            Sacred rituals performed with authentic Vedic traditions
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                        {services.filter(s => s.sanskritName).map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>

                    {/* Other Events */}
                    <AnimatedSection className="mb-12">
                        <h2 className="text-2xl font-display font-bold text-white mb-2">
                            Corporate & Social Events
                        </h2>
                        <p className="text-dark-400">
                            Professional event management for all occasions
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.filter(s => !s.sanskritName).map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-gold-400/20"></div>
                            <div className="absolute inset-0 bg-dark-950/80"></div>

                            {/* Content */}
                            <div className="relative p-12 md:p-16 text-center">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                    Can't Find What You're Looking For?
                                </h2>
                                <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-10">
                                    We offer customized event solutions tailored to your specific needs.
                                    Contact us to discuss your requirements.
                                </p>
                                <Link to="/contact" className="btn-primary group">
                                    <span>Get in Touch</span>
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Services;
