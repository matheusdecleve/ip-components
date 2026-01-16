export type ProductTag = {
  icon: string;
  label: string;
};

export type ProductCardData = {
  id: number;
  title: string;
  image: string;
  price: string;
  href: string;
  tags: ProductTag[];
};
