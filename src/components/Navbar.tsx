import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="transition-colors duration-300">
            <img 
              src={isScrolled ? logoDark : logoLight}
              alt="Les Entretiens Gauthier" 
              className="h-16 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`nav-link ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>Services</a>
            <a href="#about" className={`nav-link ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>À propos</a>
            <a href="#contact" className={`nav-link ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>Contact</a>
            <button className="btn-primary">
              Obtenez une soumission
            </button>
          </div>

          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-3 space-y-3">
            <a href="#services" className={`block py-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Services</a>
            <a href="#about" className={`block py-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>À propos</a>
            <a href="#contact" className={`block py-2 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Contact</a>
            <button className="btn-primary w-full">
              Obtenez une soumission
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}