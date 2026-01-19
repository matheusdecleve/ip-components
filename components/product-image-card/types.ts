export type ProductTag = {
  icon: string;
  label: string;
};

export type ProductImageCardData = {
  id: number;
  cssClass?: string,
  title: string;
  image: string;
  logo: string;
  price: string;
  href: string;
  tags: ProductTag[];
};
