import Link from "next/link";
import Head from "next/head";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found | Frame Fantasy</title>
      </Head>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <Player
          background="transparent"
          speed={1}
          className="w-full md:w-1/3"
          loop
          autoplay
          src="/lottie/not-found.json"
        />

        <Link href="/" className="hover:underline text-2xl mt-8">
          Let's take you back
        </Link>
      </section>
    </>
  );
};

export default NotFound;
