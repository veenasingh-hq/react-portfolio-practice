import React from 'react';
import { portfolioConfig } from '../portfolioConfig';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-100 dark:border-zinc-900">
      <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-12">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {portfolioConfig.skills.map((skill, index) => (
          <div key={skill.id} className="flex gap-6">
            <span className="text-3xl font-serif font-light text-zinc-300 dark:text-zinc-700">0{index + 1}</span>
            <div>
              <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}