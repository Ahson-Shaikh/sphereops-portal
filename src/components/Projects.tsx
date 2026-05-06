
import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "On-Premises to AWS and Azure Cloud Migration",
    description: "Migrated a high-traffic e-commerce platform from on-premises data centers to AWS and Azure, implementing auto-scaling architecture and reducing infrastructure costs by 35%.",
    category: "Cloud Migration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/projects/cloud-migration.svg"
  },
  {
    title: "Connection PC CI/CD Pipeline",
    description: "Designed and implemented a secure CI/CD pipeline for Connection PC using Docker containers and Azure DevOps, reducing deployment time from days to minutes.",
    category: "DevOps Implementation",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/projects/cicd.svg"
  },

  {
    title: "Multi-Region Kubernetes Cluster",
    description: "Designed and deployed a fault-tolerant Kubernetes cluster across multiple AWS regions using EKS, ensuring high availability for a global SaaS provider.",
    category: "Container Orchestration",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/projects/kubernetes.svg"
  },
  {
    title: "Infrastructure as Code Implementation",
    description: "Developed complete infrastructure as code solutions using Terraform and CloudFormation, enabling consistent, version-controlled deployment across multiple environments.",
    category: "IAC",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    fallbackImage: "/projects/iac.svg"
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
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Delivery Outcomes Across Ops and Platform
          </h2>
          <p className="text-sphere-gray">
            Explore selected engagements where our engineers improved reliability, speed, and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = project.fallbackImage;
                  }}
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
