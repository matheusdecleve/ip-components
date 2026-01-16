export interface ImageCardItem {
  id: number;
  image: string;
  imageAlt?: string;
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
}

export interface ImageCardProps {
  items: ImageCardItem[];
}
