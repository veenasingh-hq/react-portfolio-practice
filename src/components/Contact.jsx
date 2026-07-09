import React from 'react';
import { portfolioConfig } from '../portfolioConfig';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="bg-zinc-950 dark:bg-zinc-900 rounded-3xl p-10 md:p-20 text-center text-white space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold">Want to discuss a project?</h2>
        <p className="text-zinc-400 text-lg max-w-lg mx-auto">Feel free to reach out for collaborations or just a friendly chat.</p>
        <a 
          href={`mailto:${portfolioConfig.contact.email}`}
          className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
        >
          {portfolioConfig.contact.email}
        </a>
      </div>
    </section>
  );
}



