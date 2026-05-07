import React, { useMemo, useState } from 'react';
import { Bot, BriefcaseBusiness, MessageSquareText } from 'lucide-react';

type PricingOption = 'devops-hiring' | 'consultation' | 'ai-services';
type BillingMode = 'hourly' | 'monthly';

type PricingCard = {
  tier: string;
  price?: string;
  hourlyRate?: number;
  accent: string;
  description: string;
  points: string[];
};

const MONTHLY_HOURS = 160;
const MONTHLY_DISCOUNT = 0.25;

const formatCurrency = (amount: number) => `$${amount.toLocaleString('en-US')}`;

const pricingCatalog = {
  'devops-hiring': {
    label: 'Hire DevOps Engineers',
    icon: BriefcaseBusiness,
    cards: [
      {
        tier: 'L1 DevOps Engineer',
        hourlyRate: 25,
        accent: 'from-cyan-400 to-blue-500',
        description: 'Great for day-to-day operations, first-line support, and routine DevOps execution.',
        points: ['Monitoring and alert handling', 'Ticket triage and response', 'Runbook-based operations ownership']
      },
      {
        tier: 'L2 DevOps Engineer',
        hourlyRate: 35,
        accent: 'from-indigo-400 to-blue-600',
        description: 'Best for teams that need deeper troubleshooting and stronger deployment confidence.',
        points: ['Incident debugging and recovery', 'CI/CD and release support', 'Cloud performance optimization']
      },
      {
        tier: 'Senior DevOps Engineer',
        hourlyRate: 45,
        accent: 'from-fuchsia-400 to-violet-600',
        description: 'Ideal for advanced architecture, scaling strategy, and high-impact engineering leadership.',
        points: ['Platform architecture design', 'Reliability and security direction', 'Critical escalations and ownership']
      }
    ] as PricingCard[]
  },
  consultation: {
    label: 'Consultation Calls',
    icon: MessageSquareText,
    cards: [
      {
        tier: 'Consultation Session',
        price: '$50/hour',
        accent: 'from-emerald-400 to-cyan-500',
        description: 'Focused consulting session for architecture, migration, incident planning, and staffing guidance.',
        points: ['Structured 60-minute format', 'Actionable recommendations', 'Clear next-step plan after the call']
      }
    ] as PricingCard[]
  },
  'ai-services': {
    label: 'AI Agent Setup and Support',
    icon: Bot,
    cards: [
      {
        tier: 'AI Agent Pricing',
        price: '$499 setup + $59/month',
        accent: 'from-amber-400 to-orange-500',
        description: 'Transparent pricing for launching and maintaining AI agents in production.',
        points: [
          '$499 one-time setup fee',
          '$59/month recurring support and maintenance',
          'Covers updates, monitoring, and operational assistance'
        ]
      }
    ] as PricingCard[]
  }
} as const;

const Pricing = () => {
  const [selectedService, setSelectedService] = useState<PricingOption>('devops-hiring');
  const [billingMode, setBillingMode] = useState<BillingMode>('hourly');
  const selectedPricing = useMemo(() => pricingCatalog[selectedService], [selectedService]);
  const Icon = selectedPricing.icon;

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#38bdf8,transparent_35%),radial-gradient(circle_at_80%_0%,#6366f1,transparent_40%)]" />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14 relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-200 bg-cyan-300/10 border border-cyan-200/20 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Clear Pricing Built for Fast Decisions
          </h2>
          <p className="text-slate-300">
            Pick a service, view the exact pricing, and choose the engagement model that matches your team.
          </p>
        </div>

        <div className="relative z-10 max-w-xl mx-auto mb-8">
          <label htmlFor="pricing-service" className="block text-sm text-cyan-100 mb-2">
            Select the service you need
          </label>
          <div className="rounded-xl border border-cyan-200/40 bg-white p-3 shadow-lg">
            <select
              id="pricing-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value as PricingOption)}
              className="w-full bg-transparent text-slate-900 outline-none text-sm md:text-base font-medium"
            >
              {Object.entries(pricingCatalog).map(([value, option]) => (
                <option key={value} value={value} className="text-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 text-cyan-100 mb-4">
          <Icon className="w-5 h-5" />
          <span className="font-medium">{selectedPricing.label}</span>
        </div>

        {selectedService === 'devops-hiring' && (
          <div className="relative z-10 mb-6">
            <div className="inline-flex rounded-full border border-cyan-200/30 bg-slate-900/70 p-1">
              <button
                type="button"
                onClick={() => setBillingMode('hourly')}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  billingMode === 'hourly' ? 'bg-cyan-400 text-slate-900 font-semibold' : 'text-cyan-100'
                }`}
              >
                Hourly
              </button>
              <button
                type="button"
                onClick={() => setBillingMode('monthly')}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  billingMode === 'monthly' ? 'bg-cyan-400 text-slate-900 font-semibold' : 'text-cyan-100'
                }`}
              >
                Monthly (25% off)
              </button>
            </div>
            <p className="text-xs text-cyan-100/80 mt-2">
              Monthly pricing is based on {MONTHLY_HOURS} hours/engineer with a {MONTHLY_DISCOUNT * 100}% discount.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-10">
          {selectedPricing.cards.map((plan) => (
            <div
              key={plan.tier}
              className={`rounded-3xl bg-white border border-slate-200 shadow-[0_16px_40px_rgba(2,6,23,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(2,6,23,0.28)] overflow-hidden`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${plan.accent}`} />
              <div className="h-full p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-slate-800">
                    <BriefcaseBusiness className="w-5 h-5 text-sphere-blue" />
                    <span className="text-sm font-semibold tracking-wide">{plan.tier}</span>
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-2">
                  {selectedService === 'devops-hiring' && plan.hourlyRate ? (
                    billingMode === 'hourly' ? (
                      `${formatCurrency(plan.hourlyRate)}/hour`
                    ) : (
                      `${formatCurrency(plan.hourlyRate * MONTHLY_HOURS * (1 - MONTHLY_DISCOUNT))}/month`
                    )
                  ) : (
                    plan.price
                  )}
                </div>
                {selectedService === 'devops-hiring' && plan.hourlyRate && billingMode === 'monthly' && (
                  <p className="text-xs text-slate-500 mb-2">
                    Standard monthly total: {formatCurrency(plan.hourlyRate * MONTHLY_HOURS)}/month
                  </p>
                )}
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {plan.points.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-sphere-accent font-bold">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
