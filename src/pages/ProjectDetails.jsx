import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Calendar, User, Target } from 'lucide-react';
import { GithubIcon } from '../assets/icons/index.jsx';
import Button from '../components/ui/Button';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Project Not Found</h1>
        <p className="text-slate-600 mb-8">The project you are looking for does not exist or has been moved.</p>
        <Button href="/" variant="primary">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      {/* Back Button */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 text-blue-600" /> Back to all projects
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          {project.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 mb-4 font-display">
          {project.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          {project.description}
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video w-full mb-12 shadow-sm"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Project Meta Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500">Client / Org</div>
            <div className="text-sm font-semibold text-slate-900">{project.details?.client || 'Confidential'}</div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500">Timeline</div>
            <div className="text-sm font-semibold text-slate-900">{project.details?.timeline || 'Ongoing'}</div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500">Role</div>
            <div className="text-sm font-semibold text-slate-900">{project.details?.role || 'Full Stack'}</div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">The Challenge</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.details?.challenge || 'Architecting a robust, scalable system that balances high throughput with minimal latency.'}
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">The Solution</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {project.details?.solution || 'Delivered an end-to-end modernized stack with caching, asynchronous queues, and sleek UI components.'}
          </p>
        </div>
      </div>

      {/* Tech Stack & Links */}
      <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md text-xs bg-slate-100 text-blue-700 border border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" variant="secondary" size="md">
              <GithubIcon className="w-4 h-4 mr-2" /> Code Repo
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" variant="primary" size="md">
              <ExternalLink className="w-4 h-4 mr-2" /> Live Preview
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
