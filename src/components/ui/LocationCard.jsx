import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationCard = ({ location, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group"
        >
            <motion.div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-900 to-dark-950 border border-dark-800 group-hover:border-primary-600/50 transition-all duration-500"
                whileHover={{ y: -8 }}
            >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,126,34,0.3),transparent_70%)]"></div>
                </div>

                <div className="relative p-8">
                    {/* Icon */}
                    <div className="mb-6">
                        <motion.div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600/20 to-gold-400/10 border border-primary-600/30 group-hover:scale-110 transition-transform duration-500"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                        >
                            <MapPin className="w-8 h-8 text-primary-500" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {location.name}
                    </h3>
                    <p className="text-dark-400 mb-4 leading-relaxed">
                        {location.description}
                    </p>

                    {/* Contact */}
                    <div className="flex items-center text-dark-300 mb-6">
                        <Phone className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="text-sm">+91 7672013249</span>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/contact"
                        className="inline-flex items-center text-primary-500 font-medium group-hover:text-primary-400 transition-colors"
                    >
                        <span>Get in Touch</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary-600/10 to-transparent rounded-tl-full"></div>
            </motion.div>
        </motion.div>
    );
};

export default LocationCard;
