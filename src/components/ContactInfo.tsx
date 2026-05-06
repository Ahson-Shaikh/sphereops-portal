
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@sphereops.org",
    link: "mailto:contact@sphereops.org"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+92-(343)-4020517",
    link: "tel:+923434020517"
  },
  {
    icon: MapPin,
    title: "Meet Us",
    details: "Remotely",
    link: "#"
  },
  {
    icon: Globe,
    title: "Global Support",
    details: "24/7 technical assistance",
    link: "#contact"
  }
];

const ContactInfo = () => {
  return (
    <section id="contact" className="py-24 bg-sphere-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Ready to Scale with Outsourced DevOps and AI?
          </h2>
          <p className="text-sphere-gray">
            Contact us to discuss dedicated engineers, IT support, AI automations, and infrastructure delivery plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center hover:translate-y-[-5px]"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-sphere-accent/10 flex items-center justify-center mb-4">
                <contact.icon className="w-6 h-6 text-sphere-accent" />
              </div>
              <h3 className="text-lg font-medium text-sphere-navy mb-2">{contact.title}</h3>
              <p className="text-sphere-gray">{contact.details}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
