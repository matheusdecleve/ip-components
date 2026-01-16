export interface FeaturedCardItem {
  id: number;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
}

export interface FeaturedCardProps {
  items: FeaturedCardItem[];
}
