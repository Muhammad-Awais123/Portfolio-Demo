import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';
import { Code2, Layers, Server, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Code2, Layers, Server, Zap
};

export const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services & Engagement"
          title="High-Impact Engineering & Product Solutions"
          subtitle="Focused on delivering tangible business value, rapid time-to-market, and long-term architectural stability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-mono text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 font-display mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-6 border-t border-zinc-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Deliverables & Standards
                  </div>
                  {service.features?.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
