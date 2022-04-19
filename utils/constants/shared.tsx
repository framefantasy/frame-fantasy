import { NavItem } from "../interfaces/shared";

export enum SLUGS {
  PORTRAITS = "portraits",
  COMMERCIAL_FASHION = "commercial-fashion",
  PRE_WEDDING = "pre-wedding",
  WEDDINGS = "weddings",
  CONCEPTUAL = "conceptual",
  MATERNITY = "maternity",
  OTHERS = "others",
}

export enum ROUTES {
  INDEX = "/",
  PORTRAITS = "/portraits",
  COMMERCIAL_FASHION = "/commercial-fashion",
  PRE_WEDDING = "/pre-wedding",
  WEDDINGS = "/weddings",
  CONCEPTUAL = "/conceptual",
  MATERNITY = "/maternity",
  OTHERS = "/others",
}

export const NAV_ITEMS: NavItem[] = [
  {
    slug: SLUGS.PORTRAITS,
    external: false,
    href: ROUTES.PORTRAITS,
  },
  {
    slug: SLUGS.COMMERCIAL_FASHION,
    external: false,
    href: ROUTES.COMMERCIAL_FASHION,
  },
  {
    slug: SLUGS.PRE_WEDDING,
    external: false,
    href: ROUTES.PRE_WEDDING,
  },
  {
    slug: SLUGS.WEDDINGS,
    external: false,
    href: ROUTES.WEDDINGS,
  },
  {
    slug: SLUGS.CONCEPTUAL,
    external: false,
    href: ROUTES.CONCEPTUAL,
  },
  {
    slug: SLUGS.MATERNITY,
    external: false,
    href: ROUTES.MATERNITY,
  },
  {
    slug: SLUGS.OTHERS,
    external: false,
    href: ROUTES.OTHERS,
  },
];
