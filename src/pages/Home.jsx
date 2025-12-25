import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Sparkles, Star, Users, Calendar, Award,
    CheckCircle2, Play
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import StatCounter from '../components/ui/StatCounter';
import { services } from '../data/services';

const Home = () => {
    const featuredServices = services.slice(0, 6);

    const whyChooseUs = [
        {
            icon: Star,
            title: 'Traditional Excellence',
            description: 'Deep-rooted knowledge of Vedic traditions and cultural ceremonies.',
        },
        {
            icon: Users,
            title: 'Experienced Team',
            description: 'Dedicated professionals with years of event management expertise.',
        },
        {
            icon: Calendar,
            title: 'End-to-End Planning',
            description: 'From concept to execution, we handle every detail meticulously.',
        },
        {
            icon: Award,
            title: 'Quality Assurance',
            description: 'Uncompromising quality standards for memorable events.',
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
                {/* Background */}
                <div className="absolute inset-0 bg-hero-pattern">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/80 to-dark-950"></div>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e67e22' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary-600/10 blur-xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gold-400/10 blur-xl"
                />

                <div className="relative container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/30 text-primary-500 text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Premium Event Management Services</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
                        >
                            Where Events Reflect{' '}
                            <span className="gradient-text">Culture, Traditions</span>
                            {' '}& Sanathana Dharma
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-dark-300 max-w-2xl mx-auto mb-10"
                        >
                            From sacred ceremonies to grand celebrations, we create memorable experiences
                            that honor your traditions while exceeding your expectations.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link to="/services" className="btn-primary group">
                                <span>Explore Services</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-secondary group">
                                <Play className="w-5 h-5 mr-2" />
                                <span>Get in Touch</span>
                            </Link>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-dark-500 text-sm"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                <span>500+ Events Completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                <span>4 States Coverage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary-500" />
                                <span>100% Client Satisfaction</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-primary-500"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Our Services
                        </span>
                        <h2 className="section-title mb-4">What We Offer</h2>
                        <p className="section-subtitle">
                            Comprehensive event management services that blend tradition with modern excellence
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredServices.map((service, index) => (
                            <ServiceCard key={service.slug} service={service} index={index} />
                        ))}
                    </div>

                    <AnimatedSection delay={0.4} className="text-center mt-12">
                        <Link to="/services" className="btn-secondary group">
                            <span>View All Services</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="section-title mb-4">The RAM Advantage</h2>
                        <p className="section-subtitle">
                            Experience the difference of working with a team that truly understands tradition and excellence
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-8 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500 group"
                                    whileHover={{ y: -8 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 mb-6 group-hover:scale-110 transition-transform duration-500"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <item.icon className="w-8 h-8 text-primary-500" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-dark-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-dark-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="section-title mb-4">Our Impact in Numbers</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatCounter value="500" suffix="+" label="Events Completed" icon={Calendar} />
                        <StatCounter value="10" suffix="+" label="Years Experience" icon={Award} />
                        <StatCounter value="4" suffix="" label="States Covered" icon={Users} />
                        <StatCounter value="100" suffix="%" label="Client Satisfaction" icon={Star} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-gold-400/20"></div>
                            <div className="absolute inset-0 bg-dark-950/80"></div>

                            {/* Content */}
                            <div className="relative p-12 md:p-16 text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                                    Ready to Create Your <span className="gradient-text">Dream Event</span>?
                                </h2>
                                <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-10">
                                    Let us help you bring your vision to life. Contact us today to discuss your event and get a personalized quote.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link to="/contact" className="btn-primary group">
                                        <span>Get Free Quote</span>
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

export default Home;
