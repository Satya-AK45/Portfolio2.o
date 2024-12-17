import React from 'react';
import { Code, Palette, Award } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: Code,
    title: "Developer Skills",
    description: "A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive UI's designs."
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication."
  },
  {
    icon: Award,
    title: "2D Artist",
    description: "5+ years of digital illustration experience, mastering techniques in Photoshop and Procreate."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start mb-16">
          <div className="w-1 h-24 bg-purple-400 mr-8"></div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">My services</h2>
            <h3 className="text-2xl text-gray-600">The most creative intuitive workmate.</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="relative">
            <img 
              src="images/mimoji.png"
              alt="Memoji illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;