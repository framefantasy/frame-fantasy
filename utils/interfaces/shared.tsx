import { ROUTES } from "../constants/shared";

export interface NavItem {
  content: string;
  href: ROUTES;
  external: boolean;
}
