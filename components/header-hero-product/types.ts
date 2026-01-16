export interface HeaderHeroProductBadge {
  id: number;
  label: string;
  icon: string;
}

export interface HeaderHeroProductProps {
  backgroundColorClass: string;
  linesImage: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  priceLabel: string;
  price: string;
  title: string;
  badges: HeaderHeroProductBadge[];
}
