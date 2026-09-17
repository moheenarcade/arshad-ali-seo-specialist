export const profile = {
  name: "Arshad Ali",
  role: "SEO Specialist",
  bio: "I’m a passionate SEO Specialist with 4 years of hands-on experience helping businesses increase search visibility, grow qualified organic traffic, and improve overall digital performance through data-driven SEO strategies. I specialize in On-Page SEO, Technical SEO, Semantic SEO, AEO, GEO, E-E-A-T, Keyword Research, search intent optimization, competitor analysis, and conversion-focused SEO. By combining technical optimization, content strategy, topical authority, structured data, and continuous performance analysis, I create SEO strategies that not only improve rankings and online visibility but also attract the right audience, generate more leads and customers and contribute to sustainable revenue growth. ",
  bioSecondary:
    "By combining technical optimization, content strategy, topical authority, structured data, and continuous performance analysis, I build SEO programs that don't just move rankings \u2014 they attract the right audience, generate leads, and contribute to sustainable revenue growth.",
  linkedin: "https://www.linkedin.com/in/arshadaliseospecialist/",
  email: "arxhad.khan143@gmail.com",
};

export const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "4", label: "Years Experience in SEO" },
  { value: "+70%", label: "Best Organic Revenue Uplift" },
  { value: "UK\u00b7US\u00b7AE\u00b7PK", label: "Markets Covered" },
];

export const expertise = [
  "Google Search Console",
  "Google Analytics (GA4)",
  "AI Search Optimization (AEO & GEO)",
  "Keyword Research",
  "Competitor Analysis",
  "Semrush",
  "Ahrefs",
  "Screaming Frog",
  "On-Page SEO",
  "Off-Page SEO",
  "Local SEO",
  "Technical SEO",
  "Shopify",
  "WordPress",
  "SEO Content Writing",
  "HTML & CSS",
  "Semantic SEO",
  "E-Commerce SEO",
  "Social Media Management",
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
      "Generated 33.2K organic clicks from 2.66M impressions in 6 months, showing strong SEO-driven visibility and traffic growth.",
      "Implemented technical SEO, On-page optimization, keyword targeting, internal linking, and content improvements to strengthen overall organic performance.",
      "Maintained a 1.2% average CTR while reaching millions of search impressions, supported by better titles, meta descriptions, and search intent targeting.",
      "Improved and recovered organic visibility toward the end of the reporting period, with a clear rise in impressions and a strong click peak.",
      "Based on this level of organic traffic growth, the SEO results could support an estimated 40–45% revenue growth potential, depending on conversions and average order value.",
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
      "Increased organic clicks from 1.97K to 3.8K (80%) over the latest 6 months, showing strong traffic gains from improved keyword targeting, on-page optimization, and content visibility.",
      "Expanded Google Search impressions from 203K to 457K (90%), indicating significantly broader SERP reach supported by content optimization, keyword coverage, and indexable-page improvements.",
      "Generated 254K additional impressions and 1.83K additional clicks, demonstrating that the SEO strategy successfully increased search demand capture and organic acquisition at scale.",
      "Maintained a 0.8% CTR while visibility more than doubled, highlighting an opportunity for continued title/meta-description and SERP-snippet optimization to convert the expanded impression base into more clicks.",
      "Based on the 80% organic click growth, estimated revenue potential is approximately 50%, while ranking optimization can address the position shift from 24.9 to 29.7 and unlock further growth.",
    ],
    metrics: [
      { label: "Clicks", before: "1.97K", after: "3.8K", change: "+80%", positive: true },
      { label: "Impressions", before: "203K", after: "457K", change: "+90%", positive: true },
      { label: "CTR", before: "1%", after: "0.8%", change: "watch", positive: false },
      { label: "Est. revenue lift", before: "\u2014", after: "~50%", change: "potential", positive: true },
    ],
    sparkline: [10, 14, 13, 19, 24, 22, 27, 25, 31, 29, 35, 38],
     evidence: [
      {
        src: "/projects/AthletixAE/athletix-hero.png",
        alt: "AthletixAE ecommerce homepage",
        label: "Website work",
      },
      {
        src: "/projects/AthletixAE/performance-evidance1.png",
        alt: "Google Search Console performance report for AthletixAE",
        label: "Search performance",
      },
      {
        src: "/projects/AthletixAE/performance-evidance2.png",
        alt: "Semrush domain overview for AthletixAE",
        label: "Visibility evidence",
      },
      {
        src: "/projects/AthletixAE/performance-evidance3.png",
        alt: "Semrush traffic and keyword growth report for AthletixAE",
        label: "Traffic growth",
      },
    ],
  },
  {
    name: "Vizz Web Solutions",
    market: "IT Services \u00b7 Global",
    summary:
      "Technology partner site \u2014 ranking-focused SEO execution that turned fewer impressions into more, higher-quality clicks.",
    bullets: [
      "Increased organic clicks from 2.23K to 2.75K (+23.3%) through ranking-focused SEO execution, generating substantially more qualified search traffic over the latest 6-month period.",
      "Improved average Google ranking from 27.5 to 17.4 (+10.1 positions), reflecting stronger keyword relevance, on-page optimization, internal linking, and overall SERP competitiveness.",
      "Raised organic CTR from 0.4% to 0.5% (+25%), demonstrating stronger SERP engagement consistent with optimized title tags, meta descriptions, and search-intent alignment.",
      "Generated 520 additional organic clicks despite impressions declining from 604K to 564K (-6.6%), indicating significantly more efficient traffic acquisition from improved rankings and click-through performance.",
      "With organic clicks growing 23.3%, the project carries an estimated ~23% revenue-growth potential if conversion rate and average order value remain stable, highlighting the commercial impact of the SEO gains.",
    ],
    metrics: [
      { label: "Clicks", before: "2.23K", after: "2.75K", change: "+23.3%", positive: true },
      { label: "Avg. position", before: "27.5", after: "17.4", change: "+10.1", positive: true },
      { label: "CTR", before: "0.4%", after: "0.5%", change: "+25%", positive: true },
      { label: "Est. revenue lift", before: "\u2014", after: "~23%", change: "potential", positive: true },
    ],
    sparkline: [20, 19, 21, 20, 22, 21, 23, 22, 24, 25, 26, 27],
         evidence: [
      {
        src: "/projects/VizzWeb/VizzWeb-hero.png",
        alt: "Vizz Web Solutions homepage",
        label: "Website work",
      },
      {
        src: "/projects/VizzWeb/perfromance-evidance1.jpg",
        alt: "Google Search Console performance report for VizzWeb",
        label: "Search performance",
      },
      {
        src: "/projects/VizzWeb/performnace-evidance2.png",
        alt: "Semrush domain overview for VizzWeb",
        label: "Visibility evidence",
      },
      {
        src: "/projects/VizzWeb/performance-evidance3.png",
        alt: "Semrush traffic and keyword growth report for VizzWeb",
        label: "Traffic growth",
      },
    ],
  },
  {
    name: "Hamara Venue",
    market: "Events Marketplace \u00b7 Pakistan",
    summary:
      "Banquet hall and event-venue directory \u2014 sharpened service-page targeting to convert more high-intent bookings.",
    bullets: [
      "Increased organic clicks from 44.6K to 47K (+5.4%) through service-page keyword targeting and search-intent optimization, driving more qualified prospects toward event-planning enquiries.",
      "Improved organic CTR from 1.6% to 1.8% (+12.5%) through stronger SERP messaging, title-tag refinement, and service-focused metadata designed to attract high-intent event-planning searches.",
      "Strengthened average ranking from 6.7 to 6.3, maintaining strong Page-1 visibility for commercially valuable event-service queries through on-page optimization and internal-linking improvements.",
      "Generated 2.4K additional clicks despite impressions declining from 2.81M to 2.57M (-8.5%), indicating more efficient acquisition of relevant users through better keyword prioritization and conversion-focused organic visibility.",
      "With organic traffic increasing 5.4%, the campaign supports an estimated ~5–6% revenue/booking growth potential if enquiry conversion rate and average event-booking value remain consistent.",
    ],
    metrics: [
      { label: "Clicks", before: "44.6K", after: "47K", change: "+5.4%", positive: true },
      { label: "Avg. position", before: "6.7", after: "6.3", change: "+0.4", positive: true },
      { label: "CTR", before: "1.6%", after: "1.8%", change: "+12.5%", positive: true },
      { label: "Est. revenue lift", before: "\u2014", after: "~5\u20136%", change: "potential", positive: true },
    ],
    sparkline: [40, 41, 42, 43, 45, 44, 46, 45, 47, 46, 47, 47],
         evidence: [
      {
        src: "/projects/HamaraVenue/HamaraVenue-hero.png",
        alt: "Hamara Venue event-venue directory homepage",
        label: "Website work",
      },
      {
        src: "/projects/HamaraVenue/performance-evidance1.jpg",
        alt: "Google Search Console performance report for HamaraVenue",
        label: "Search performance",
      },
      {
        src: "/projects/HamaraVenue/performance-evidance2.png",
        alt: "Semrush domain overview for HamaraVenue",
        label: "Visibility evidence",
      },
      {
        src: "/projects/HamaraVenue/performance-evidance4.png",
        alt: "Semrush traffic and keyword growth report for HamaraVenue",
        label: "Traffic growth",
      },
    ],
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
