
import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "Global E-commerce Platform Migration",
    description: "Migrated a high-traffic e-commerce platform to AWS, implementing auto-scaling and reducing infrastructure costs by 35%.",
    category: "Cloud Migration",
    image: "/photo-1531297484001-80022131f5a1"
  },
  {
    title: "Financial Services CI/CD Pipeline",
    description: "Designed and implemented a secure CI/CD pipeline for a financial services company, reducing deployment time from days to minutes.",
    category: "DevOps Implementation",
    image: "/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Healthcare Data Platform",
    description: "Built a HIPAA-compliant data analytics platform on Azure with robust security controls and automated compliance checks.",
    category: "Secure Infrastructure",
    image: "/photo-1605810230434-7631ac76ec81"
  },
  {
    title: "Multi-Region Kubernetes Cluster",
    description: "Designed and deployed a fault-tolerant Kubernetes cluster across multiple regions for a SaaS provider.",
    category: "Container Orchestration",
    image: "/photo-1519389950473-47ba0277781c"
  }
];

const Projects = () => {
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
    <section id="projects" className="py-24 bg-sphere-lightgray" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Projects That Drive Results
          </h2>
          <p className="text-sphere-gray">
            Explore our successful implementations that have transformed our clients' 
            infrastructure and accelerated their business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-sphere-accent mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-sphere-navy mb-2">
                  {project.title}
                </h3>
                <p className="text-sphere-gray text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
