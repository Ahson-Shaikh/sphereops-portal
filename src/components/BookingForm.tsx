import React from 'react';
import { CalendarIcon, Clock, Info, Mail, Wrench } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

const CONTACT_LINKS = [
  { label: 'support@sphereops.org', href: 'mailto:support@sphereops.org?subject=SphereOps%20inquiry' },
  { label: 'ahson.shaikh@sphereops.org', href: 'mailto:ahson.shaikh@sphereops.org?subject=SphereOps%20inquiry' },
];

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
                Book a Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
                Schedule a Paid Strategy Call
              </h2>
              <p className="text-sphere-gray mb-8">
                Discuss your DevOps staffing, IT support model, AI automation roadmap, and infrastructure priorities.
                Online scheduling is temporarily unavailable—please reach us by email and we will respond promptly.
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
                  <Mail className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">Contact by email</h4>
                    <p className="text-sm text-sphere-gray">
                      Send your availability, scope, and goals—we will coordinate a call from there.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarIcon className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">Flexible scheduling</h4>
                    <p className="text-sm text-sphere-gray">Include preferred times in your message</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">30-minute consultation</h4>
                    <p className="text-sm text-sphere-gray">$49 per consultation call (mentioned in your email)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-sphere-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sphere-navy">Form under maintenance</h4>
                    <p className="text-sm text-sphere-gray">The booking form will return once service is restored</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
              <div className="pointer-events-none select-none blur-[6px] opacity-55 p-6 md:p-8">
                <div className="flex justify-center mb-4">
                  <BrandLogo heightClass="h-10" />
                </div>
                <h3 className="text-xl font-semibold text-sphere-navy mb-6 text-center">Request Your Consultation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-sphere-navy mb-1">Full Name</label>
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sphere-navy mb-1">Email Address</label>
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sphere-navy mb-1">Company Name</label>
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-10" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-sphere-navy mb-1">Preferred Date</label>
                      <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-10" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sphere-navy mb-1">Preferred Time</label>
                      <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-10" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sphere-navy mb-1">Brief Description</label>
                    <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-slate-50 h-24" />
                  </div>
                  <div className="w-full py-3 bg-sphere-accent/40 rounded-md h-12" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-6 bg-white/75 backdrop-blur-md">
                <div className="max-w-sm text-center space-y-4">
                  <div className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-900">
                    <Wrench className="w-4 h-4 shrink-0" />
                    Under maintenance
                  </div>
                  <p className="text-sphere-navy text-base font-medium leading-snug">
                    Online booking is temporarily unavailable. Please contact us by email—we reply to every serious inquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                    {CONTACT_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-sphere-accent px-4 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-sphere-blue"
                      >
                        <Mail className="w-4 h-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-sphere-gray">
                    Tip: include your company, timezone, and what you need help with so we can respond faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
