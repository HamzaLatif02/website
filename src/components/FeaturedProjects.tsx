import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="featured" className="py-32 bg-gray-50 dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Featured Work</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Live products, shipped.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedCard: React.FC<{ project: Project; index: number; inView: boolean }> = ({
  project,
  index,
  inView,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-navy-border bg-white dark:bg-navy-card hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-400 shadow-sm dark:shadow-none"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
        {/* Screenshot */}
        <div
          className={`relative h-72 lg:h-[480px] overflow-hidden bg-gray-100 dark:bg-navy ${
            isEven ? '' : 'lg:col-start-2'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden" />

          {/* Live badge */}
          {project.links.live && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Live
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div
          className={`flex flex-col justify-center p-8 lg:p-12 ${
            isEven ? '' : 'lg:col-start-1 lg:row-start-1'
          }`}
        >
          <p className="section-label mb-3">{project.year}</p>

          <h3 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6 text-base">
            {project.summary}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map(tech => (
              <span key={tech} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
              >
                <ExternalLink size={15} />
                Live Demo
                <ArrowUpRight size={15} className="opacity-70" />
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/15 text-gray-700 dark:text-slate-300 text-sm font-medium hover:border-gray-400 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
              >
                <Github size={15} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
