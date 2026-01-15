export interface HeaderHeroPageButton {
  id: number;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeaderHeroPageProps {
  subtitle: string;
  title: string;
  description: string;
  linesImage: string;
  buttons: HeaderHeroPageButton[];
}
