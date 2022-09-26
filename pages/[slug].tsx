import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPathsResult,
  NextPage,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Gallery } from "../components/gallery";
import { COPY, SLUGS } from "../utils/constants/shared";
import { deslugify, toTitleCase } from "../utils/functions";
import { GalleryProps } from "../utils/interfaces/gallery";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

const WeddingsPage: NextPage<GalleryProps> = (props) => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <>
      <Head>
        <title>{toTitleCase(deslugify(slug as string))} | Frame Fantasy</title>
      </Head>

      <Gallery {...props} />
    </>
  );
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
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });

    const images: string[] = [];
    var nextCursor = null;
    do {
      const {
        resources,
        next_cursor,
      }: { resources: UploadApiResponse; next_cursor: string } =
        await cloudinary.api.resources({
          type: "upload",
          prefix: `website/gallery/${slug}`,
          next_cursor: nextCursor,
        });

      (resources ?? []).forEach(({ secure_url }: UploadApiResponse) => {
        images.push(secure_url);
      });

      nextCursor = next_cursor ?? null;
    } while (nextCursor);

    if (categoryExists)
      return {
        props: {
          images,
          name: deslugify(slug as string),
          tagline: COPY[slug as SLUGS],
        },
        // ? INFO: 1 day
        revalidate: 1 * 60 * 60 * 24,
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
