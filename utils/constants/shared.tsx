import { NavItem } from "../interfaces/shared";

export enum ROUTES {
  INDEX = "/",
}

export const NAV_ITEMS: NavItem[] = [
  {
    content: "Wedding",
    external: false,
    href: ROUTES.INDEX,
  },
  {
    content: "Fashion Portfolio",
    external: false,
    href: ROUTES.INDEX,
  },
  {
    content: "Commercial Fashion",
    external: false,
    href: ROUTES.INDEX,
  },
  {
    content: "Concept Shoot",
    external: false,
    href: ROUTES.INDEX,
  },
  {
    content: "Baby Photoshoot",
    external: false,
    href: ROUTES.INDEX,
  },
  {
    content: "Events",
    external: false,
    href: ROUTES.INDEX,
  },
];
