'use client';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-sharp rounded-sm px-6 py-3 flex items-center justify-between border-b border-sky-500/20">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-sky-500" />
          <span className="font-heading font-bold text-xl tracking-tight">EV<span className="text-sky-500">Dubai</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 font-mono uppercase tracking-wider">
          <Link href="#services" className="hover:text-sky-500 transition-colors">Services</Link>
          <Link href="#testimonials" className="hover:text-sky-500 transition-colors">Reviews</Link>
          <Link href="#faq" className="hover:text-sky-500 transition-colors">FAQ</Link>
        </div>
        <Link href="#contact" className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-2 rounded-sm transition-all glow-cyan uppercase font-mono text-sm tracking-widest">
          Book Call
        </Link>
      </div>
    </motion.nav>
  );
}
