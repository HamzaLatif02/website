import React from 'react';
import { Project } from '../types';

interface Props {
  projects: Project[];
}

const ProjectsSection: React.FC<Props> = ({ projects }) => (
  <section id="projects" className="mb-28 scroll-mt-16 lg:scroll-mt-24">
    <p
      className="text-xs uppercase tracking-widest font-mono mb-8 lg:hidden"
      style={{ color: 'var(--color-accent)' }}
    >
      Projects
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasLocalImage = project.image && project.image.startsWith('/');

  return (
    <div
      className="rounded-lg overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {hasLocalImage ? (
        <div className="h-40 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="h-1 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
      )}

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-semibold font-mono leading-snug mb-2" style={{ color: '#04080F' }}>
          {project.title}
        </h3>

        <p
          className="text-xs font-mono leading-relaxed mb-4 flex-1 line-clamp-4"
          style={{ color: 'rgba(4,8,15,0.6)' }}
        >
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-sm border"
              style={{
                borderColor: 'rgba(80,125,188,0.5)',
                color: '#507DBC',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-150"
              style={{ color: 'rgba(4,8,15,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(4,8,15,0.5)')}
            >
              <ExternalIcon />
              Live
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-150"
              style={{ color: 'rgba(4,8,15,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(4,8,15,0.5)')}
            >
              <GithubIcon />
              Code
            </a>
          )}
          {project.links.caseStudy && (
            <a
              href={project.links.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-150"
              style={{ color: 'rgba(4,8,15,0.5)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(4,8,15,0.5)')}
            >
              <BookIcon />
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const BookIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export default ProjectsSection;
