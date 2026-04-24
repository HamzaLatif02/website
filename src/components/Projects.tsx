import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const FILTERS = ['All', 'Full-Stack', 'ML & AI', 'Data Science', 'Research'];

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-32 bg-white dark:bg-navy-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">All Projects</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-10">
            The full picture.
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-slate-400 border border-gray-200 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 hover:text-primary dark:hover:text-primary-light'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number; inView: boolean }> = ({
  project,
  index,
  inView,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-navy-border bg-white dark:bg-navy card-dark"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-navy flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Year badge */}
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-semibold">
        {project.year}
      </span>

      {/* Featured tag */}
      {project.featured && (
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold">
          Featured
        </span>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6">
      {/* Category tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary dark:text-primary-light border border-primary/15"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
        {project.summary}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.slice(0, 5).map(tech => (
          <span key={tech} className="tag-chip">
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="tag-chip">+{project.technologies.length - 5}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg btn-primary text-xs"
          >
            <ExternalLink size={12} />
            Live
          </a>
        )}
        {project.links.code && (
          <a
            href={project.links.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-400 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 text-xs font-medium transition-all duration-200"
          >
            <Github size={12} />
            Code
          </a>
        )}
        {project.links.caseStudy && (
          <a
            href={project.links.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-400 hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 text-xs font-medium transition-all duration-200"
          >
            <FileText size={12} />
            Case Study
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default Projects;
