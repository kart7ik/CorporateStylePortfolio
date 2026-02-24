import { WorkItem, SkillCategory, ExperienceItem, GalleryImage, ContactLink } from '../models/portfolio.models';

export const WORK_ITEMS: WorkItem[] = [
  {
    index: '01',
    brand: 'Boss International Studies',
    title: 'Full-Funnel Performance Marketing Overhaul',
    tags: ['Meta Ads', 'Performance Marketing', 'Creative Strategy', 'Lead Generation'],
    description: 'Led complete paid inbound lead generation for a student visa & international education brand. Transitioned from social media management to owning full-funnel growth — TOFU awareness through Instagram and BOFU conversion via Meta Ads — improving lead quality through iterative creative testing and audience refinement.',
    metrics: [
      { value: '2Cr+', label: 'Monthly Reach' },
      { value: '10K+', label: 'Followers Added' },
      { value: '↓ CPL', label: 'Cost Per Lead' }
    ]
  },
  {
    index: '02',
    brand: 'Elite Power Sports',
    title: 'Organic Content Engine — YouTube & Multi-Platform',
    tags: ['YouTube Strategy', 'Content Systems', 'Brand Storytelling', 'Organic Growth'],
    description: 'Built and managed a complete organic content marketing system from scratch for a sports brand. Owned full content calendars, planned and produced YouTube live and recorded content, and drove mid-funnel engagement through reels, product storytelling, and blog content — zero paid spend.',
    metrics: [
      { value: '328K+', label: 'YouTube Views' },
      { value: '24.8K', label: 'Watch Hours' }
    ]
  },
  {
    index: '03',
    brand: 'RXN Sports · KG Cricket',
    title: 'From Niche Brand to ₹50L in 30 Days',
    tags: ['Meta Ads', 'Micro-Influencer', 'Amazon Marketplace', 'D2C Growth'],
    description: 'Generated 3,861 qualified leads at ₹5.83 CPL, drove ₹1,00,000+ from a 500-follower micro-influencer, scaled website revenue 29% in 3 months, and contributed to ₹50L in Amazon sales in 30 days — through coordinated Meta campaigns, coupon-led influencer attribution, and niche content strategy.',
    metrics: [
      { value: '3,861+', label: 'Leads at ₹5.83 CPL' },
      { value: '₹50L', label: 'Amazon in 30 Days' },
      { value: '+29%', label: 'Website Revenue' }
    ],
    caseStudyLink: '/rxn-case-study',
    caseStudyLabel: 'View Full Case Study →'
  },
  {
    index: '04',
    brand: 'Jigsaw Olympiad · HCL × Times of India',
    title: 'Student Acquisition Campaign',
    tags: ['Event Marketing', 'Influencer Targeting', 'Community Growth'],
    description: 'Drove student acquisition for a national-level Olympiad co-organised by HCL and Times of India. Managed school outreach programs and targeted influencer campaigns to generate qualified sign-ups — balancing community engagement with performance distribution.',
    metrics: [
      { value: '350+', label: 'Sign-ups Driven' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Performance & Paid',
    skills: ['Meta Ads (Facebook & Instagram)', 'Google Ads', 'CPL Reduction & Optimisation', 'A/B Creative Testing', 'Audience Segmentation', 'Full-Funnel Campaign Strategy']
  },
  {
    label: 'Social & Content',
    skills: ['Instagram Growth & Strategy', 'YouTube Content & Production', 'Reels / Short-Form Video', 'Content Calendar Management', 'Influencer Collaborations', 'Community Building']
  },
  {
    label: 'Strategy & Positioning',
    skills: ['Brand-Led Growth Strategy', 'Consumer Psychology', 'Creative Strategy', 'Storytelling Frameworks', 'Growth Loop Design', 'Funnel Architecture']
  },
  {
    label: 'Tools & Analytics',
    skills: ['Meta Business Suite', 'Google Analytics 4 (GA4)', 'Looker Studio', 'Notion', 'Canva / Figma', 'Data Science (IBM Certified)']
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    dateRange: 'Aug 2024 – Present',
    role: 'Digital Marketing & Content Manager',
    company: 'Boss International Studies',
    description: 'Full-funnel growth ownership — Meta performance campaigns, creative strategy, Instagram brand building.'
  },
  {
    dateRange: 'Sep 2022 – Aug 2024',
    role: 'Digital Media Executive',
    company: 'Elite Power Sports',
    description: 'Organic content engine, YouTube growth, multi-platform content strategy for a sports brand.'
  },
  {
    dateRange: 'Ongoing',
    role: 'Growth Marketing Consultant',
    company: 'KG Cricket · RXN Sports',
    description: 'Paid & organic strategy, influencer collabs, product launch consulting for micro D2C sports brands.'
  },
  {
    dateRange: 'Sep 2021 – Jun 2022',
    role: 'Freelance Technical Writer',
    company: 'GeeksforGeeks',
    description: 'Research-based technical content, audience-focused writing, content strategy.'
  },
  {
    dateRange: 'Education',
    role: 'BCA · Minor in Data Science',
    company: 'Lovely Professional University · CGPA 8.54',
    description: 'IBM Data Science Orientation (Coursera) · McKinsey.org Forward Program'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/dkwiquxyb/image/upload/v1771954364/With_Sunny_Bhandarkar_and_Kaustub_of7oml.jpg',
    alt: 'With CEO of ESI, EPBL India',
    caption: 'With CEO of ESI & CMO of EPBL India — Mr. Sunny Bhandarkar & Mr. Kaustub'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1mepMxeJ6QKPbydhiaxFgbHlbpE6Zn5o3',
    alt: 'Presenting at Might West Championship',
    caption: 'Presenting at Might West Championship, IPS College Gwalior — LPU DSO Events 2022'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1cDEBiv4veDEwH3wEwdMrBm_Iijz2c64v',
    alt: 'LPU Har Ghar Tiranga Campaign',
    caption: 'Wrapping Up the LPU Har Ghar Tiranga Campaign'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1HQpeJApxUsZv8SzUsqb_8nc5IG2g4L-V',
    alt: 'AIU Esports Championship BTS',
    caption: 'Behind the Scenes — AIU Esports Championship'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1HyZvyAU2ApOfisxdfuG80fmG5JHhSFEd',
    alt: 'Team RXN Sports at Fit India Event Delhi',
    caption: 'With Team RXN Sports at the Fit India Event, Delhi'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1L4E4-xwsGgN12Ntu65EVqGLyIsq8DRhM',
    alt: 'Brand Collab with Neeraj Goyat',
    caption: 'Brand Collab with Influencer Neeraj Goyat — Shimla Pro Boxing Event'
  },
  {
    src: 'https://drive.google.com/uc?export=view&id=1wLTH2k8Yxwt2Wu9KBKd6HQ5bq8cXz8Qv',
    alt: 'Delhi Government Event with Sports Minister',
    caption: 'Delhi Government of India Event — with Sports & Youth Affairs Minister of India',
    spanFull: true
  }
];

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'Email', value: 'kartikjoshi305@gmail.com', href: 'mailto:kartikjoshi305@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kart7ik', href: 'https://www.linkedin.com/in/kart7ik' },
  { label: 'Phone', value: '+91 63976 84617', href: 'tel:+916397684617' }
];
