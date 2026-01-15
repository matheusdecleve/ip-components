export type NavbarVariant = "white" | "transparent";

export interface NavbarLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarAction {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string;
}

export interface NavbarProps {
  variant?: NavbarVariant;
  logoBlue: string;
  logoWhite: string;
  links: NavbarLink[];
  actions: NavbarAction[];
}
