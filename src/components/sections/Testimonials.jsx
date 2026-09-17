import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, Apex Analytics',
    avatar: '/images/clients/client-01.png',
    text: 'Alex delivered our high-throughput AI platform ahead of schedule. The architectural discipline and clean codebase made scaling seamless for our entire engineering team.',
    stars: 5,
  },
  {
    name: 'Michael Chang',
    role: 'VP of Product, BlockVault',
    avatar: '/images/clients/client-02.png',
    text: 'One of the most capable frontend architects I have worked with. The UI performance, attention to detail, and responsive interactions exceeded all our expectations.',
    stars: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Design Director, Vanguard Atelier',
    avatar: '/images/clients/client-03.png',
    text: 'Alex bridges the gap between intricate design vision and robust engineering better than anyone. Highly reliable, communicative, and technically proficient.',
    stars: 5,
  },
  {
    name: 'David Keller',
    role: 'Founder & CEO, SyncFlow',
    avatar: '/images/clients/client-04.png',
    text: 'From technical architecture to final implementation, Alex solved every challenge with clarity and speed. Our platform engagement improved dramatically after launch.',
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 sm:py-28 border-y border-black/10"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badge="Endorsements"
          title="What People Say"
          subtitle="A few words from people I've worked with across products, design, and engineering."
        />

        {/* Trusted / Client Bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-14 mb-16 overflow-hidden rounded-2xl border border-black/10 bg-white"
        >
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-7 sm:flex-row sm:px-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Trusted Collaboration
              </p>

              <p className="mt-1 text-sm font-medium text-black/60">
                Working with ambitious teams and product builders.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {testimonials.map((client, index) => (
                <div
                  key={client.name}
                  className="group flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white transition-all duration-300 hover:border-blue-600"
                >
                  <img
                    src={client.avatar}
                    alt={`${client.name} profile`}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-[2px] w-full bg-blue-600" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="group relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition-all duration-300 hover:border-blue-600/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8"
            >
              {/* Orange corner accent */}
              <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Quote */}
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-blue-600" strokeWidth={1.5} />

                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                </div>

                <p className="max-w-xl text-[15px] leading-7 text-black/65">
                  “{item.text}”
                </p>
              </div>

              {/* Profile */}
              <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black">
                    <img
                      src={item.avatar}
                      alt={`${item.name} profile`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold tracking-tight text-black">
                      {item.name}
                    </h4>

                    <p className="mt-0.5 text-xs font-medium text-blue-600">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/40 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Built through collaboration
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-black/55">
              Good products are built by understanding the problem first,
              then creating technology that actually solves it.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-blue-600]"
          >
            Start a conversation

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;