import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value, suffix = '', label, icon: Icon, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const startValue = 0;
        const endValue = parseInt(value);

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeOutQuart * (endValue - startValue) + startValue));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            className="text-center p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary-600/20 to-gold-400/20 border border-primary-600/30">
                {Icon && <Icon className="w-8 h-8 text-primary-500" />}
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {count}{suffix}
            </div>
            <p className="text-dark-400 font-medium">{label}</p>
        </motion.div>
    );
};

export default StatCounter;
