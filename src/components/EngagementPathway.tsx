import React from 'react';
import { ClipboardList, FileText, Handshake, PlayCircle, SearchCheck } from 'lucide-react';

const pathwaySteps = [
  {
    title: 'Discovery & Requirements Alignment',
    description:
      'We conduct a structured discovery session to capture business goals, technical scope, constraints, and success criteria.',
    icon: SearchCheck,
  },
  {
    title: 'Service Proposal & Effort Estimate',
    description:
      'SphereOps delivers a formal proposal covering delivery approach, effort sizing, commercial model, and projected timelines.',
    icon: FileText,
  },
  {
    title: 'Provider Cost Benchmark & Recommendation',
    description:
      'You receive a provider-level cost comparison with a clear, data-backed recommendation for the best-fit option.',
    icon: ClipboardList,
  },
  {
    title: 'Draft Agreement to Final Contract',
    description:
      'We issue a draft engagement contract, iterate on terms with stakeholders, and move to final execution.',
    icon: Handshake,
  },
  {
    title: 'Project Kickoff & Delivery Execution',
    description:
      'Once signed, work begins according to the agreed service proposal, governance cadence, and implementation timeline.',
    icon: PlayCircle,
  },
];

const EngagementPathway = () => {
  return (
    <section id="engagement-pathway" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
            After Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sphere-navy mb-4">
            Your Engagement Journey With SphereOps
          </h2>
          <p className="text-sphere-gray">
            A clear, phased pathway from initial consultation to signed contract and delivery kickoff.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-sphere-accent/30 via-sphere-blue/40 to-sphere-accent/30" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {pathwaySteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sphere-accent/20 to-indigo-200/50 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-sphere-blue" />
                    </div>
                    <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-full bg-sphere-accent/10 text-sphere-accent text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-sphere-navy mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-sphere-gray leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementPathway;
