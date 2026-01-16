import { FooterProps } from "@/components/footer";

export const footerData: FooterProps = {
  logo: "/images/logos/logo-ip-blue.svg",

  socialLinks: [
    {
      id: 1,
      href: "#!",
      icon: "/images/icons/facebook.svg",
      alt: "Facebook",
    },
    {
      id: 2,
      href: "#!",
      icon: "/images/icons/instagram.svg",
      alt: "Instagram",
    },
    {
      id: 3,
      href: "#!",
      icon: "/images/icons/youtube.svg",
      alt: "Youtube",
    },
    {
      id: 4,
      href: "#!",
      icon: "/images/icons/whatsapp.svg",
      alt: "WhatsApp",
    },
  ],

  whatsappLink: "#!",

  address: "Av. Salvador Allende, 3200,\nBarra Olímpica, Rio de Janeiro - RJ",

  copyright: "© 2026 Ilha Pura. Todos direitos reservados.",

  bottomLinks: [
    {
      label: "Política de Privacidade",
      href: "#!",
    },
    {
      label: "Regulamento",
      href: "#!",
    },
  ],
};
