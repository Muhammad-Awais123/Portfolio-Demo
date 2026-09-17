import React, { useState } from 'react';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Web3 & Fintech', 'Creative Tech', 'Productivity', 'Healthcare'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Selected Work"
          title="Case Studies & Production Systems"
          subtitle="A collection of web platforms, developer tools, and architectural systems built with scalability and UX in mind."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
