import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 background-main" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
            Creative Designer & Developer based in San Francisco
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            I help brands and businesses create meaningful digital experiences through thoughtful design and development.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;