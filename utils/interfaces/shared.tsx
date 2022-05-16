import { ROUTES, SLUGS } from "../constants/shared";

export interface NavItem {
  slug: SLUGS;
  href: ROUTES;
  external: boolean;
}

export interface FooterItem {
  href: string;
  icon: JSX.Element;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export interface IconProps {
  className?: string;
}
