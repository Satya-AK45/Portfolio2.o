import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 background-main">
      <div className="container-fluid text-center">
        {/* Main Image */}
        <div className="colcen" align="center">
        <img
          className="img-fluid mt-5"
          src="/images/profile-1.jpg"
          alt="Image of Satyakam Gajanan Mangate"
        />
        </div>
        {/* Greeting and Title */}
        <div className="mt-8">
          <div className="inline-flex items-center text-2xl mb-4">
            <span role="img" aria-label="wave">
              👋
            </span>{' '}
            Hi! I am <span className="font-bold">ㅤSatyakam</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Full Stack Developer
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Based in Chhatrapati Sambhaji Nagar.
          </h2>
        </div>

        {/* Skills */}
        <div className="space-x-4 mb-8">
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full">
            Programmer 📐
          </span>
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full">
            Web Developer 🎨
          </span>
        </div>

        {/* Call to Action */}
        <Link
          to="/contact"
          className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          Let's work! <ArrowRight size={20} />
        </Link>
        </div>
        <div className="h-24 line w-1 mx-auto mt-12"></div>
      
    </section>
  );
};

export default Hero;
