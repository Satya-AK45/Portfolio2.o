import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#project' },
    { label: 'About me', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-blur backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-serif text-white">
            Satyakam Gajanan Mangate
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-200 hover:text-white font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Work request <span className="ml-1">→</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-blur backdrop-blur-sm">
            <nav className="flex flex-col px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-gray-200 hover:text-white font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
