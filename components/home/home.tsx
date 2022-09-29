import { CATEGORIES } from "../../utils/constants/home";
import { Contact } from "../shared";
import { Hero, Category, About } from "./";

export const Home = () => {
  return (
    <>
      <Hero />

      <About />

      {CATEGORIES.map((category) => (
        <Category key={category.slug} {...category} />
      ))}

      <Contact />
    </>
  );
};

export default Home;
