import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPathsResult,
  NextPage,
} from "next";

import { Gallery } from "../components/gallery";
import { SLUGS } from "../utils/constants/shared";
import { deslugify } from "../utils/functions";
import { GalleryProps } from "../utils/interfaces/gallery";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

const WeddingsPage: NextPage<GalleryProps> = (props) => {
  return <Gallery {...props} />;
};

export default WeddingsPage;

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  try {
    const paths = Object.values(SLUGS).map((slug) => ({
      params: { slug },
    }));

    return { paths, fallback: "blocking" };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<GalleryProps>> {
  const { slug } = ctx.params!;

  const categoryExists: boolean = Object.values(SLUGS).includes(slug as SLUGS);

  try {
    const images: string[] = [];

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });

    const { resources } = await cloudinary.api.resources({
      type: "upload",
      prefix: `frame-fantasy/${slug}`,
    });

    (resources ?? []).forEach(({ secure_url }: UploadApiResponse) => {
      images.push(secure_url);
    });

    if (categoryExists)
      return {
        props: {
          images,
          name: deslugify(slug as string),
          tagline: "Anim dolor cupidatat sit quis.",
        },
        // ? INFO: 1 week
        revalidate: 1 * 60 * 60 * 24 * 7,
      };
    else
      return {
        notFound: true,
      };
  } catch (err) {
    console.log(err);

    return {
      notFound: true,
    };
  }
}
