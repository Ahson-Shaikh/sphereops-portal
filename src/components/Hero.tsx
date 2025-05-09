
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

  const cloudProviders = [
    {
      name: 'AWS',
      description: 'Amazon Web Services infrastructure solutions',
      tag: 'Enterprise Ready'
    },
    {
      name: 'Azure',
      description: 'Microsoft Azure cloud solutions',
      tag: 'High Performance'
    },
    {
      name: 'GCP',
      description: 'Google Cloud Platform expertise',
      tag: 'Scalable'
    }
  ];

  // Add console log to debug image paths
  useEffect(() => {
    console.log("Cloud providers:", cloudProviders);
  }, []);

  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sphere-navy via-sphere-blue to-sphere-navy"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-sphere-lightblue/10 -top-20 -left-20 blur-3xl animate-pulse-soft" />
        <div className="absolute w-80 h-80 rounded-full bg-sphere-accent/10 bottom-10 right-10 blur-3xl animate-pulse-soft delay-500" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <span className="px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full">
                Premier DevOps Consultancy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your Infrastructure with <span className="text-sphere-accent">SphereOps</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              We optimize, scale, and secure your cloud infrastructure to deliver 
              exceptional performance and reliability for your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="px-8 py-3 rounded-md bg-sphere-accent text-white font-medium hover:bg-white hover:text-sphere-blue transition-all flex items-center justify-center gap-2 group"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#booking" 
                className="px-8 py-3 rounded-md bg-transparent text-white border border-white/30 hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-sphere-accent/20 to-sphere-lightblue/20 backdrop-blur-sm">
              <div className="bg-sphere-navy/40 rounded-xl p-6 backdrop-blur-sm">
                <Carousel className="w-full">
                  <CarouselContent>
                    {cloudProviders.map((provider, index) => (
                      <CarouselItem key={index}>
                        <Card className="bg-transparent border-0">
                          <CardContent className="p-0">
                            <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden bg-sphere-navy/50">
                              <img 
                                src={
                                  provider.name === 'AWS' 
                                    ? 'https://wallpapers.com/images/hd/amazon-background-qmgdstx8t37z579o.jpg' 
                                    : provider.name === 'Azure' 
                                    ? 'https://azure.microsoft.com/svghandler/azure?width=600&height=315' 
                                    : 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png'
                                }
                                alt={`${provider.name} Cloud Infrastructure`} 
                                className="w-full h-full object-contain bg-white/10 backdrop-blur-sm p-4"
                                onError={(e) => {
                                  console.error(`Error loading image for ${provider.name}`);
                                  // Fallback images specific to each cloud provider
                                  if (provider.name === 'AWS') {
                                    e.currentTarget.src = 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB.d92cd7c37a4796f8b4dbcb913cbdb1bcf9a65a78.png';
                                  } else if (provider.name === 'Azure') {
                                    e.currentTarget.src = 'https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png';
                                  } else {
                                    e.currentTarget.src = 'https://lh3.googleusercontent.com/dYoQ0S8IYQsfYJZpZvWYl9yMF6TMqzq7HCT7QF7zc2wdBN8jgYBXvmJQhLGrKTRQzi0jzYuUvA4Kaw0IMzB48Af7RQoQYQo3VCHE=w2000-h1270-rw';
                                  }
                                }}
                              />
                            </AspectRatio>
                            <div className="mt-4 flex justify-between items-start">
                              <div>
                                <h3 className="text-white font-medium text-lg">{provider.name}</h3>
                                <p className="text-white/70 text-sm">{provider.description}</p>
                              </div>
                              <div className="px-3 py-1 bg-sphere-accent/20 text-sphere-accent rounded-full text-xs">
                                {provider.tag}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-sphere-lightblue/10 hover:bg-sphere-lightblue/20 text-white border-0" />
                  <CarouselNext className="right-2 bg-sphere-lightblue/10 hover:bg-sphere-lightblue/20 text-white border-0" />
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
