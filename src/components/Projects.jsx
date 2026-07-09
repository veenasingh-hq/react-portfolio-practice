import React from 'react';
import { portfolioConfig } from '../portfolioConfig';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioConfig.projects.map((project) => (
          <a href={project.link} key={project.id} className="group block space-y-4">
            <div className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 aspect-16/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-xs text-zinc-500">{project.year} — {project.category}</p>
              <h3 className="text-xl font-bold mt-1 group-hover:underline">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}