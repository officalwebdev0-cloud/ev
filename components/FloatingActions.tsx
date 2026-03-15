'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      <a 
        href="https://wa.me/971501234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-sky-500 hover:bg-sky-400 text-white rounded-sm shadow-lg shadow-sky-500/20 flex items-center justify-center transition-all hover:scale-110 glow-cyan border border-sky-300/50"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a 
        href="tel:+971501234567" 
        className="w-14 h-14 bg-sky-600 hover:bg-sky-500 text-white rounded-sm shadow-lg shadow-sky-900/20 flex items-center justify-center transition-all hover:scale-110 border border-sky-400/30"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </motion.div>
  );
}
