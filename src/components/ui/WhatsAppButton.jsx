import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/917672013249"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
            <motion.div
                className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg cursor-pointer whatsapp-pulse"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle className="w-8 h-8 text-white fill-white" />

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-dark-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    <p className="text-sm font-medium text-white">Chat with us!</p>
                    <p className="text-xs text-dark-400">+91 7672013249</p>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="border-8 border-transparent border-l-dark-900"></div>
                    </div>
                </div>
            </motion.div>

            {/* Ping animation */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 rounded-full"></span>
        </motion.a>
    );
};

export default WhatsAppButton;
