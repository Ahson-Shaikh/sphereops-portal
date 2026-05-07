
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';
  const useSolidHeader = scrolled || !isHomePage;
  const navItems = ['Services', 'Tools', 'About', 'Projects', 'Pricing', 'Contact'];

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
        useSolidHeader ? "py-3 bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/70" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="SphereOps home">
          <BrandLogo
            variant={useSolidHeader ? "default" : "onDark"}
            heightClass="h-9 md:h-10"
            className={cn(
              "transition-opacity duration-300",
              useSolidHeader ? "" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-sphere-accent",
                useSolidHeader ? "text-sphere-navy" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          <Link
            to="/blog"
            className={cn(
              "text-sm font-medium transition-colors duration-200 hover:text-sphere-accent",
              useSolidHeader ? "text-sphere-navy" : "text-white"
            )}
          >
            Blog
          </Link>
          <a 
            href={isHomePage ? "#booking" : "/#booking"} 
            className="text-sm font-medium px-4 py-2 rounded-full bg-cyan-400 text-slate-900 transition-all hover:bg-cyan-300"
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
            <X className={cn("h-6 w-6", useSolidHeader ? "text-sphere-navy" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", useSolidHeader ? "text-sphere-navy" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item}
              href={isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="text-sphere-navy hover:text-sphere-accent py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-sphere-navy hover:text-sphere-accent py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <a 
            href={isHomePage ? "#booking" : "/#booking"} 
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
