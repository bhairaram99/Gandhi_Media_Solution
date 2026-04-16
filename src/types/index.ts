export interface NavMegaColumn {
  heading: string;
  links: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  megaMenu?: NavMegaColumn[];
}

export interface HeroData {
  eyebrow: string;
  titleMain: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  primaryHref?: string;
  secondaryHref?: string;
  scrollTarget?: string;
}

export interface AboutFeature {
  title: string;
  description: string;
}

export interface AboutData {
  eyebrow: string;
  title: string;
  description: string;
  features: AboutFeature[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface ContactCtaData {
  title: string;
  description: string;
  primaryCta: string;
}

export interface HomeContent {
  hero: HeroData;
  about: AboutData;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  testimonials: TestimonialItem[];
  cta: ContactCtaData;
}
