import { ROUTES } from "../../utils/constants/shared";
import { CategoryProps } from "../../utils/interfaces/home";
import { Hero, Category } from "./";

export const Home = () => {
  const categories: CategoryProps[] = [
    {
      href: ROUTES.WEDDINGS,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/300/200",
        "https://picsum.photos/200/300",
      ],
      name: "Weddings",
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.INDEX,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
      name: "Maternity",
      tagline: "Framing your day in a memorable way!",
    },
    {
      href: ROUTES.INDEX,
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
      name: "Baby",
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
