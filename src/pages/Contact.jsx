import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Phone, Mail, MapPin, Clock, Send,
    MessageCircle, User, Calendar, FileText,
    CheckCircle2
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const eventTypes = [
    'Wedding (Vivahamu)',
    'Birthday (Jata Karma)',
    'Baby Shower (Seemantham)',
    'Naming Ceremony (Namakaranam)',
    'House Warming (Gruhapravesham)',
    'Engagement (Nishchitartham)',
    'Haldi Ceremony',
    'Reception',
    'Anniversary',
    'Corporate Event',
    'Political Function',
    'Get-Together',
    'Other',
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // UI only - show success state
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone Numbers',
            details: ['+91 7672013249', '+91 8886313249'],
            action: 'tel:+917672013249',
        },
        {
            icon: Mail,
            title: 'Email Address',
            details: ['Ramevents0810@gmail.com'],
            action: 'mailto:Ramevents0810@gmail.com',
        },
        {
            icon: MapPin,
            title: 'Headquarters',
            details: ['Hyderabad, Telangana', 'India'],
            action: null,
        },
        {
            icon: Clock,
            title: 'Working Hours',
            details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sun: 10:00 AM - 6:00 PM'],
            action: null,
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
                            Contact Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                        >
                            Let's Create Your <span className="gradient-text">Dream Event</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            Ready to bring your vision to life? Get in touch with us today for a
                            free consultation. Our team is here to help you plan the perfect event.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <AnimatedSection>
                            <div className="p-8 md:p-10 rounded-2xl bg-dark-900/50 border border-dark-800">
                                <h2 className="text-2xl font-display font-bold text-white mb-6">
                                    Send us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-dark-300 text-sm font-medium mb-2">
                                            Your Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white placeholder-dark-500 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-dark-300 text-sm font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white placeholder-dark-500 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-dark-300 text-sm font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white placeholder-dark-500 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none"
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Type & Date */}
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-dark-300 text-sm font-medium mb-2">
                                                Event Type
                                            </label>
                                            <div className="relative">
                                                <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                                <select
                                                    name="eventType"
                                                    value={formData.eventType}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select event type</option>
                                                    {eventTypes.map((type) => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-dark-300 text-sm font-medium mb-2">
                                                Tentative Date
                                            </label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                                <input
                                                    type="date"
                                                    name="eventDate"
                                                    value={formData.eventDate}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-dark-300 text-sm font-medium mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-4 bg-dark-950 border border-dark-800 rounded-xl text-white placeholder-dark-500 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-all outline-none resize-none"
                                            placeholder="Tell us about your event requirements..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        className="w-full btn-primary relative overflow-hidden group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {submitted ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Message Sent!
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </span>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            {/* WhatsApp CTA */}
                            <AnimatedSection>
                                <motion.a
                                    href="https://wa.me/917672013249"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/50 transition-all duration-500 group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center">
                                            <MessageCircle className="w-7 h-7 text-white fill-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Chat on WhatsApp</h3>
                                            <p className="text-dark-400 text-sm">Get instant response</p>
                                        </div>
                                    </div>
                                    <p className="text-dark-300 mb-4">
                                        Prefer chatting? Reach out to us directly on WhatsApp for quick responses
                                        and easy communication.
                                    </p>
                                    <div className="flex items-center text-[#25D366] font-medium">
                                        <span>+91 7672013249</span>
                                        <span className="mx-2">•</span>
                                        <span>Click to Chat</span>
                                    </div>
                                </motion.a>
                            </AnimatedSection>

                            {/* Contact Cards */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {contactInfo.map((info, index) => (
                                    <AnimatedSection key={index} delay={index * 0.1}>
                                        <motion.div
                                            className="p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-primary-600/50 transition-all duration-500 h-full"
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 flex items-center justify-center mb-4">
                                                <info.icon className="w-6 h-6 text-primary-500" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {info.title}
                                            </h3>
                                            {info.details.map((detail, i) => (
                                                info.action ? (
                                                    <a
                                                        key={i}
                                                        href={info.action}
                                                        className="block text-dark-400 hover:text-primary-500 transition-colors"
                                                    >
                                                        {detail}
                                                    </a>
                                                ) : (
                                                    <p key={i} className="text-dark-400">{detail}</p>
                                                )
                                            ))}
                                        </motion.div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                            Visit Our Office
                        </h2>
                        <p className="text-dark-400">
                            Located in the heart of Hyderabad
                        </p>
                    </AnimatedSection>

                    <AnimatedSection>
                        {/* Map placeholder */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/7] bg-dark-900 border border-dark-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-950">
                                {/* Stylized map placeholder */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="grid grid-cols-12 gap-1 h-full p-4">
                                        {[...Array(48)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="bg-dark-700 rounded"
                                                style={{ opacity: Math.random() * 0.5 + 0.2 }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Center marker */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="relative"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary-600/20 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-primary-600/40 flex items-center justify-center">
                                                <MapPin className="w-6 h-6 text-primary-500" />
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                            <p className="text-white font-medium">Hyderabad, Telangana</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center">
                        <h2 className="text-2xl font-display font-bold text-white mb-8">
                            We Also Serve In
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {['Telangana', 'Andhra Pradesh', 'Goa', 'Rajasthan'].map((location, index) => (
                                <motion.div
                                    key={location}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-6 py-3 rounded-full bg-dark-800 border border-dark-700 text-dark-300 hover:border-primary-600/50 hover:text-white transition-all duration-300"
                                >
                                    {location}
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Contact;
