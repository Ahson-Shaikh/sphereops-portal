import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'SphereOps modernized our delivery pipeline and reduced deployment lead time by over 60% within the first quarter.',
    name: 'CTO, Fintech Platform',
    outcome: 'CI/CD modernization and release acceleration',
  },
  {
    quote:
      'Their cloud and reliability guidance gave us a clear operating model, better observability, and fewer production incidents.',
    name: 'Head of Engineering, SaaS Company',
    outcome: 'Reliability engineering and monitoring uplift',
  },
  {
    quote:
      'From architecture decisions to execution support, the team consistently brought practical recommendations that worked in production.',
    name: 'VP Technology, Digital Services Firm',
    outcome: 'Infrastructure strategy and execution support',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            What Teams Say About Working With SphereOps
          </h2>
          <p className="text-sphere-gray">
            Feedback from organizations that partnered with us for cloud, DevOps, and delivery transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
            >
              <div className="w-10 h-10 rounded-lg bg-sphere-accent/10 flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-sphere-accent" />
              </div>
              <p className="text-sphere-gray leading-relaxed mb-5">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-sphere-navy">{testimonial.name}</p>
              <p className="text-xs text-sphere-gray mt-1">{testimonial.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
