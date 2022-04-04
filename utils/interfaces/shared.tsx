import { ROUTES, SLUGS } from "../constants/shared";

export interface NavItem {
  slug: SLUGS;
  href: ROUTES;
  external: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
