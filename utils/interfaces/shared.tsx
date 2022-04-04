import { ROUTES } from "../constants/shared";

export interface NavItem {
  content: string;
  href: ROUTES;
  external: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
