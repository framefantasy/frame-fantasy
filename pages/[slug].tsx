import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";

import { Gallery } from "../components/gallery";
import { deslugify } from "../utils/functions";
import { GalleryProps } from "../utils/interfaces/gallery";

const WeddingsPage: NextPage<GalleryProps> = (props: GalleryProps) => {
  return (
    <>
      <Gallery {...props} />
    </>
  );
};

export default WeddingsPage;

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<GalleryProps>> {
  const {
    query: { slug },
  } = ctx;

  console.log(slug);

  try {
    return {
      props: {
        images: [
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
          `https://picsum.photos/${Math.floor(
            Math.random() * 10
          )}00/${Math.floor(Math.random() * 10)}00`,
        ],
        name: deslugify(slug as string),
        tagline: "Anim dolor cupidatat sit quis.",
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
