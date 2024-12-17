import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A full-featured online shopping experience built with React and Node.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "Development"
  },
  {
    title: "Luxury Brand Identity",
    description: "Complete visual identity and branding system for a high-end fashion label",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
    category: "Design"
  },
  {
    title: "Fitness Mobile App",
    description: "Cross-platform mobile application for fitness tracking and wellness",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    category: "Development"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">Selected Work</h2>
          <p className="text-xl text-gray-600">
            A collection of projects that showcase my expertise in design and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-white/70 text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center text-white gap-2 hover:gap-3 transition-all">
                    View Project <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;