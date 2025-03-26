
import React, { useEffect, useRef, useState } from 'react';
import { CloudIcon, ServerIcon, ShieldIcon, GlobeIcon, RefreshCcwIcon, PieChartIcon } from 'lucide-react';

const services = [
  {
    title: "Cloud Infrastructure Design",
    description: "Custom architecture design for AWS, Azure, and Google Cloud to maximize scalability, security, and cost-effectiveness.",
    icon: CloudIcon
  },
  {
    title: "CI/CD Pipeline Implementation",
    description: "Streamlined continuous integration and deployment pipelines to accelerate your development cycles and ensure reliable releases.",
    icon: RefreshCcwIcon
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform, CloudFormation, and Ansible implementations to automate infrastructure provisioning and management.",
    icon: ServerIcon
  },
  {
    title: "Security Optimization",
    description: "Comprehensive security assessments and implementations to protect your infrastructure from threats and ensure compliance.",
    icon: ShieldIcon
  },
  {
    title: "Global Deployment Strategy",
    description: "Strategic planning for global infrastructure deployment to ensure optimal performance across regions.",
    icon: GlobeIcon
  },
  {
    title: "Performance Monitoring",
    description: "Implementation of monitoring solutions to gain visibility into your infrastructure and applications performance.",
    icon: PieChartIcon
  }
];

const Services = () => {
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
    <section id="services" className="py-24 bg-sphere-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Comprehensive DevOps Solutions
          </h2>
          <p className="text-sphere-gray">
            From infrastructure design to continuous deployment, we provide end-to-end DevOps solutions 
            to optimize your development workflow and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-sphere-accent/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-sphere-accent" />
              </div>
              <h3 className="text-xl font-medium text-sphere-navy mb-2">{service.title}</h3>
              <p className="text-sphere-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
