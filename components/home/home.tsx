import { CATEGORIES } from "../../utils/constants/home";
import { Hero, Category, About } from "./";

export const Home = () => {
  return (
    <>
      <Hero />

      <About />

      {CATEGORIES.map((category) => (
        <Category key={category.slug} {...category} />
      ))}
    </>
  );
};

export default Home;
