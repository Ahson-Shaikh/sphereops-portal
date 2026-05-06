
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const heroSlides = [
    {
      title: 'DevOps and Cloud Operations',
      description: 'Build, scale, and maintain resilient infrastructure across hybrid and cloud environments.',
      tag: 'Delivery',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'Web Applications and Portfolio Build-Ups',
      description: 'Launch modern websites and web applications with a performance-first user experience.',
      tag: 'Engineering',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80'
    },
    {
      title: 'AI Automation and Team Enablement',
      description: 'Automate workflows, deploy AI assistants, and train teams on AWS/Azure operations.',
      tag: 'Innovation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80'
    }
  ];

  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-sphere-blue/80" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-cyan-400/10 -top-16 -left-20 blur-3xl animate-pulse-soft" />
        <div className="absolute w-80 h-80 rounded-full bg-indigo-400/20 bottom-0 right-0 blur-3xl animate-pulse-soft delay-500" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-300/10 rounded-full border border-cyan-200/20">
                DevOps, Web Engineering, AI Automation, Staffing, and Training
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              End-to-End Technology Delivery with <span className="text-sphere-accent">SphereOps</span>
            </h1>
            <p className="text-lg text-white/85 max-w-xl">
              We support businesses with DevOps services, web-application development, portfolio build-ups,
              AI automation, outsourced staffing, on-demand hiring, and hands-on AWS/Azure training.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">DevOps and IT Support</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Web-App Development</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Training and Hiring</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="px-8 py-3 rounded-md bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pricing" 
                className="px-8 py-3 rounded-md bg-white/5 text-white border border-white/30 hover:bg-white/15 transition-all flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-cyan-300/30 to-indigo-300/30 backdrop-blur-sm">
              <div className="bg-slate-900/65 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <Carousel className="w-full">
                  <CarouselContent>
                    {heroSlides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <Card className="bg-transparent border-0">
                          <CardContent className="p-0">
                            <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden bg-sphere-navy/50">
                              <img 
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                              />
                            </AspectRatio>
                            <div className="mt-4 flex justify-between items-start">
                              <div>
                                <h3 className="text-white font-medium text-lg">{slide.title}</h3>
                                <p className="text-white/70 text-sm">{slide.description}</p>
                              </div>
                              <div className="px-3 py-1 bg-cyan-300/20 text-cyan-200 rounded-full text-xs">
                                {slide.tag}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/10 hover:bg-white/20 text-white border-0" />
                  <CarouselNext className="right-2 bg-white/10 hover:bg-white/20 text-white border-0" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
        <span className="text-xs mb-2">Scroll</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
