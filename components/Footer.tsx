import Link from 'next/link';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-sky-500" />
              <span className="text-xl font-heading font-black tracking-tight text-gray-900">EV REPAIR <span className="text-sky-500">DUBAI</span></span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light max-w-sm">
              Dubai&apos;s most trusted, certified EV charger installation and repair experts. We don&apos;t cut corners. We ensure your EV charges safely and efficiently.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-heading font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#services" className="hover:text-sky-500 transition-colors">Tesla Charger Installation</Link></li>
              <li><Link href="#services" className="hover:text-sky-500 transition-colors">Home EV Charger Installation</Link></li>
              <li><Link href="#services" className="hover:text-sky-500 transition-colors">Commercial EV Setup</Link></li>
              <li><Link href="#services" className="hover:text-sky-500 transition-colors">EV Charger Repair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-heading font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#about" className="hover:text-sky-500 transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="hover:text-sky-500 transition-colors">Reviews</Link></li>
              <li><Link href="#faq" className="hover:text-sky-500 transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-sky-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} EV Repair Dubai. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
