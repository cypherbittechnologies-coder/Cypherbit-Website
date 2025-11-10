import React, { useState, useEffect, useCallback } from 'react';
import CypherbitLogo from './CypherbitLogo';
import { theme } from '../theme/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  }, []);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'careers', 'contact'];
          const scrollPosition = window.scrollY + 80;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items configuration
  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="shadow-custom rounded-[20px] md:rounded-[40px] bg-white sticky top-2 md:top-4 z-50 mx-2 sm:mx-3 md:mx-4 lg:mx-8 mt-2 md:mt-4">
      <div className="flex justify-between items-center py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <button 
            onClick={() => scrollToSection('home')} 
            className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#27438E] focus:ring-offset-2 rounded-lg transition-all"
            aria-label="Home"
          >
            <CypherbitLogo className="w-[85px] sm:w-[100px] md:w-[160px] lg:w-[200px] h-auto" />
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-7 h-7 focus:outline-none focus:ring-2 focus:ring-[#27438E] focus:ring-offset-2 rounded transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-5">
          {navItems.map((item) => (
            activeSection === item.id ? (
              <div 
                key={item.id}
                className="flex justify-center items-center px-5 h-8 rounded-[32px] transition-all duration-200 shadow-sm"
                style={{ backgroundColor: theme.colors.primary }}
              >
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className="font-semibold text-sm lg:text-base text-white cursor-pointer focus:outline-none"
                >
                  {item.label}
                </button>
              </div>
            ) : (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="font-semibold text-sm lg:text-base text-black hover:text-[#27438E] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#27438E] focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 py-3 px-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-semibold text-base py-2 px-4 rounded-[32px] w-fit transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-[#27438E] focus:ring-offset-2 ${
                activeSection === item.id
                  ? 'text-white shadow-sm' 
                  : 'text-black hover:text-[#27438E]'
              }`}
              style={activeSection === item.id ? { backgroundColor: theme.colors.primary } : {}}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;