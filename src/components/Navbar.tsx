
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6 lg:px-8",
        scrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center space-x-2">
          <span className={cn(
            "text-2xl font-semibold transition-colors",
            scrolled ? "text-sphere-navy" : "text-white"
          )}>
            <span className="text-sphere-accent">Sphere</span>Ops
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Services', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-sphere-accent",
                scrolled ? "text-sphere-navy" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="text-sm font-medium px-4 py-2 rounded-full bg-sphere-accent text-white transition-all hover:bg-sphere-blue"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className={cn("h-6 w-6", scrolled ? "text-sphere-navy" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", scrolled ? "text-sphere-navy" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 animate-fade-in">
          {['Services', 'About', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sphere-navy hover:text-sphere-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="text-center py-2 px-4 rounded-full bg-sphere-accent text-white transition-all hover:bg-sphere-blue"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
