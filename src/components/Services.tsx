import React from 'react';
import { Code, Palette, Award } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Developer Skills",
    description: "A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive UI's designs."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI Design",
    description: "A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication."
  },
  {
    icon: <Award className="w-6 h-6" />,
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
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-black rounded-lg text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <img 
              src="./images/mimoji.png"
              alt="Memoji illustration"
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <i className="fab fa-js-square text-4xl text-yellow-400"></i>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4">
              <i className="fab fa-bootstrap text-4xl text-purple-600"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;