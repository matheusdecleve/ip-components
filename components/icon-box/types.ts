export interface IconBoxItem {
  id: number;
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
}

export interface IconBoxProps {
  items: IconBoxItem[];
}
