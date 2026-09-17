import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../../assets/icons/index.jsx';

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-zinc-200/80 shadow-xs hover:border-blue-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200/60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-zinc-900 border border-zinc-200 shadow-sm backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-2.5 font-display">
            {project.title}
          </h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-zinc-100 flex items-center justify-between">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 transition-all"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-blue-600 hover:bg-zinc-100 border border-transparent hover:border-zinc-200 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
