import React from 'react';
import { portfolioConfig } from '../portfolioConfig';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-sm font-medium tracking-widest text-zinc-400 uppercase">
            {portfolioConfig.role}
          </p>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            {portfolioConfig.tagline.split('. ')[0]}.
            <br />
            <span className="italic font-serif font-light text-zinc-400 dark:text-zinc-500">
              {portfolioConfig.tagline.split('. ')[1]}
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
            {portfolioConfig.about.substring(0, 150)}...
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Talk to me <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
            >
              Explore Portfolio
            </a>
          </div>
        </div>

        {/* Right Side: Moody Minimalist Card Graphic placeholder */}
        <div className="lg:col-span-5 h-112.5 w-full rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
            alt="Abstract Architecture Minimal" 
            className="w-full h-full object-cover grayscale opacity-80 dark:opacity-60 contrast-125"
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <p className="text-xs tracking-widest uppercase opacity-60">Status</p>
            <p className="text-sm font-medium">Available for production roles — 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}