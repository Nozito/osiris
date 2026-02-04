import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
    return (
        <motion.a
            href="https://wa.me/message/HQMHR57XSDJTP1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Animation */}
            <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>

            {/* Icon */}
            <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-black/90 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Discutons sur WhatsApp
            </span>
        </motion.a>
    );
};
