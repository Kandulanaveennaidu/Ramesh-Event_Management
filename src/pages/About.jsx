import { motion } from 'framer-motion';
import {
    Target, Eye, Heart, Users, Award, Sparkles,
    Shield, Clock, Leaf, Star
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const values = [
        {
            icon: Heart,
            title: 'Tradition',
            description: 'Deep respect for cultural heritage and Sanathana Dharma principles.',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Uncompromising standards in every event we organize.',
        },
        {
            icon: Shield,
            title: 'Integrity',
            description: 'Honest and transparent dealings with all our clients.',
        },
        {
            icon: Users,
            title: 'Family',
            description: 'Treating every client like our own family member.',
        },
        {
            icon: Sparkles,
            title: 'Innovation',
            description: 'Blending traditional practices with modern presentation.',
        },
        {
            icon: Clock,
            title: 'Punctuality',
            description: 'Respecting time and ensuring timely execution of events.',
        },
    ];

    const timeline = [
        {
            year: '2015',
            title: 'The Beginning',
            description: 'RAM Event Management was founded in Hyderabad with a vision to preserve traditional ceremonies.',
        },
        {
            year: '2017',
            title: 'Growing Footprint',
            description: 'Expanded services to cover the entire Telangana region with a team of dedicated professionals.',
        },
        {
            year: '2019',
            title: 'Regional Expansion',
            description: 'Extended operations to Andhra Pradesh, bringing our services to more families.',
        },
        {
            year: '2021',
            title: 'Pan-India Presence',
            description: 'Launched services in Goa and Rajasthan, marking our presence across multiple states.',
        },
        {
            year: '2024',
            title: 'Excellence Recognized',
            description: 'Celebrated 500+ successful events with 100% client satisfaction rate.',
        },
    ];

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
                            About Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                        >
                            Crafting <span className="gradient-text">Memorable</span> Experiences
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            RAM Event Management Private Limited is Hyderabad's premier event management company,
                            dedicated to creating exceptional experiences that honor Indian traditions while delivering
                            modern excellence.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="relative">
                                {/* Image placeholder with gradient */}
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-gold-400/20"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
                                        alt="RAM Event Management team at work"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
                                </div>

                                {/* Floating card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="absolute -bottom-8 -right-8 bg-dark-900 border border-dark-800 rounded-2xl p-6 shadow-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center">
                                            <Leaf className="w-8 h-8 text-primary-500" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold gradient-text">1+</p>
                                            <p className="text-dark-400 text-sm">Year of Excellence</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-dark-300 leading-relaxed">
                                <p>
                                    Founded by <span className="text-primary-500 font-semibold">Mr. Jagadeesh</span>,
                                    RAM Event Management was born from a deep passion for preserving and celebrating
                                    Indian cultural traditions. What started as a small venture in Hyderabad has
                                    grown into a trusted name in event management across multiple states.
                                </p>
                                <p>
                                    Our name "RAM" is inspired by the divine qualities of Lord Rama – righteousness,
                                    duty, and excellence. These principles guide every event we organize, ensuring
                                    that your celebrations are not just events, but meaningful experiences that
                                    connect generations.
                                </p>
                                <p>
                                    Today, we are proud to serve families across Telangana, Andhra Pradesh, Goa,
                                    and Rajasthan, bringing the same dedication and attention to detail that
                                    has made us a preferred choice for traditional ceremonies and modern celebrations
                                    alike.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection>
                            <motion.div
                                className="h-full p-10 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500"
                                whileHover={{ y: -8 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8 text-primary-500" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
                                <p className="text-dark-300 leading-relaxed">
                                    To create exceptional events that celebrate life's precious moments while honoring
                                    the rich tapestry of Indian culture and traditions. We strive to make every ceremony
                                    meaningful, every celebration memorable, and every client a part of our family.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <motion.div
                                className="h-full p-10 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500"
                                whileHover={{ y: -8 }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 flex items-center justify-center mb-6">
                                    <Eye className="w-8 h-8 text-primary-500" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-dark-300 leading-relaxed">
                                    To become India's most trusted event management company, known for seamlessly
                                    blending tradition with modernity. We envision a future where every family can
                                    celebrate their milestones with the perfect balance of cultural authenticity
                                    and contemporary elegance.
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Our Core Values
                        </span>
                        <h2 className="section-title mb-4">What We Stand For</h2>
                        <p className="section-subtitle">
                            The principles that guide our work and define our character
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-8 rounded-2xl bg-dark-950/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500 group"
                                    whileHover={{ y: -8 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 mb-6 group-hover:scale-110 transition-transform duration-500"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <value.icon className="w-7 h-7 text-primary-500" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-dark-400 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Our Journey
                        </span>
                        <h2 className="section-title mb-4">Growing Through the Years</h2>
                    </AnimatedSection>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-dark-800 -translate-x-1/2 hidden md:block"></div>

                        {timeline.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 0.15}
                                direction={index % 2 === 0 ? 'left' : 'right'}
                            >
                                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                        }`}>
                                        <motion.div
                                            className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-500 text-sm font-bold mb-3">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-dark-400 text-sm">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-dark-950 z-10"></div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block mb-8">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-600 to-gold-400 p-1">
                                        <img
                                            src={profileImg}
                                            alt="Jagadeesh - Founder & CEO"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Star className="w-5 h-5 text-white" />
                                    </motion.div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-white mb-2">
                                Jagadeesh
                            </h3>
                            <p className="text-primary-500 font-medium mb-6">Founder & CEO</p>
                            <p className="text-dark-300 leading-relaxed max-w-2xl mx-auto">
                                "My vision for RAM Event Management has always been simple – to help families
                                celebrate their most cherished moments in a way that honors our beautiful traditions.
                                Every event we organize is a reflection of our commitment to excellence and our
                                deep respect for Sanathana Dharma."
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default About;
