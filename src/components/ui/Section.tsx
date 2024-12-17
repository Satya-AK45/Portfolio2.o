import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-[#FAF9F6]',
    dark: 'bg-black text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-24 ${backgrounds[background]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;