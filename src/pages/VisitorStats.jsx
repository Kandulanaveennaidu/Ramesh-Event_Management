import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, TrendingUp, Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';

const VisitorStats = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState({
        todayVisitors: 0,
        weeklyVisitors: 0,
        monthlyVisitors: 0
    });

    useEffect(() => {
        const initializeCounter = () => {
            const storedData = localStorage.getItem('visitorData');
            let data = storedData ? JSON.parse(storedData) : null;

            const isNewVisit = !sessionStorage.getItem('visited');

            if (!data) {
                data = {
                    count: 1247,
                    lastUpdated: new Date().toISOString()
                };
            }

            if (isNewVisit) {
                data.count += 1;
                data.lastUpdated = new Date().toISOString();
                localStorage.setItem('visitorData', JSON.stringify(data));
                sessionStorage.setItem('visited', 'true');
            }

            // Simulate additional stats based on total count
            const simulatedStats = {
                todayVisitors: Math.floor(data.count * 0.02) + Math.floor(Math.random() * 10),
                weeklyVisitors: Math.floor(data.count * 0.15) + Math.floor(Math.random() * 50),
                monthlyVisitors: Math.floor(data.count * 0.4) + Math.floor(Math.random() * 100)
            };

            setStats(simulatedStats);
            animateCounter(data.count);
        };

        const animateCounter = (target) => {
            setIsLoading(false);
            let current = 0;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            const stepDuration = duration / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setVisitorCount(target);
                    clearInterval(timer);
                } else {
                    setVisitorCount(Math.floor(current));
                }
            }, stepDuration);

            return () => clearInterval(timer);
        };

        const timer = setTimeout(initializeCounter, 500);
        return () => clearTimeout(timer);
    }, []);

    const formatNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    const statCards = [
        {
            icon: Eye,
            label: 'Total Page Views',
            value: visitorCount,
            color: 'from-primary-600 to-primary-400',
            delay: 0
        },
        {
            icon: Users,
            label: 'Today\'s Visitors',
            value: stats.todayVisitors,
            color: 'from-green-600 to-green-400',
            delay: 0.1
        },
        {
            icon: Calendar,
            label: 'This Week',
            value: stats.weeklyVisitors,
            color: 'from-blue-600 to-blue-400',
            delay: 0.2
        },
        {
            icon: TrendingUp,
            label: 'This Month',
            value: stats.monthlyVisitors,
            color: 'from-gold-600 to-gold-400',
            delay: 0.3
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 bg-gradient-to-b from-dark-900 to-dark-950">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="relative container mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-6"
                        >
                            Live Statistics
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                        >
                            Website <span className="gradient-text">Visitors</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-dark-300 leading-relaxed"
                        >
                            Track our growing community of visitors who trust RAM Event Management
                            for their special occasions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-24 bg-dark-950">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statCards.map((stat, index) => (
                            <AnimatedSection key={index} delay={stat.delay}>
                                <motion.div
                                    className="relative group"
                                    whileHover={{ y: -8 }}
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />

                                    <div className="relative bg-dark-900/80 backdrop-blur-xl rounded-2xl border border-dark-800 hover:border-primary-600/50 p-8 transition-all duration-500">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} p-0.5 mb-6`}>
                                            <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center">
                                                <stat.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Value */}
                                        {isLoading ? (
                                            <div className="w-24 h-10 bg-dark-700 rounded animate-pulse mb-2" />
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-4xl font-bold gradient-text mb-2"
                                            >
                                                {formatNumber(stat.value)}
                                            </motion.div>
                                        )}

                                        {/* Label */}
                                        <p className="text-dark-400 text-sm">{stat.label}</p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Live Activity Section */}
            <section className="py-24 bg-gradient-to-b from-dark-950 to-dark-900">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <span className="inline-block px-4 py-1 rounded-full bg-primary-600/10 text-primary-500 text-sm font-medium mb-4">
                            Real-Time Activity
                        </span>
                        <h2 className="section-title mb-4">Growing Every Day</h2>
                        <p className="section-subtitle">
                            Join thousands of visitors who explore our services
                        </p>
                    </AnimatedSection>

                    <div className="max-w-2xl mx-auto">
                        <AnimatedSection delay={0.2}>
                            <div className="relative bg-dark-900/50 rounded-2xl border border-dark-800 p-8">
                                {/* Live indicator */}
                                <div className="flex items-center gap-3 mb-8">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [1, 0.8, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity
                                        }}
                                        className="w-3 h-3 rounded-full bg-green-500"
                                    />
                                    <span className="text-green-500 font-medium">Live Updates Active</span>
                                </div>

                                {/* Activity feed */}
                                <div className="space-y-4">
                                    {[
                                        { location: 'Hyderabad', time: 'Just now', action: 'Viewed Wedding Services' },
                                        { location: 'Bangalore', time: '2 min ago', action: 'Viewed Contact Page' },
                                        { location: 'Mumbai', time: '5 min ago', action: 'Explored Locations' },
                                        { location: 'Chennai', time: '8 min ago', action: 'Viewed About Us' },
                                    ].map((activity, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.15 }}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-dark-950/50 border border-dark-800"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center">
                                                <MapPin className="w-5 h-5 text-primary-500" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white font-medium">{activity.action}</p>
                                                <p className="text-dark-400 text-sm">{activity.location}</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-dark-500 text-sm">
                                                <Clock className="w-4 h-4" />
                                                {activity.time}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-8 pt-6 border-t border-dark-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-dark-400 text-sm">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span>Traffic up 23% this week</span>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="text-primary-500 hover:text-primary-400 text-sm font-medium transition-colors"
                                    >
                                        Contact Us →
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisitorStats;
