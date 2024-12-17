import React from 'react';
import Hero from '../components/home/Hero';
import Quote from '../components/home/Quote';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;