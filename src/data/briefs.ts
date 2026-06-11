export interface GrowthBrief {
  id: string;
  sector: string;
  badge: string;
  tagline: string;
  roiMetric: string;
  roiLabel: string;
  frameworkSteps: string[];
  description: string;
}

export const GROWTH_BRIEFS: GrowthBrief[] = [
  {
    id: "saas",
    sector: "SaaS & PLG",
    badge: "Product-Led Ingress",
    tagline: "Optimizing product experiences to turn users into distribution loops.",
    roiMetric: "4.8x",
    roiLabel: "Avg LTV to CAC Ratio Boost",
    description: "Engineering seamless user activation paths. I map high-precision value moments, design dynamic self-serve funnels, and install behavioral trigger sequences that convert free trials to enterprise-tier contracts.",
    frameworkSteps: [
      "Frictionless Onboarding Reconstruction",
      "Behavioral Churn Prevention System",
      "Feature-Gate Optimization Matrix"
    ]
  },
  {
    id: "ecom",
    sector: "D2C & Retail",
    badge: "Hyper-Scale Conversion",
    tagline: "Unlocking profitable scaling on paid channels and performance optimization.",
    roiMetric: "-38%",
    roiLabel: "Client CAC Reduction",
    description: "Combining creative strategy with predictive analytics. I build conversion-rate optimization (CRO) assets and programmatic retargeting architectures that scale store purchase volume without soaring ad budgets.",
    frameworkSteps: [
      "Landing Page CRO Overhaul",
      "Multi-Channel Attribution Setup",
      "Post-Purchase Expansion Loops"
    ]
  },
  {
    id: "web3",
    sector: "Web3 & Community",
    badge: "Viral Distribution",
    tagline: "Leveraging decentralized networks, social capital, and high-momentum content.",
    roiMetric: "22k+",
    roiLabel: "Active Advocates Acquired",
    description: "Designing high-leverage referral mechanics and community incentive designs. I engineer distribution engines that empower audiences to co-create value, driving zero-cost organic growth.",
    frameworkSteps: [
      "Tokenomic Incentive Alignment",
      "Micro-Influencer Syndicates",
      "Decentralized Word-of-Mouth Engine"
    ]
  },
  {
    id: "enterprise",
    sector: "Performance Brand",
    badge: "Full-Funnel Conquest",
    tagline: "Injecting high-performance marketing into established companies.",
    roiMetric: "+143%",
    roiLabel: "Inbound Pipeline Growth",
    description: "Formulating cohesive search, social, and positioning frameworks. I build cross-functional growth sprints that unify marketing technology, creative assets, and live attribution models.",
    frameworkSteps: [
      "Account-Based Marketing Sprint (ABM)",
      "Technical Search Dominance (SEO)",
      "High-Value Thought Leadership Funnel"
    ]
  }
];
