
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const achievements = [
  "Flexible L1/L2/L3 engineer augmentation model",
  "Proactive IT support and incident response operations",
  "Cloud and DevOps implementation across AWS, Azure, and GCP",
  "Agentic AI workflows for repetitive support tasks",
  "Automation-first approach for scalable delivery",
  "Clear communication, handover documentation, and accountability"
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
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
              Why SphereOps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
              Your Extended Platform and Automation Team
            </h2>
            <p className="text-sphere-gray mb-6">
              SphereOps helps growing teams outsource critical DevOps and IT support work without
              sacrificing quality, velocity, or security.
            </p>
            <p className="text-sphere-gray mb-6">
              Beyond infrastructure operations, we build AI-powered and agentic automations that reduce
              repetitive tasks, improve response times, and free your team to focus on high-impact work.
            </p>
            <div className="rounded-xl overflow-hidden mb-6 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="SphereOps team collaboration"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            
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
