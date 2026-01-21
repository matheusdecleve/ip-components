export interface SectionTitleAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface SectionTitleProps {
  variant?: "default" | "withButton" | "twoColumns";
  cssClass?: string;

  eyebrow?: string;
  eyebrowColorClass?: string;

  title: string;
  description?: string;

  /* usado no withButton */
  button?: {
    label: string;
    href: string;
    icon?: string;
  };

  /* usado no twoColumns */
  actions?: SectionTitleAction[];
}
