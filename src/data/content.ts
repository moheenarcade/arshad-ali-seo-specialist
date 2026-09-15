export const profile = {
  name: "Arshad Ali",
  role: "SEO Specialist",
  bio: "I'm a passionate SEO Specialist with 4 years of hands-on experience helping businesses increase search visibility, grow qualified organic traffic, and improve overall digital performance through data-driven SEO strategies. I specialize in On-Page SEO, Technical SEO, Semantic SEO, AEO, GEO, E-E-A-T, keyword research, search intent optimization, competitor analysis, and conversion-focused SEO.",
  bioSecondary:
    "By combining technical optimization, content strategy, topical authority, structured data, and continuous performance analysis, I build SEO programs that don't just move rankings \u2014 they attract the right audience, generate leads, and contribute to sustainable revenue growth.",
  linkedin: "https://www.linkedin.com/in/arshadaliseospecialist/",
  email: "arxhad.khan143@gmail.com",
};

export const stats = [
  { value: "10+", label: "Brands & projects delivered" },
  { value: "4", label: "Years in digital marketing" },
  { value: "+80%", label: "Best organic revenue uplift" },
  { value: "UK\u00b7US\u00b7AE\u00b7PK", label: "Markets covered" },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core SEO",
    skills: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "E-Commerce SEO",
      "Semantic SEO",
    ],
  },
  {
    title: "Search Strategy",
    skills: [
      "AEO & GEO Optimization",
      "Keyword Research",
      "Competitor Analysis",
      "SEO Content Writing",
    ],
  },
  {
    title: "Analytics & Tools",
    skills: ["GSC & GA4", "SEMrush", "Ahrefs & more"],
  },
  {
    title: "Platforms & Web",
    skills: ["Shopify", "WordPress", "HTML & CSS"],
  },
  {
    title: "Growth & Outreach",
    skills: ["Social Media Management"],
  },
];

export type Metric = {
  label: string;
  before: string;
  after: string;
  change: string;
  positive: boolean;
};

export type Project = {
  name: string;
  market: string;
  summary: string;
  bullets: string[];
  metrics: Metric[];
  sparkline: number[];
  evidence?: {
    src: string;
    alt: string;
    label: string;
  }[];
};

export const projects: Project[] = [
  {
    name: "Eliquidbase UK",
    market: "E-commerce \u00b7 UK",
    summary:
      "Vape and e-liquid retailer \u2014 rebuilt organic visibility through technical fixes, on-page work, and search-intent targeting.",
    bullets: [
      "Generated 33.2K organic clicks from 2.66M impressions in 6 months",
      "Implemented technical SEO, on-page optimization, keyword targeting, and internal linking",
      "Maintained a 1.2% average CTR through stronger titles and meta descriptions",
      "Recovered and improved organic visibility toward the end of the reporting period",
    ],
    metrics: [
      { label: "Clicks", before: "\u2014", after: "33.2K", change: "6 mo", positive: true },
      { label: "Impressions", before: "\u2014", after: "2.66M", change: "6 mo", positive: true },
      { label: "Avg. CTR", before: "\u2014", after: "1.2%", change: "steady", positive: true },
      { label: "Est. revenue lift", before: "\u2014", after: "40\u201345%", change: "potential", positive: true },
    ],
    sparkline: [12, 18, 15, 22, 28, 24, 30, 27, 33, 31, 36, 33],
    evidence: [
      {
        src: "/projects/eliquidbase/eliquedhero.png",
        alt: "Eliquidbase UK ecommerce homepage",
        label: "Website work",
      },
      {
        src: "/projects/eliquidbase/performance-evidance1.png",
        alt: "Google Search Console performance report for Eliquidbase UK",
        label: "Search performance",
      },
      {
        src: "/projects/eliquidbase/performance-evidance2.png",
        alt: "Semrush domain overview for Eliquidbase UK",
        label: "Visibility evidence",
      },
      {
        src: "/projects/eliquidbase/performance-evidance3.png",
        alt: "Semrush traffic and keyword growth report for Eliquidbase UK",
        label: "Traffic growth",
      },
    ],
  },
  {
    name: "Athletix AE",
    market: "E-commerce \u00b7 UAE",
    summary:
      "Fitness equipment retailer \u2014 scaled keyword coverage and content visibility to more than double search demand capture.",
    bullets: [
      "Grew organic clicks from 1.97K to 3.8K, an 80% increase in 6 months",
      "Expanded Google Search impressions from 203K to 457K, a 90% increase",
      "Captured 254K additional impressions and 1.83K additional clicks",
      "Improved average position from 24.9 to 29.7 while visibility more than doubled",
    ],
    metrics: [
      { label: "Clicks", before: "1.97K", after: "3.8K", change: "+80%", positive: true },
      { label: "Impressions", before: "203K", after: "457K", change: "+90%", positive: true },
      { label: "CTR", before: "1%", after: "0.8%", change: "watch", positive: false },
      { label: "Est. revenue lift", before: "\u2014", after: "~50%", change: "potential", positive: true },
    ],
    sparkline: [10, 14, 13, 19, 24, 22, 27, 25, 31, 29, 35, 38],
  },
  {
    name: "Vizz Web Solutions",
    market: "IT Services \u00b7 Global",
    summary:
      "Technology partner site \u2014 ranking-focused SEO execution that turned fewer impressions into more, higher-quality clicks.",
    bullets: [
      "Increased organic clicks from 2.23K to 2.75K, up 23.3% in 6 months",
      "Improved average Google ranking from 27.5 to 17.4, up 10.1 positions",
      "Raised organic CTR from 0.4% to 0.5%, up 25%",
      "Grew clicks by 520 despite a 6.6% drop in impressions, from better rankings",
    ],
    metrics: [
      { label: "Clicks", before: "2.23K", after: "2.75K", change: "+23.3%", positive: true },
      { label: "Avg. position", before: "27.5", after: "17.4", change: "+10.1", positive: true },
      { label: "CTR", before: "0.4%", after: "0.5%", change: "+25%", positive: true },
      { label: "Est. revenue lift", before: "\u2014", after: "~23%", change: "potential", positive: true },
    ],
    sparkline: [20, 19, 21, 20, 22, 21, 23, 22, 24, 25, 26, 27],
  },
  {
    name: "Hamara Venue",
    market: "Events Marketplace \u00b7 Pakistan",
    summary:
      "Banquet hall and event-venue directory \u2014 sharpened service-page targeting to convert more high-intent bookings.",
    bullets: [
      "Increased organic clicks from 44.6K to 47K, up 5.4% in 6 months",
      "Improved organic CTR from 1.6% to 1.8%, up 12.5%",
      "Strengthened average ranking from 6.7 to 6.3, holding Page-1 visibility",
      "Grew clicks by 2.4K despite an 8.5% drop in impressions, from sharper targeting",
    ],
    metrics: [
      { label: "Clicks", before: "44.6K", after: "47K", change: "+5.4%", positive: true },
      { label: "Avg. position", before: "6.7", after: "6.3", change: "+0.4", positive: true },
      { label: "CTR", before: "1.6%", after: "1.8%", change: "+12.5%", positive: true },
      { label: "Est. revenue lift", before: "\u2014", after: "~5\u20136%", change: "potential", positive: true },
    ],
    sparkline: [40, 41, 42, 43, 45, 44, 46, 45, 47, 46, 47, 47],
  },
];

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: "Senior SEO Specialist",
    company: "Vizz Web Solutions",
    location: "Islamabad, Pakistan",
    period: "Sep 2025 \u2013 Present",
    bullets: [
      "Lead data-driven SEO strategies using advanced On-Page, Semantic SEO, and E-E-A-T practices to improve rankings, topical authority, organic visibility, and conversions.",
      "Implement AEO and GEO strategies through structured data, featured-snippet optimization, and intent-focused content to strengthen visibility across traditional and AI-driven search.",
      "Conduct competitor and keyword-gap analysis using Ahrefs and Semrush, while optimizing landing pages, backlink opportunities, and content strategies to support sustainable organic growth.",
    ],
  },
  {
    title: "SEO Specialist",
    company: "ClickMasters Digital Marketing Agency",
    location: "Islamabad, Pakistan",
    period: "Mar 2024 \u2013 Aug 2025",
    bullets: [
      "Managed On-Page, Off-Page, and Technical SEO, including keyword research, keyword mapping, metadata, internal linking, and content optimization based on search intent.",
      "Conducted technical SEO audits and resolved crawlability, indexing, canonicalization, site-structure, mobile, and schema-related issues in collaboration with developers.",
      "Executed white-hat link-building through HARO and niche edits, monitored key SEO KPIs, and adjusted strategies based on ranking trends and Google algorithm updates.",
    ],
  },
  {
    title: "SEO Executive",
    company: "Seven Koncepts Pvt. Ltd.",
    location: "Rawalpindi, Pakistan",
    period: "Apr 2023 \u2013 Feb 2024",
    bullets: [
      "Optimized metadata, URLs, image alt tags, internal links, and website content to improve crawlability, keyword relevance, and organic search rankings.",
      "Performed keyword research, prepared SEO content briefs for blogs and service pages, and resolved duplicate-content issues while improving search-intent alignment and readability.",
      "Supported Off-Page and Technical SEO through business listings, profile creation, blog commenting, sitemap and robots.txt optimization, and regular SERP and keyword monitoring.",
    ],
  },
];

export const certifications = [
  { name: "On-Page & Technical SEO", issuer: "Semrush Academy" },
  { name: "Keyword Research", issuer: "Semrush Academy" },
  { name: "HTML & CSS", issuer: "OpenWeaver" },
  { name: "Local SEO", issuer: "Semrush Academy" },
  { name: "Fundamentals of SEO", issuer: "Semrush Academy" },
];
