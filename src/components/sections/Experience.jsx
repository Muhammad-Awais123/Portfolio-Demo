import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Track Record"
          title="Work Experience & Leadership"
          subtitle="A history of leading frontend engineering, managing system architecture, and shipping production applications."
        />

        <div className="relative border-l-2 border-zinc-200 ml-4 md:ml-36 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-xs" />

              {/* Date pill for desktop */}
              <div className="hidden md:block absolute -left-44 top-0.5 text-right w-32">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {exp.period}
                </span>
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
                <div className="md:hidden flex items-center gap-1.5 text-xs font-bold font-mono text-blue-600 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-zinc-900 font-display flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-zinc-600 bg-zinc-50 px-3 py-1 rounded-lg border border-zinc-200/60 w-fit">
                    @{exp.company}
                  </span>
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed font-normal mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
                  {exp.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-zinc-50 text-zinc-700 border border-zinc-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
