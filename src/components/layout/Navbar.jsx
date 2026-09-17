import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          to="/"
          className={`group flex items-center gap-2.5 text-xl font-bold font-display tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'
            }`}
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="tracking-tight">
            Alex<span className="text-blue-500">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${isScrolled
              ? 'bg-white border border-slate-200 shadow-xs'
              : 'bg-white/10 backdrop-blur-md border border-white/15 text-white'
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors ${isScrolled
                  ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            className="text-xs font-bold px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg border transition-colors ${isScrolled
                ? 'text-slate-700 bg-white border-slate-200 shadow-sm'
                : 'text-white bg-white/10 border-white/20 backdrop-blur-md'
              }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-lg bg-blue-600 font-bold text-sm text-white shadow-sm"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
