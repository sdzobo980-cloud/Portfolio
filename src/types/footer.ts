export interface SocialLink {
  label: string;
  url: string;
}

export interface FooterData {
  name: string;
  tagline: string;
  socials: SocialLink[];
  email: string;
}
