import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  icon = true 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border-2 border-black hover:bg-black hover:text-white"
  };

  const ButtonContent = () => (
    <>
      {children}
      {icon && <ArrowRight size={20} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      <ButtonContent />
    </button>
  );
};

export default Button;