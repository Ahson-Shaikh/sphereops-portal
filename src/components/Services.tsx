
import React, { useEffect, useRef, useState } from 'react';
import { Bot, BriefcaseBusiness, CloudIcon, Code2, GraduationCap, Headset, RefreshCcwIcon, ServerCog, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "DevOps Services",
    description: "Design, operate, and continuously optimize infrastructure, CI/CD, and production environments.",
    icon: CloudIcon,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Outsourced Engineers and IT Support",
    description: "Engage dedicated L1/L2/L3 resources with 24/7 support coverage based on your delivery requirements.",
    icon: Headset,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Web-Application Development",
    description: "Build modern, scalable web applications with secure integrations, clean UI, and maintainable architecture.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Portfolio Build-Ups",
    description: "Create polished business and personal portfolio websites designed for credibility, lead capture, and speed.",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AI Automation and Agentic Workflows",
    description: "Deploy automation systems using AI agents to reduce repetitive manual work and improve team throughput.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "On-Demand Hiring and Team Augmentation",
    description: "Hire engineers aligned with your stack and workload, from short-term execution to long-term ownership.",
    icon: RefreshCcwIcon,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AWS and Azure Training",
    description: "Practical internal training programs for cloud, DevOps workflows, and operational best practices.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Infrastructure and Reliability Engineering",
    description: "From on-premises to multi-cloud operations with security, monitoring, and SLA-driven reliability practices.",
    icon: ServerCog,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Security, Logging, Monitoring, and SLA",
    description: "Implement enterprise observability, alerting, notification workflows, and SLA-aligned operational controls.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  }
];

const aiServiceTypes = [
  'Voice AI Agents (taking real actions over phone calls)',
  'AI Lead Generation Systems',
  'AI Customer Support Copilots',
  'RAG Knowledge Base Assistants',
  'AI Outreach and Email Sequencing',
  'AI Call QA and Conversation Intelligence',
  'AI Workflow Orchestration Agents',
  'AI Proposal and RFP Automation',
  'AI Forecasting and Decision Intelligence',
  'Custom AI Product Prototyping',
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
    <section id="services" className="py-24 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            Service Lines
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Comprehensive Services for Modern Tech Teams
          </h2>
          <p className="text-sphere-gray">
            We support cloud operations, software delivery, team scaling, AI automation, and enterprise
            reliability with a practical execution-first approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-[1px] bg-gradient-to-br from-cyan-300/60 via-indigo-300/50 to-fuchsia-300/60 shadow-[0_14px_40px_rgba(30,58,138,0.18)] hover:shadow-[0_22px_50px_rgba(8,47,73,0.28)] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sphere-accent/20 to-indigo-200/40 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-sphere-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-sphere-navy mb-2">{service.title}</h3>
                  <p className="text-sphere-gray">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-200/40 bg-white p-8 shadow-[0_12px_34px_rgba(30,58,138,0.12)]">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-sphere-navy mb-3">AI Services We Build</h3>
            <p className="text-sphere-gray">
              From voice automation to revenue operations, we design production-ready AI systems mapped to measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServiceTypes.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-sphere-navy font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
