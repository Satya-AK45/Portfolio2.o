import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Certified T",
    description: "React and Web3 technologies",
    image: "./images/1.png",
    link: "",
    category: "Development"
  },
  {
    title: "Dictionary App",
    description: "Interactive dictionary",
    image: "./images/4.png",
    link: "",
    category: "Development"
  },
  {
    title: "Weather React App",
    description: "Real-time weather application with dynamic updates",
    image: "./images/3.png",
    link: "",
    category: "Development"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="project" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">Selected Work</h2>
          <p className="text-xl text-gray-600">
            A collection of projects that showcase my expertise in design and development.
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white gap-2 hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-4">Curious about the process?</p>
          <a 
            href="https://github.com/Satya-AK45" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700 transition-colors font-medium"
          >
            Visit my Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;