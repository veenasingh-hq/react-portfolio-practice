import React from 'react';
import { portfolioConfig } from '../portfolioConfig';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl">
        <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">About Me</h2>
        <p className="text-3xl md:text-4xl font-serif font-light leading-snug">
          {portfolioConfig.about}
        </p>
      </div>
    </section>
  );
}