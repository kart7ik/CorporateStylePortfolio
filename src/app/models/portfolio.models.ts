export interface WorkItem {
  index: string;
  brand: string;
  title: string;
  tags: string[];
  description: string;
  metrics: Metric[];
  caseStudyLink?: string;
  caseStudyLabel?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface ExperienceItem {
  dateRange: string;
  role: string;
  company: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  spanFull?: boolean;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
