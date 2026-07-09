import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="font-bold tracking-tight text-lg uppercase cursor-pointer">
            {portfolioConfig.name.split(' ')[0]} {/* Pehla naam display hoga */}
          </div>

          {/* Navigation Links & Toggle */}
          <div className="flex items-center space-x-8">
            <div className="hidden sm:flex space-x-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
              <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            </div>

            {/* Dark/Light Mode Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}