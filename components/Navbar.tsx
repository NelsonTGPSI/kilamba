
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Casa', href: '#manifesto' },
    { label: 'Características', href: '#pilares' },
    { label: 'Quartos', href: '#suítes' },
    { label: 'Reserva', href: '#reservar' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 flex items-center justify-between ${
        isScrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-12">
        <div className="hidden md:flex space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-[#4A4A4A]' : 'text-[#FDFBF7]'} hover:text-[#8C7355] transition-colors duration-300`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className={`font-serif text-2xl tracking-[0.3em] ${isScrolled ? 'text-[#2D3436]' : 'text-[#FDFBF7]'} uppercase cursor-pointer`} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Kilamba
        </h1>
      </div>

      <div className="flex items-center space-x-12">
        <div className="hidden md:flex space-x-8">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-[#4A4A4A]' : 'text-[#FDFBF7]'} hover:text-[#8C7355] transition-colors duration-300`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-[#4A4A4A]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
