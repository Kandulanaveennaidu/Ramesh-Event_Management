import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, CheckCircle2, Phone,
    MessageCircle, Calendar, Star
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { getServiceBySlug, services } from '../data/services';

const ServiceDetail = () => {
    const { serviceName } = useParams();
    const service = getServiceBySlug(serviceName);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;

    // Get related services (excluding current)
    const relatedServices = services
        .filter(s => s.slug !== service.slug)
        .slice(0, 3);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
                </div>

                <div className="relative container mx-auto px-6">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <span>Back to Services</span>
                        </Link>
                    </motion.div>

                    <div className="max-w-3xl">
                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 flex items-center justify-center mb-6"
                        >
                            <Icon className="w-10 h-10 text-primary-500" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4"
                        >
                            {service.name}
                        </motion.h1>

                        {service.sanskritName && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl text-primary-500 font-medium mb-6"
                            >
                                {service.sanskritName}
                            </motion.p>
                        )}

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            {service.fullDescription}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Our Process
                        </span>
                        <h2 className="section-title mb-4">How We Work</h2>
                        <p className="section-subtitle">
                            A systematic approach to ensure your event is perfect
                        </p>
                    </AnimatedSection>

                    <div className="max-w-4xl mx-auto">
                        {service.process.map((step, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 0.1}
                                className="mb-8 last:mb-0"
                            >
                                <motion.div
                                    className="relative flex gap-6"
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Step number */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center text-white font-bold text-lg">
                                            {step.step}
                                        </div>
                                        {index < service.process.length - 1 && (
                                            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-dark-800 -translate-x-1/2 h-8"></div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <div className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-dark-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                                What's Included
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Complete Package Benefits
                            </h2>
                            <p className="text-dark-300 mb-8">
                                When you choose RAM Event Management for your {service.name.toLowerCase()},
                                you get a comprehensive package designed to make your event seamless and memorable.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                        <span className="text-dark-300">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full aspect-[4/3] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent"></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-gold-400/30"></div>
                            <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm"></div>

                            {/* Content */}
                            <div className="relative p-12 md:p-16">
                                <div className="max-w-2xl mx-auto text-center">
                                    <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-6" />
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                        Ready to Book Your {service.name}?
                                    </h2>
                                    <p className="text-dark-300 text-lg mb-10">
                                        Contact us today to discuss your requirements and get a personalized quote.
                                        Our team is ready to help you create the perfect event.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <Link to="/contact" className="btn-primary group">
                                            <span>Get Free Quote</span>
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <a
                                            href="https://wa.me/917672013249"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary group"
                                        >
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            <span>WhatsApp Us</span>
                                        </a>
                                    </div>

                                    <div className="mt-8 flex items-center justify-center gap-6 text-dark-400 text-sm">
                                        <a href="tel:+917672013249" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                                            <Phone className="w-4 h-4" />
                                            <span>+91 7672013249</span>
                                        </a>
                                        <a href="tel:+918886313249" className="flex items-center gap-2 hover:text-primary-500 transition-colors">
                                            <Phone className="w-4 h-4" />
                                            <span>+91 8886313249</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                            Explore Other Services
                        </h2>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedServices.map((relatedService, index) => {
                            const RelatedIcon = relatedService.icon;
                            return (
                                <AnimatedSection key={relatedService.slug} delay={index * 0.1}>
                                    <Link to={`/services/${relatedService.slug}`}>
                                        <motion.div
                                            className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500 group"
                                            whileHover={{ y: -8 }}
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 flex items-center justify-center">
                                                    <RelatedIcon className="w-6 h-6 text-primary-500" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                                                        {relatedService.name}
                                                    </h3>
                                                    {relatedService.sanskritName && (
                                                        <p className="text-sm text-primary-500/70">
                                                            {relatedService.sanskritName}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-dark-400 text-sm">
                                                {relatedService.shortDesc}
                                            </p>
                                        </motion.div>
                                    </Link>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    <AnimatedSection delay={0.4} className="text-center mt-12">
                        <Link to="/services" className="btn-secondary group">
                            <span>View All Services</span>
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
