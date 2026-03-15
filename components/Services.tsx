'use client';
import { motion } from 'motion/react';
import { BatteryCharging, Wrench, Settings, MapPin, Building2, Zap, AlertTriangle } from 'lucide-react';

const services = [
  {
    title: "Home EV Charger Installation",
    desc: "Stop relying on slow 3-pin plugs. We install dedicated, high-speed charging stations at home safely.",
    icon: BatteryCharging,
    keywords: ["install charging station at home", "car charger installation"]
  },
  {
    title: "Commercial EV Charger Installation",
    desc: "Attract high-value customers. Scalable level 2 charger installation for businesses and malls.",
    icon: Building2,
    keywords: ["level 2 charger installation", "electric charger installation"]
  },
  {
    title: "Tesla Charger Installation",
    desc: "Don't void your warranty with uncertified electricians. Specialized Tesla wall connector setup.",
    icon: Zap,
    keywords: ["tesla charger installation", "tesla charger installation near me"]
  },
  {
    title: "EV Charger Repair",
    desc: "Charger offline? Fast and reliable repair services for all major EV charging station brands.",
    icon: Wrench,
    keywords: ["ev charger repair"]
  },
  {
    title: "EV Charger Maintenance",
    desc: "Prevent electrical fires and downtime. Routine maintenance to ensure peak efficiency year-round.",
    icon: Settings,
    keywords: ["ev charger maintenance"]
  },
  {
    title: "EV Charger Relocation",
    desc: "Moving? Safe relocation and rewiring of existing charging stations to new properties.",
    icon: MapPin,
    keywords: ["ev charger relocation"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-mono uppercase tracking-widest mb-6">
              <AlertTriangle className="w-3 h-3" />
              Stop Risking Your EV
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight">
              ENGINEERED FOR <br />
              <span className="text-gradient-electric">MAXIMUM SAFETY.</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-sm md:text-base">
            Amateur installations lead to melted wires and voided vehicle warranties. We provide certified, industrial-grade EV solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-sm group hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-500" />
              
              <div className="w-14 h-14 rounded-sm bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-8 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-500">
                <service.icon className="w-6 h-6 text-sky-500" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 font-heading text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.keywords.map((kw, j) => (
                  <span key={j} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm bg-black/5 border border-black/10 text-gray-500 group-hover:border-sky-500/30 group-hover:text-sky-600 transition-colors">
                    {kw}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
