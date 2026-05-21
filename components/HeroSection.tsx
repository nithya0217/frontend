'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Discover Your Next Favorite Content</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter">
          <span className="text-slate-100">Your Personal</span>{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Content Hub
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Explore, discover, and engage with curated content tailored to your interests. From trending topics to niche communities, find what moves you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 font-semibold rounded-lg overflow-hidden">
            {/* Button Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300"></div>
            {/* Animated Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-lg"></div>
            </div>
            <span className="relative inline-flex items-center gap-2 text-white">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group px-8 py-3 sm:px-10 sm:py-4 rounded-lg border-2 border-slate-700 hover:border-indigo-500/50 bg-slate-900/50 hover:bg-slate-800/50 text-slate-100 font-semibold transition-all duration-300">
            Explore Now
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-sm text-slate-500">Active Creators</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              1M+
            </div>
            <p className="text-sm text-slate-500">Content Pieces</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              100%
            </div>
            <p className="text-sm text-slate-500">Free Access</p>
          </div>
        </div>
      </div>
    </section>
  );
}
