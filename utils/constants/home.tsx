import { CategoryProps } from "../interfaces/home";
import { COPY, ROUTES, SLUGS } from "./shared";

export const CATEGORIES: CategoryProps[] = [
  {
    href: ROUTES.PORTFOLIO,
    slug: SLUGS.PORTFOLIO,
    tagline: COPY[SLUGS.PORTFOLIO],
  },
  {
    href: ROUTES.COMMERCIAL_FASHION,
    slug: SLUGS.COMMERCIAL_FASHION,
    tagline: COPY[SLUGS.COMMERCIAL_FASHION],
  },
  {
    href: ROUTES.PRE_WEDDING,
    slug: SLUGS.PRE_WEDDING,
    tagline: COPY[SLUGS.PRE_WEDDING],
  },
  {
    href: ROUTES.WEDDINGS,

    slug: SLUGS.WEDDINGS,
    tagline: COPY[SLUGS.WEDDINGS],
  },
  {
    href: ROUTES.CONCEPTUAL,
    slug: SLUGS.CONCEPTUAL,
    tagline: COPY[SLUGS.CONCEPTUAL],
  },
  {
    href: ROUTES.MATERNITY,
    slug: SLUGS.MATERNITY,
    tagline: COPY[SLUGS.MATERNITY],
  },
  {
    href: ROUTES.OTHERS,
    slug: SLUGS.OTHERS,
    tagline: COPY[SLUGS.OTHERS],
  },
];
