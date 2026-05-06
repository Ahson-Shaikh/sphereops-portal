import React from 'react';
import { Bot, Cloud, Cog, Network, ShieldCheck } from 'lucide-react';

const stackGroups = [
  {
    title: 'Cloud Stack',
    icon: Cloud,
    summary: 'Core cloud and hybrid infrastructure foundations.',
    items: ['AWS', 'Azure', 'GCP', 'On-Premises', 'Enterprise Networking']
  },
  {
    title: 'DevOps Tools Stack',
    icon: Network,
    summary: 'Delivery and infrastructure lifecycle tooling.',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Puppet']
  },
  {
    title: 'Automation Stack',
    icon: Bot,
    summary: 'Workflow and AI-powered execution automation.',
    items: ['n8n', 'Make.com', 'Vapi', 'Event-Driven Integrations', 'Action Pipelines']
  },
  {
    title: 'SRE Stack',
    icon: ShieldCheck,
    summary: 'Observability and reliability operations at scale.',
    items: ['Application Management', 'Logging', 'Monitoring', 'Alerting', 'SLA Management']
  }
];

const roleMappings = [
  {
    role: 'Cloud Engineers',
    uses: 'Cloud Stack + DevOps Tools Stack',
    focus: 'Provision, secure, and scale multi-cloud and hybrid infrastructure.'
  },
  {
    role: 'AI Engineers',
    uses: 'Automation Stack + Cloud Stack',
    focus: 'Build and deploy AI-driven automations and voice-agent workflows.'
  },
  {
    role: 'Infrastructure Engineers',
    uses: 'Cloud Stack + DevOps Tools Stack + SRE Stack',
    focus: 'Maintain resilient core systems and platform foundations.'
  },
  {
    role: 'SRE Engineers',
    uses: 'SRE Stack + DevOps Tools Stack',
    focus: 'Improve reliability, incident response, and SLA performance.'
  },
  {
    role: 'Platform Engineers',
    uses: 'DevOps Tools Stack + SRE Stack + Automation Stack',
    focus: 'Standardize internal platforms and developer productivity tooling.'
  }
];

const ToolsStack = () => {
  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.2),transparent_35%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-300/10 border border-cyan-200/20 rounded-full mb-4">
            Platforms and Tooling
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies We Work With Every Day
          </h2>
          <p className="text-slate-300">
            Our team is proficient across cloud, infrastructure, automation, and enterprise operations tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-3 text-cyan-200">
                <group.icon className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <p className="text-slate-300 text-sm mb-5">{group.summary}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-5 text-cyan-200">
            <Cog className="w-5 h-5" />
            <h3 className="text-xl font-semibold text-white">Who Uses What at SphereOps</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roleMappings.map((mapping) => (
              <div key={mapping.role} className="rounded-xl border border-white/15 bg-white/10 p-4">
                <h4 className="text-white font-semibold mb-1">{mapping.role}</h4>
                <p className="text-cyan-200 text-xs mb-2">{mapping.uses}</p>
                <p className="text-slate-300 text-sm">{mapping.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsStack;
