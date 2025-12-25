import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                to={`/services/${service.slug}`}
                className="block h-full"
            >
                <motion.div
                    className="relative h-full p-6 card-glass card-hover group overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-primary-600/0 group-hover:from-primary-600/5 group-hover:to-gold-400/5 transition-all duration-500"></div>

                    {/* Icon */}
                    <div className="relative mb-4">
                        <motion.div
                            className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-600/20 to-gold-400/20 border border-primary-600/30"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <Icon className="w-7 h-7 text-primary-500" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                            {service.name}
                        </h3>
                        {service.sanskritName && (
                            <p className="text-sm text-primary-500/80 font-medium mb-3">
                                {service.sanskritName}
                            </p>
                        )}
                        <p className="text-dark-400 text-sm leading-relaxed mb-4">
                            {service.shortDesc}
                        </p>

                        {/* Arrow */}
                        <div className="flex items-center text-primary-500 font-medium text-sm group-hover:text-primary-400">
                            <span>Learn More</span>
                            <motion.div
                                className="ml-2"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
