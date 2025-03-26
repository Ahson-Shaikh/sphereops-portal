
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const achievements = [
  "Reduced cloud costs by up to 40% for enterprise clients",
  "Decreased deployment time from days to minutes",
  "Implemented zero-downtime deployment strategies",
  "Enhanced security posture for financial institutions",
  "Optimized global infrastructure for multinational corporations",
  "Achieved 99.99% uptime for critical applications"
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sphere-accent/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sphere-accent/10 rounded-lg"></div>
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/b1d275fe-ebda-4cb8-9354-e598d98a5213.png" 
                  alt="Ahson Shaikh, CEO of SphereOps" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
              Transforming Infrastructure, Enabling Innovation
            </h2>
            <p className="text-sphere-gray mb-6">
              Founded by Ahson Shaikh, SphereOps is a premier DevOps consultancy dedicated to 
              helping businesses optimize their infrastructure, streamline deployment pipelines, 
              and enhance operational efficiency.
            </p>
            <p className="text-sphere-gray mb-6">
              With extensive experience across cloud platforms and DevOps tools, our team delivers 
              customized solutions that enable our clients to focus on innovation while we handle 
              the complexity of their infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-sphere-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sphere-gray text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-sphere-blue text-white hover:bg-sphere-accent transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
