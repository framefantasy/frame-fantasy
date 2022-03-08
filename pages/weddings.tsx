import type { GetServerSidePropsResult, NextPage } from "next";
import { Gallery } from "../components/gallery";
import { GalleryProps } from "../utils/interfaces/gallery";

const WeddingsPage: NextPage<GalleryProps> = (props: GalleryProps) => {
  return (
    <>
      <Gallery {...props} />
    </>
  );
};

export default WeddingsPage;

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<GalleryProps>
> {
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
        name: "Weddings",
        tagline: "Anim dolor cupidatat sit quis.",
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
