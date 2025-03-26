
import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: "On-Premises to AWS and Azure Cloud Migration",
    description: "Migrated a high-traffic e-commerce platform from on-premises data centers to AWS and Azure, implementing auto-scaling architecture and reducing infrastructure costs by 35%.",
    category: "Cloud Migration",
    image: "https://www.saviantconsulting.com/images/blog/multi-cloud-architecture.jpg"
  },
  {
    title: "Connection PC CI/CD Pipeline",
    description: "Designed and implemented a secure CI/CD pipeline for Connection PC using Docker containers and Azure DevOps, reducing deployment time from days to minutes.",
    category: "DevOps Implementation",
    image: "https://microsoft365dsc.com/Images/ManageUsingDevOps.png"
  },

  {
    title: "Multi-Region Kubernetes Cluster",
    description: "Designed and deployed a fault-tolerant Kubernetes cluster across multiple AWS regions using EKS, ensuring high availability for a global SaaS provider.",
    category: "Container Orchestration",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*dEzJuYr8b3-zRwRVGUUNVQ.png"
  },
  {
    title: "Infrastructure as Code Implementation",
    description: "Developed complete infrastructure as code solutions using Terraform and CloudFormation, enabling consistent, version-controlled deployment across multiple environments.",
    category: "IAC",
    image: "https://parallelstaff.com/wp-content/uploads/2023/12/terraform-1.png"
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
                  onError={(e) => {
                    console.error(`Error loading image: ${project.image}`);
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80';
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
