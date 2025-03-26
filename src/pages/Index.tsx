
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import BookingForm from '@/components/BookingForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "SphereOps - Premier DevOps Consultancy";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Projects />
      <OpenSource />
      <BookingForm />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
