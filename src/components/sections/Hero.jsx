import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Download, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen bg-[#111113] text-[#ede8dc] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-between z-30 pt-2"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#ede8dc]/80 font-mono">
            Full-Stack Specialist
          </span>
        </div>

        <a
          href="#projects"
          className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-[#ede8dc]/80 hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">Explore Projects</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>
      </motion.div>

      {/* Main Centerpiece Stage with 3D Layered Text & Portrait */}
      <div className="relative flex-1 flex items-center justify-center my-auto min-h-[380px] sm:min-h-[500px] lg:min-h-[580px]">

        {/* Layer 1: Solid Giant Typography (Behind Portrait) */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[16vw] sm:text-[17vw] lg:text-[18vw] font-black uppercase tracking-tight text-[#ede8dc] font-display leading-none text-center select-none"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '-0.04em' }}
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* Layer 2: Centered Cutout Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative z-20 flex items-end justify-center w-full h-full max-w-2xl mx-auto"
        >
          <img
            src="/images/profile/profile-removebg-preview.png"
            alt="Profile Portrait"
            className="
  w-[420px]
  sm:w-[560px]
  md:w-[700px]
  lg:w-[850px]
  xl:w-[950px]
  max-w-[100vw]
  max-h-[88vh]
  object-contain
  drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]
  pointer-events-none
"
          />
        </motion.div>

        {/* Layer 3: Outlined Typography (In Front of Portrait) */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[16vw] sm:text-[17vw] lg:text-[18vw] font-black uppercase tracking-tight font-display leading-none text-center select-none"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(237, 232, 220, 0.75)',
            }}
            aria-hidden="true"
          >
            PORTFOLIO
          </motion.h1>
        </div>

      </div>

      {/* Bottom Metadata & Interactive CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-30 pt-4 border-t border-white/10"
      >
        <div className="text-left">
          <div className="text-sm sm:text-base font-bold text-[#ede8dc] tracking-tight font-display">
            Alex M.
          </div>
          <div className="text-xs text-[#ede8dc]/60 font-mono">
            Lead Frontend & Cloud Architect
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-white transition-all shadow-md"
          >
            View Projects
          </a>
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[#ede8dc] text-xs font-medium transition-all"
          >
            Download CV
          </a>
        </div>

        <div className="text-right">
          <a
            href="#contact"
            className="text-xs sm:text-sm text-[#ede8dc]/80 hover:text-white font-mono tracking-tight transition-colors inline-flex items-center gap-1"
          >
            <span>www.alex.dev</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
