import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com/',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:satyakammangate45@gmail.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/satya_ak45/',
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Mili</h3>
            <p className="text-gray-400">
              Creating digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {['Work', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Satyakam Gajanan Mangate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
