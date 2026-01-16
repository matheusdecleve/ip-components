export interface ImageContentTabItem {
  id: number;
  title: string;
  description: string;
  image: string;
  active?: boolean;
}

export interface ImageContentTabsProps {
  items: ImageContentTabItem[];
}
