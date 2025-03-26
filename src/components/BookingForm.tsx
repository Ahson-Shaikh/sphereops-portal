import React, { useState, useRef } from 'react';
import { CalendarIcon, Clock, Info } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    if (formRef.current) {
      // Send email using EmailJS
      emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        undefined // Public key is already initialized in the initEmailJS function
      )
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          toast.success('Consultation request submitted successfully! We\'ll contact you shortly.');
          setName('');
          setEmail('');
          setCompany('');
          setDate('');
          setTime('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Failed to send email:', error.text);
          toast.error('Something went wrong. Please try again or contact us directly.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
                Book a Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
                Schedule Time with Our DevOps Expert
              </h2>
              <p className="text-sphere-gray mb-8">
                Discuss your infrastructure challenges with Ahson Shaikh, our founder and lead consultant. 
                Get personalized insights on how SphereOps can optimize your DevOps processes.
              </p>
              
              <div className="bg-sphere-lightgray rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/b1d275fe-ebda-4cb8-9354-e598d98a5213.png" 
                      alt="Ahson Shaikh" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-sphere-navy">Ahson Shaikh</h3>
                    <p className="text-sphere-gray text-sm">Founder & Lead DevOps Consultant</p>
                    <p className="text-sphere-gray text-sm mt-2">
                      With over a 5 years of experience in cloud infrastructure and DevOps practices, 
                      Ahson has helped businesses across industries optimize their tech operations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CalendarIcon className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">Flexible Scheduling</h4>
                    <p className="text-sm text-sphere-gray">Book a time that works best for your team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">45-Minute Session</h4>
                    <p className="text-sm text-sphere-gray">In-depth discussion about your infrastructure needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">No Obligation</h4>
                    <p className="text-sm text-sphere-gray">Get valuable insights whether you engage our services or not</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-sphere-navy mb-6">Request Your Consultation</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sphere-navy mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sphere-navy mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-sphere-navy mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                    placeholder="Acme Inc."
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-sphere-navy mb-1">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-sphere-navy mb-1">Preferred Time</label>
                    <select
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sphere-navy mb-1">Brief Description of Your Needs</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sphere-accent"
                    placeholder="Tell us about your current infrastructure and challenges..."
                    rows={4}
                  ></textarea>
                </div>
                
                <input type="hidden" name="to_email" value="contact@sphereops.org" />
                <input type="hidden" name="subject" value="Consultation Request from SphereOps Website" />
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-sphere-accent text-white font-medium rounded-md hover:bg-sphere-blue transition-colors disabled:opacity-70"
                >
                  {loading ? 'Submitting...' : 'Schedule Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
