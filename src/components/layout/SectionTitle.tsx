import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle,
  align = 'left' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto'
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignments[align]}`}>
      <h2 className="text-4xl font-serif font-bold mb-6">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;