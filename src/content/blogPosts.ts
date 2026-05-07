export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  inlineImage: string;
  inlineImageAlt: string;
  keyOutcomes: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'cloud-cost-optimization-without-slowing-delivery',
    title: 'How We Approach Cloud Cost Optimization Without Slowing Delivery',
    excerpt:
      'A practical framework for reducing cloud spend while preserving engineering velocity and service reliability.',
    date: 'May 2026',
    readTime: '6 min read',
    category: 'Cloud Operations',
    coverImage:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_EC2_AWS_pricing_compared_to_similar_services_1.jpg',
    coverAlt: 'Cloud provider pricing comparison graphic for infrastructure cost analysis',
    inlineImage:
      'https://wikitech.wikimedia.org/wiki/Special:FilePath/WMF_infrastructure_2022.png',
    inlineImageAlt: 'Infrastructure overview diagram showing platform components and dependencies',
    keyOutcomes: [
      '31% reduction in monthly cloud spend over 10 weeks',
      'No freeze on feature delivery while optimization was running',
      'Automated budget guardrails across all non-production environments',
    ],
    content: [
      'In a recent engagement with a B2B SaaS platform running on AWS, monthly cloud costs had risen faster than customer growth. Leadership asked for a cost reduction plan, but engineering made it clear they could not pause roadmap delivery during the quarter.',
      'We started with a two-week baseline assessment across compute, storage, data transfer, and managed services. The biggest opportunities were idle staging clusters, oversized worker nodes, duplicate data retention windows, and always-on preview environments with low business value.',
      'After agreeing on service-level constraints with product and engineering leads, we executed right-sizing and schedule-based scaling first, then introduced reserved capacity for steady workloads. We also implemented storage lifecycle policies for logs and backups, reducing long-tail storage costs without affecting compliance requirements.',
      'To keep decisions transparent, we deployed a shared cost governance dashboard that mapped spend by product area and owner. This shifted the conversation from reactive invoice reviews to proactive engineering trade-offs. The result was a 31% spend reduction in 10 weeks, while deployment frequency remained stable.',
    ],
  },
  {
    slug: 'reliable-cicd-implementation-playbook',
    title: 'From Manual Releases to Reliable CI/CD: Our Implementation Playbook',
    excerpt:
      'The delivery model we use to move teams from ad-hoc deployments to structured, low-risk release pipelines.',
    date: 'May 2026',
    readTime: '8 min read',
    category: 'DevOps',
    coverImage:
      'https://www.mediawiki.org/wiki/Special:FilePath/Deployment_pipeline_simplified_overview.png',
    coverAlt: 'Deployment pipeline overview from commit to production',
    inlineImage:
      'https://www.mediawiki.org/wiki/Special:FilePath/Wikimedia_CI_workflow.svg',
    inlineImageAlt: 'Continuous integration workflow diagram',
    keyOutcomes: [
      'Release lead time reduced from 3 days to under 2 hours',
      'Change failure rate dropped from 28% to 9%',
      'Rollback workflow standardized for every production service',
    ],
    content: [
      'One of our fintech clients had strong engineering talent but an inconsistent release process. Production deployments relied on manual checklists, approvals in chat, and engineer-specific knowledge. This created predictable incidents during high-pressure launch windows.',
      'We rebuilt the release flow in phases. First, we documented service dependencies and introduced repeatable build artifacts. Then we implemented pipeline stages for automated testing, policy checks, and environment promotion rules. Every production deployment gained a deterministic rollback path tested before go-live.',
      'The final phase focused on operational discipline: release ownership, incident postmortems linked to pipeline improvements, and weekly delivery metrics reviewed jointly by engineering and product. Over three sprints, the team moved from fragile manual releases to a reliable CI/CD model with measurable quality improvements.',
      'Most importantly, delivery became less person-dependent. New engineers could ship safely using the same standards, and leadership gained confidence to increase release cadence without increasing outage risk.',
    ],
  },
  {
    slug: 'observability-that-helps-during-incidents',
    title: 'Designing Observability That Actually Helps During Incidents',
    excerpt:
      'How we structure logs, metrics, and alerts so teams can detect, triage, and resolve production issues faster.',
    date: 'April 2026',
    readTime: '7 min read',
    category: 'SRE',
    coverImage:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Network_traffic_during_September_2019_DDoS_attack_on_Wikipedia_(small).jpg',
    coverAlt: 'Network traffic visualization from a real-world incident scenario',
    inlineImage:
      'https://wikitech.wikimedia.org/wiki/Special:FilePath/Infrastructure_overview.png',
    inlineImageAlt: 'Infrastructure architecture map used for operational reliability planning',
    keyOutcomes: [
      'Alert noise reduced by 46% in the first month',
      'MTTR improved from 74 minutes to 29 minutes',
      'Unified logs, metrics, and traces adopted across all critical services',
    ],
    content: [
      'A digital services client came to us after multiple high-priority incidents where teams struggled to isolate root causes quickly. They had dashboards and alerts in place, but signal quality was poor and telemetry standards differed across services.',
      'Our first step was to define service-level indicators that reflected user-facing reliability, not only infrastructure health. We then standardized instrumentation patterns for API latency, dependency failures, queue processing delays, and deployment events so responders had a consistent incident view.',
      'Next, we redesigned alerting with severity tiers, ownership routing, and suppression windows to reduce low-value noise. Runbooks were rewritten around practical decision points: what to verify first, what to roll back, and when to escalate.',
      'Within a month, alert volume dropped by 46% and incident response improved materially. The key lesson: observability succeeds when it supports decision-making under pressure, not when it maximizes raw telemetry collection.',
    ],
  },
];
