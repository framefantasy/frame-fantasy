import Link from "next/link";
import { Button } from "../shared";
import { CategoryProps } from "../../utils/interfaces/home";
import { deslugify } from "../../utils/functions";
import { SLUGS } from "../../utils/constants/shared";

const Category = ({ href, slug, tagline }: CategoryProps) => {
  return (
    <section className="mt-20">
      <div className="w-full px-10 lg:px-0 lg:w-10/12 mx-auto">
        <div className="w-10/12 lg:w-7/12 border-b-4 border-primary flex flex-col lg:flex-row lg:items-end text-white pb-4 ml-2">
          <h2 className="capitalize">{deslugify(slug)}</h2>
          <span className="text-sm lg:ml-8 mt-4 lg:mt-0 font-medium">
            {tagline}
          </span>
        </div>

        <div className="flex flex-wrap lg:h-screen">
          {[...Array(5)].map((_, i) => (
            <figure
              key={i}
              className={`${i === 2 || i === 4 ? "hidden lg:block" : ""} ${
                i === 3 ? "w-full lg:w-8/12" : "w-6/12 lg:w-4/12"
              } lg:h-1/2 overflow-hidden`}
            >
              <img
                src={`/featured/${slug}/${i}.jpg`}
                alt={`Frame Fantasy | ${deslugify(slug)}`}
                className={`${
                  slug === SLUGS.COMMERCIAL_FASHION
                    ? "object-top"
                    : "object-center"
                } object-cover w-full h-full px-2 py-4`}
              />
            </figure>
          ))}
        </div>

        <div className="flex justify-end border-b-4 border-primary w-10/12 lg:w-7/12 ml-auto py-4">
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
