import { NavbarProps } from "@/components/navbar";

export const navbarData: NavbarProps = {
  variant: "transparent",

  logoBlue: "/images/logos/logo-ip-blue.svg",
  logoWhite: "/images/logos/logo-ip-white.svg",

  links: [
    {
      id: "empreendimentos",
      label: "Empreendimentos",
      href: "/empreendimentos",
    },
    {
      id: "bairro",
      label: "Sobre o bairro",
      href: "/bairro",
    },
    {
      id: "parceiros",
      label: "Parceiros",
      href: "/parceiros",
    },
    {
      id: "contato",
      label: "Contato",
      href: "/contato",
    },
  ],

  actions: [
    {
      id: "portal",
      label: "Portal do cliente",
      href: "/portal-do-cliente",
      variant: "secondary",
      icon: "/images/icons/portal-do-cliente.svg",
    },
    {
      id: "cta-contato",
      label: "Contato",
      href: "/contato",
      variant: "primary",
    },
  ],
};
