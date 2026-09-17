import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from '../../assets/icons/index.jsx';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-200">

          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold font-display tracking-tight text-slate-900">
              Alex<span className="text-blue-600">.dev</span>
            </span>

            <p className="mt-2 text-sm text-slate-600 max-w-sm">
              Engineering high-performance web systems, resilient cloud
              backends, and refined interfaces.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:alex@example.com"
              className="w-10 h-10 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>Back to top</span>

            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform text-slate-600 group-hover:text-blue-600 shadow-sm">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Alex. All rights reserved.
          </p>

          {/* Fakiha Credit */}
          <p className="text-slate-500 text-center">
            Designed &amp; Developed by{' '}
            <a
              href="https://www.fakihacore.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Fakiha Core Tech
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;