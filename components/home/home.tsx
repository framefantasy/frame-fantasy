import { ROUTES, SLUGS } from "../../utils/constants/shared";
import { deslugify } from "../../utils/functions";
import { CategoryProps } from "../../utils/interfaces/home";
import { Hero, Category } from "./";

export const Home = () => {
  const categories: CategoryProps[] = [
    {
      href: ROUTES.PORTRAITS,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.PORTRAITS),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.COMMERCIAL_FASHION,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.COMMERCIAL_FASHION),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.PRE_WEDDING,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.PRE_WEDDING),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.WEDDINGS,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.WEDDINGS),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.CONCEPTUAL,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.CONCEPTUAL),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.MATERNITY,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.MATERNITY),
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.OTHERS,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: deslugify(SLUGS.OTHERS),
      tagline: "Framing your day in a memorable way!",
    },
  ];

  return (
    <>
      <Hero />
      {categories.map((cat) => (
        <Category key={cat.name} {...cat} />
      ))}
    </>
  );
};

export default Home;
