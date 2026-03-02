export interface PricingPackage {
    id: string;
    title: string;
    subtitle?: string;
    price: string;
    period?: string; // e.g., "One-Time", "Monthly"
    description: string;
    features: string[];
    highlight?: boolean;
    ctaText: string;
    ctaLink: string;
    perfectFor?: string;
}

export const developmentPackages: PricingPackage[] = [
    {
        id: 'launchpad',
        title: 'LaunchPad Package',
        subtitle: 'Website & MVP Development',
        price: '$499 – $999',
        period: 'One-Time Project Fee',
        description: 'Ideal for startups, entrepreneurs, and small businesses needing a professional launch or to validate a new concept.',
        perfectFor: 'Startups, Entrepreneurs, Small Businesses',
        features: [
            '2–4 Weeks Project Duration',
            'High-Performance Website or MVP (up to 3 core features)',
            'Tech Stack: FastAPI / Next.js / Firebase / Vercel',
            'Fully Deployed Production Environment',
            '30 Days Complimentary Bug Fixes',
            'Regular Email/WhatsApp Updates',
        ],
        ctaText: 'Start Project',
        ctaLink: '/contact?package=launchpad',
    },
    {
        id: 'growth-retainer',
        title: 'Growth Retainer',
        subtitle: 'Continuous Development',
        price: '$1,499',
        period: 'Monthly Retainer',
        description: 'Ideal for businesses ready to iterate, scale, and optimize their product after the initial launch.',
        features: [
            'Up to 10 Dedicated Dev Hours/Month',
            'Monthly Performance Reviews',
            'Proactive Bug Fixes',
            'Quarterly Roadmap & Strategy Meeting',
            'Priority Chat Access',
            'Weekly Progress Updates',
            'Managed Hosting (Vercel/Cloud Run)',
        ],
        highlight: true,
        ctaText: 'Subscribe',
        ctaLink: '/contact?package=growth-retainer',
    },
    {
        id: 'partner-retainer',
        title: 'Partner Retainer',
        subtitle: 'Embedded Technical Partner',
        price: '$2,399 + $300–$500',
        period: 'Setup + Monthly Retainer',
        description: 'Ideal for established businesses seeking a dedicated, long-term technology partner to drive growth and innovation.',
        features: [
            'Tailored Development Roadmap',
            'Reserved Development Hours (Flexible)',
            'Advanced AI & API Integration',
            'Cloud Architecture Expertise',
            'Bi-weekly Strategic Calls',
            'Comprehensive Documentation',
            'Detailed Performance Reports',
            'Revenue-Share Options Available',
        ],
        ctaText: 'Partner With Us',
        ctaLink: '/contact?package=partner-retainer',
    },
    {
        id: 'custom-dev',
        title: 'Custom Enterprise',
        subtitle: 'Tailored Solutions',
        price: 'Custom',
        period: 'Project or Retainer',
        description: 'For large-scale platforms, SaaS products, or complex system integrations requiring a full team.',
        features: [
            'Full-Cycle SaaS Development',
            'Custom Architecture Design',
            'Multi-Agent System Implementation',
            'Dedicated Cross-Functional Team',
            'Enterprise SLA Support',
        ],
        ctaText: 'Contact Sales',
        ctaLink: '/contact?package=custom-dev',
    },
];

export const marketingPackages: PricingPackage[] = [
    {
        id: 'essential',
        title: 'Essential',
        subtitle: 'Digital Foundation',
        price: '$599',
        period: 'Monthly Investment',
        description: 'Designed to solve the "Visibility Gap". Focus on AEO to ensure your brand appears in AI search results.',
        features: [
            'Core Focus: Digital Foundation',
            'Answers Engine Optimization (AEO)',
            'Standard Support',
            '20 Social Posts / Stories',
            '5 Reels / Shorts',
            'Basic Review Monitoring',
            'Basic SEO Setup',
            'Email Support Only',
            'Monthly Insights Report',
        ],
        ctaText: 'Get Started',
        ctaLink: '/contact?package=marketing-essential',
    },
    {
        id: 'growth',
        title: 'Growth',
        subtitle: 'Conversion Engine',
        price: '$999',
        period: 'Monthly Investment',
        description: 'Our most popular tier. Includes a Dedicated Account Manager and Custom AI Concierge to handle inquiries.',
        features: [
            'Core Focus: Automation & Engagement',
            'Dedicated Account Manager',
            '40 Social Posts / Stories',
            '12 Reels / Shorts',
            'Active AI-Response Reviews',
            'Advanced GEO & Semantic Hub',
            'AI Concierge (WhatsApp/Web)',
            '1 Localized Market Expansion',
            'Bi-Weekly Review Sessions',
        ],
        highlight: true,
        ctaText: 'Scale Now',
        ctaLink: '/contact?package=marketing-growth',
    },
    {
        id: 'dominance',
        title: 'Dominance',
        subtitle: 'Market Authority',
        price: '$1,499',
        period: 'Monthly Investment',
        description: 'Total market takeover. Senior Solutions Manager and high-output content machine for global leaders.',
        features: [
            'Core Focus: Market Authority & Scaling',
            'Senior Solutions Manager',
            '60+ Social Posts / Stories',
            '20 Reels / Shorts',
            'Reputation Strategy',
            'Total Engine Dominance',
            'Multi-Agent Ops Ecosystem',
            '3+ Global Markets Expansion',
            'Real-Time AI Dashboard',
        ],
        ctaText: 'Dominate Market',
        ctaLink: '/contact?package=marketing-dominance',
    },
    {
        id: 'custom-marketing',
        title: 'Custom Brand',
        subtitle: 'Bespoke Strategy',
        price: 'Custom',
        period: 'Monthly',
        description: 'For brands with unique requirements, specific campaign goals, or complex multi-channel needs.',
        features: [
            'Custom Content Volume',
            'Influencer Management',
            'Paid Ad Management',
            'Custom AI Tools Integration',
            'Cross-Platform Strategy',
        ],
        ctaText: 'Contact Us',
        ctaLink: '/contact?package=custom-marketing',
    },
];

export const agencyPackages: PricingPackage[] = [
    {
        id: 'agency-foundation',
        title: 'The Foundation',
        price: '$399',
        period: 'One-Time + $200-$400/mo Retainer',
        description: 'Best for: Businesses invisible to 80% of their local neighborhood. Goal: Digital Visibility & Identity.',
        features: [
            'Local Map Dominance: #1 result in your district.',
            'AEO (AI Search): Siri and Gemini recommend you first.',
            'Digital Proof Engine: Wall of 5-star positive sentiment.',
            'High-Conversion Web: Mobile-friendly site for leads.',
        ],
        ctaText: 'Start Foundation',
        ctaLink: '/contact?package=agency-foundation',
    },
    {
        id: 'agency-automator',
        title: 'The Automator',
        price: '$599',
        period: 'One-Time + $200-$400/mo Retainer',
        description: 'Best for: Businesses losing revenue due to missed inquiries. Goal: 24/7 AI Response & Automation.',
        features: [
            'The 2-Minute Rule: Instant response, no lost leads.',
            'AI WhatsApp Concierge: Triage & booking in EN/AR.',
            'Calendar Integration: Intelligent appointment booking.',
            'The 3:00 AM Receptionist: 24/7 flawless engagement.',
        ],
        highlight: true,
        ctaText: 'Get The Automator',
        ctaLink: '/contact?package=agency-automator',
    },
    {
        id: 'agency-dominator',
        title: 'The Dominator',
        price: '$999',
        period: 'One-Time + $200-$400/mo Retainer',
        description: 'Best for: Market leaders seeking total digital transformation. Goal: Lifecycle Loyalty & Retention.',
        features: [
            'No-Show Recovery: AI rescheduling via WhatsApp.',
            'Smart Upsells: Data-driven customer offers.',
            'Retention Management: Personalized loyalty programs.',
            'Complete Digital Ecosystem Control.',
        ],
        ctaText: 'Dominate Now',
        ctaLink: '/contact?package=agency-dominator',
    },
    {
        id: 'custom-agency',
        title: 'Custom Blueprint',
        price: 'Custom',
        period: 'Tailored Scope',
        description: 'For businesses with unique models requiring a bespoke combination of automation, marketing, and systems.',
        features: [
            'Dedicated Solutions Architect',
            'Custom Multi-Agent Workflows',
            'Advanced API / CRM Integrations',
            'Bespoke AI Training & Deployment',
        ],
        ctaText: 'Design Your Plan',
        ctaLink: '/contact?package=custom-agency',
    },
];

export interface PricingAddOn {
    title: string;
    price: string;
}

export const agencyAddOns: PricingAddOn[] = [
    { title: 'Website Design & Building', price: '$399 USD' },
    { title: 'CRM/ERP Setup', price: '$599 USD' },
    { title: 'Custom AI Agents', price: '$399 USD' },
];
