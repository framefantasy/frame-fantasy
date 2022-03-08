import Link from "next/link";
import { Button } from "../shared";
import { CategoryProps } from "../shared/home";

const Category = ({ href, images, name, tagline }: CategoryProps) => {
  return (
    <section className="mt-20">
      <div className="w-10/12 mx-auto">
        <div className="w-7/12 border-b-4 border-primary flex items-end text-white pb-2">
          <h2>{name}</h2>
          <span className="text-sm ml-auto">{tagline}</span>
        </div>

        <div></div>

        <div className="flex justify-end border-b-4 border-primary w-7/12 ml-auto py-4">
          <Link href={href}>
            <a>
              <Button>Show all</Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
