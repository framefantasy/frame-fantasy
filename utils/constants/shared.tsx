import { NavItem } from "../interfaces/shared";

export enum ROUTES {
  INDEX = "/",
  WEDDINGS = "/weddings",
  FASHION_PORTFOLIO = "/fashion-portfolio",
  COMMERCIAL_FASHION = "/commercial-fashion",
  CONCEPT_SHOOT = "/concept-shoot",
  BABY_PHOTOSHOOT = "/baby-photoshoot",
  EVENTS = "/events",
}

export const NAV_ITEMS: NavItem[] = [
  {
    content: "Wedding",
    external: false,
    href: ROUTES.WEDDINGS,
  },
  {
    content: "Fashion Portfolio",
    external: false,
    href: ROUTES.FASHION_PORTFOLIO,
  },
  {
    content: "Commercial Fashion",
    external: false,
    href: ROUTES.COMMERCIAL_FASHION,
  },
  {
    content: "Concept Shoot",
    external: false,
    href: ROUTES.CONCEPT_SHOOT,
  },
  {
    content: "Baby Photoshoot",
    external: false,
    href: ROUTES.BABY_PHOTOSHOOT,
  },
  {
    content: "Events",
    external: false,
    href: ROUTES.EVENTS,
  },
];
