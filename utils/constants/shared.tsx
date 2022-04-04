import { NavItem } from "../interfaces/shared";

export enum SLUGS {
  WEDDINGS = "weddings",
  FASHION_PORTFOLIO = "fashion-portfolio",
  COMMERCIAL_FASHION = "commercial-fashion",
  CONCEPT_SHOOT = "concept-shoot",
  BABY_PHOTOSHOOT = "baby-photoshoot",
  EVENTS = "events",
}

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
    slug: SLUGS.WEDDINGS,
    external: false,
    href: ROUTES.WEDDINGS,
  },
  {
    slug: SLUGS.FASHION_PORTFOLIO,
    external: false,
    href: ROUTES.FASHION_PORTFOLIO,
  },
  {
    slug: SLUGS.COMMERCIAL_FASHION,
    external: false,
    href: ROUTES.COMMERCIAL_FASHION,
  },
  {
    slug: SLUGS.CONCEPT_SHOOT,
    external: false,
    href: ROUTES.CONCEPT_SHOOT,
  },
  {
    slug: SLUGS.BABY_PHOTOSHOOT,
    external: false,
    href: ROUTES.BABY_PHOTOSHOOT,
  },
  {
    slug: SLUGS.EVENTS,
    external: false,
    href: ROUTES.EVENTS,
  },
];
