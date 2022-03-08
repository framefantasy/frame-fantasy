import { ROUTES } from "../../utils/constants/shared";

export interface CategoryProps {
  name: string;
  tagline: string;
  href: ROUTES;
  images: string[];
}
