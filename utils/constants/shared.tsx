import { FooterItem, NavItem } from "../interfaces/shared";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  Whatsapp,
} from "../../utils/logos";

export enum SLUGS {
  PORTFOLIO = "portfolio",
  COMMERCIAL_FASHION = "commercial-fashion",
  PRE_WEDDING = "pre-wedding",
  WEDDINGS = "weddings",
  CONCEPTUAL = "conceptual",
  MATERNITY = "maternity",
  BABY = "baby",
  OTHERS = "others",
}

export enum ROUTES {
  INDEX = "/",
  ABOUT = "/#about",
  PORTFOLIO = "/portfolio",
  COMMERCIAL_FASHION = "/commercial-fashion",
  PRE_WEDDING = "/pre-wedding",
  WEDDINGS = "/weddings",
  CONCEPTUAL = "/conceptual",
  MATERNITY = "/maternity",
  BABY = "/baby",
  OTHERS = "/others",
  CONTACT = "/contact",
}

export const NAV_ITEMS: NavItem[] = [
  {
    slug: SLUGS.PORTFOLIO,
    external: false,
    href: ROUTES.PORTFOLIO,
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
    slug: SLUGS.BABY,
    external: false,
    href: ROUTES.BABY,
  },
  {
    slug: SLUGS.OTHERS,
    external: false,
    href: ROUTES.OTHERS,
  },
];

export const FOOTER_ITEMS: FooterItem[] = [
  {
    icon: <Facebook className="w-10" />,
    href: "https://www.facebook.com/framefantasybypurbafalgunipaul",
  },
  {
    icon: <Instagram className="w-10" />,
    href: "https://www.instagram.com/frame_fantasy/",
  },
  {
    icon: <Twitter className="w-10" />,
    href: "https://twitter.com/FantasyFrame",
  },
  {
    icon: <Mail className="w-10" />,
    href: "mailto:info@framefantasy.co.in",
  },
  {
    icon: <Phone className="w-10" />,
    href: "tel:+918452011968",
  },
  {
    icon: <Whatsapp className="w-10" />,
    href: "https://wa.me/+918452011968?text=Hi!",
  },
];

export const COPY: Record<SLUGS, string> = {
  [SLUGS.PORTFOLIO]: "Allow us to capture the best of YOU!",
  [SLUGS.COMMERCIAL_FASHION]: "Sell a lifestyle, not a product.",
  [SLUGS.PRE_WEDDING]: "The first step before new beginnings...",
  [SLUGS.WEDDINGS]: " Framing your day in a memorable way!",
  [SLUGS.CONCEPTUAL]: "Imagination is your only limit.",
  [SLUGS.MATERNITY]: "'9 Months preparing to fall in love for a lifetime.'",
  [SLUGS.BABY]: "A new beginning, a new story...",
  [SLUGS.OTHERS]: "Capture all your glorious events...",
};
