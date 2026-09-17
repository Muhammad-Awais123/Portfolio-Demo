import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';

export const Home = () => {
  return (
    <main className="space-y-4">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
};

export default Home;
