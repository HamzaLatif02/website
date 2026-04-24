import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useSmooth } from '../hooks/useSmooth';

const NAV_ITEMS = [
  { label: 'Work', id: 'featured' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { scrollToSection } = useSmooth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md border-b border-gray-200/50 dark:border-navy-border'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('hero')}
              className="font-display font-bold text-xl text-gray-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              Hamza Latif<span className="text-primary">.</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="/CV.pdf"
                download
                className="btn-primary text-sm px-5 py-2.5 rounded-lg"
              >
                Download CV
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-white dark:bg-navy-card border-l border-gray-200 dark:border-navy-border flex flex-col pt-24 px-8 gap-2">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left py-4 text-lg font-medium text-gray-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-light border-b border-gray-100 dark:border-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/CV.pdf"
              download
              className="btn-primary text-center py-3 rounded-lg mt-6"
              onClick={() => setMobileOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
