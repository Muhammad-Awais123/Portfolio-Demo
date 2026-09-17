import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Coffee, Code2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Award },
    { label: 'Completed Projects', value: '40+', icon: Code2 },
    { label: 'Performance Score', value: '98%', icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 relative bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Bridging Engineering Discipline and Product UX"
          subtitle="I architect web applications with clean design systems, strict type safety, and real-world scalability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white p-3 shadow-sm">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Alex Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 text-xs text-slate-700 shadow-sm font-medium">
                  San Francisco, CA · Available Worldwide
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Senior Frontend & Full-Stack Developer with an obsession for high-impact execution.
            </h3>
            
            <p className="text-slate-600 leading-relaxed font-normal">
              Over the last 5+ years, I have engineered scalable web platforms and cloud integrations for fast-paced tech companies and enterprise clients. My focus centers on building reliable frontend systems, sub-second latency data flows, and clean architectures that team members love to maintain.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Pixel-perfect responsive implementations',
                'Accessible & semantic HTML5 / WCAG 2.1 AAA',
                'Resilient cloud and backend services',
                'Modular, test-driven React architecture',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
                  <div className="text-2xl font-bold font-display text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
