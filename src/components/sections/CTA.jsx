import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-10 sm:p-16 bg-zinc-900 border border-zinc-800 text-center overflow-hidden shadow-xl"
        >
          {/* Subtle Background Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Q3/Q4 Projects</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Have an idea or high-impact technical challenge?
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              Available for full-time senior engineering roles, technical advisory, and strategic product development.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/resume/resume.pdf" target="_blank" variant="secondary" size="lg" className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700">
                View Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
