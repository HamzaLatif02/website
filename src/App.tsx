import React, { useEffect, useState } from 'react';
import LeftPanel from './components/LeftPanel';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import projectsData from './data/projects.json';
import { Project } from './types';

const SECTIONS = ['about', 'education', 'projects'];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects: Project[] = projectsData;

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-[420px_1fr]">
        <LeftPanel activeSection={activeSection} />
        <main className="px-6 py-16 lg:px-16 lg:py-24">
          <AboutSection />
          <EducationSection />
          <ProjectsSection projects={projects} />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
