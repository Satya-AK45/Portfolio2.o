import React from 'react';
import { Palette, Code, Award } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that delight users and achieve business goals."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Development",
    description: "Building robust and scalable web applications using modern technologies and best practices."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Branding",
    description: "Developing unique and memorable brand identities that resonate with target audiences."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-600 mb-12">
              I'm a passionate designer and developer with over 5 years of experience
              creating digital solutions that help businesses grow. My approach combines
              creativity with technical expertise to deliver exceptional results.
            </p>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="About me"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;