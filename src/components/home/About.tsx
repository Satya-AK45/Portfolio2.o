import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cards = [
  {
    title: 'Education',
    description: 'Certific - 2024',
    color: 'yellow',
  },
  {
    title: 'Illustration',
    description:
      'Freelancer illustrator since 2018. A love for portraits and character design',
    color: 'blue',
  },
  {
    title: 'Influencer',
    description:
      'Created a platform on Instagram to share coding tips, tutorials and promote tech products ',
    color: 'purple',
  },
  {
    title: 'Music & Games',
    description:
      'Songwriter, pianist and singer in my freetime. I also enjoy playing videogames as a hobby',
    color: 'green',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">About me</h2>
          <h3 className="text-2xl text-gray-600">Welcome to Satya's World</h3>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}
            >
              <h4 className={`text-xl font-bold mb-4 text-${card.color}-600`}>
                {card.title}
              </h4>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-serif font-bold mb-6">
            Multitalented. Intuitive. Dedicated.
          </h3>
          <p className="text-gray-600">
            Wanna know more? Visit my{' '}
            <a
              href="https://www.instagram.com/Satya_ak45/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
