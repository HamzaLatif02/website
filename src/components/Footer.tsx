import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-navy-border bg-white dark:bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-gray-900 dark:text-white text-lg mb-1">
              Hamza Latif<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-500">
              Software Engineer · Data Analyst · Data Scientist
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/HamzaLatif02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 dark:text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/latif-hamza/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:lhamza1020@gmail.com"
              aria-label="Email"
              className="text-gray-500 dark:text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
          <p className="text-xs text-gray-400 dark:text-slate-600 text-center">
            © {year} Hamza Latif. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
