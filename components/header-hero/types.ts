export interface HeaderHeroButton {
  id: number;
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeaderHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  linesImage: string;
  buttons: HeaderHeroButton[];
}
