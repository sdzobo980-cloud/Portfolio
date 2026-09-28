export interface CtaLink {
  text: string;
  link: string;
}

export interface HeroData {
  image: string;
  status: string;
  name: string;
  position: string;
  description: string;
  cta: CtaLink[];
}
