
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sphere-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-semibold mb-4">
              <span className="text-sphere-accent">Sphere</span>Ops
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              SphereOps provides premier DevOps consultancy services to businesses worldwide, 
              optimizing cloud infrastructure and streamlining development processes.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'Medium'].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-white/70 hover:text-sphere-accent transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Cloud Infrastructure', 
                'CI/CD Implementation', 
                'Infrastructure as Code', 
                'Security Optimization', 
                'Performance Monitoring'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/70 hover:text-sphere-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Open Source', href: '#opensource' },
                { name: 'Book Consultation', href: '#booking' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-sphere-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} SphereOps. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item, index) => (
              <a key={index} href="#" className="text-white/70 hover:text-sphere-accent transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
