import { CATEGORIES } from "../../utils/constants/home";
import { Hero, Category } from "./";

export const Home = () => {
  return (
    <>
      <Hero />

      {CATEGORIES.map((category) => (
        <Category key={category.slug} {...category} />
      ))}
    </>
  );
};

export default Home;
