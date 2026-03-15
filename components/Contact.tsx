'use client';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-mono uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              Fast Response
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">
              READY TO <br />
              <span className="text-gradient-electric">POWER UP?</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg font-light">
              Stop waiting for callbacks. Contact the best car charger installers near me. Fill out the form or reach us directly via WhatsApp for immediate assistance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 glass-panel p-6 rounded-sm border-sky-500/10 hover:border-sky-500/30 transition-colors">
                <div className="w-14 h-14 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Call Us 24/7</p>
                  <p className="font-bold text-xl text-gray-900">+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6 glass-panel p-6 rounded-sm border-sky-500/10 hover:border-sky-500/30 transition-colors">
                <div className="w-14 h-14 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                  <p className="font-bold text-xl text-gray-900">info@evrepairdubai.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 glass-panel p-6 rounded-sm border-sky-500/10 hover:border-sky-500/30 transition-colors">
                <div className="w-14 h-14 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Location</p>
                  <p className="font-bold text-xl text-gray-900">Business Bay, Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-sm border-sky-500/20 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600" />
            <h3 className="text-2xl font-heading font-bold mb-8 text-gray-900">Request a Quote</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-gray-900" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-gray-900" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-gray-900" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Service Required</label>
                <select className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-gray-900 appearance-none">
                  <option value="home">Home EV Charger Installation</option>
                  <option value="commercial">Commercial Installation</option>
                  <option value="repair">EV Charger Repair</option>
                  <option value="tesla">Tesla Charger Installation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-gray-900 resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-sm transition-all glow-cyan flex items-center justify-center gap-2 font-heading uppercase tracking-widest">
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
