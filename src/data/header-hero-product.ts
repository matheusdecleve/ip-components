import { HeaderHeroProductProps } from "@/components/header-hero-product";

export const headerHeroProductData: HeaderHeroProductProps = {
  backgroundColorClass: "bg-product-oro-primary",
  linesImage: "/images/header-hero-product-lines.svg",

  logo: {
    src: "/images/logos/logo-product-oro.svg",
    alt: "Logo Oro",
    width: 257,
    height: 100,
  },

  priceLabel: "a partir de",
  price: "2.000.000,00",

  title: "A vida na Barra em sua forma mais rara",

  badges: [
    {
      id: 1,
      label: "Lançamento",
      icon: "/images/icons/champagne-white.svg",
    },
    {
      id: 2,
      label: "3 ou 4 suítes",
      icon: "/images/icons/bathtub-white.svg",
    },
    {
      id: 3,
      label: "Aptos. de 171 a 461 m²",
      icon: "/images/icons/ruler-white.svg",
    },
  ],
};
