import { HeaderHeroProps } from "@/components/header-hero";

export const headerHeroData: HeaderHeroProps = {
  title: "O bairro planejado mais moderno do Rio",
  description: "Viva em Ilha Pura, um complexo residencial de alto padrão com segurança, lazer elevado e localização privilegiada na Barra.",
  backgroundImage: "/images/header-hero-full.png",
  linesImage: "/images/header-hero-lines.svg",
  buttons: [
    {
      id: 1,
      label: "Descubra os empreendimentos",
      href: "#!",
      variant: "primary",
    },
    {
      id: 2,
      label: "Conheça o projeto",
      href: "#!",
      variant: "secondary",
    },
  ],
};
