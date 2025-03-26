
import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OpenSourceProjects = [
  {
    name: "SphereOps CLI",
    description: "A command-line tool for automating DevOps workflows and infrastructure management across multiple cloud providers.",
    tags: ["Go", "CLI", "Multi-cloud"],
    stars: 576,
    forks: 89,
    url: "#",
    githubUrl: "#"
  },
  {
    name: "Kubernetes Optimizer",
    description: "An open-source tool that analyzes and optimizes Kubernetes cluster resource usage and cost efficiency.",
    tags: ["Python", "Kubernetes", "Cost Optimization"],
    stars: 943,
    forks: 127,
    url: "#",
    githubUrl: "#"
  },
  {
    name: "IaC Template Library",
    description: "A comprehensive collection of Infrastructure as Code templates for Terraform, CloudFormation, and Pulumi.",
    tags: ["Terraform", "CloudFormation", "Pulumi"],
    stars: 782,
    forks: 214,
    url: "#",
    githubUrl: "#"
  },
  {
    name: "CI/CD Pipeline Generator",
    description: "A web-based tool for generating optimized CI/CD pipeline configurations for popular platforms like GitHub Actions, GitLab CI, and Jenkins.",
    tags: ["TypeScript", "CI/CD", "DevOps"],
    stars: 651,
    forks: 103,
    url: "#",
    githubUrl: "#"
  }
];

const OpenSource = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    <section id="opensource" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-sphere-navy">
            Open Source <span className="text-sphere-accent">Contributions</span>
          </h2>
          <p className="text-sphere-gray max-w-3xl mx-auto">
            At SphereOps, we're committed to giving back to the community. Check out our open-source tools that have helped thousands of developers improve their DevOps workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OpenSourceProjects.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '0.5s' }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-sphere-navy">{project.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-sphere-gray min-h-[80px]">
                  {project.description}
                </CardDescription>
                <div className="flex items-center mt-4 text-sm text-sphere-gray gap-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {project.forks}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} className="inline-flex items-center">
                    <Github className="mr-1 h-4 w-4" />
                    Repository
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.url} className="inline-flex items-center">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="default" size="lg">
            <a href="https://github.com/sphereops" className="inline-flex items-center">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
