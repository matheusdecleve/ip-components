export interface SocialLink {
  id: number;
  href: string;
  icon: string;
  alt: string;
}

export interface FooterLinks {
  label: string;
  href: string;
}

export interface FooterProps {
  logo: string;
  socialLinks: SocialLink[];
  whatsappLink: string;
  address: string;
  copyright: string;
  bottomLinks: FooterLinks[];
}
