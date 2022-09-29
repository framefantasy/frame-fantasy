import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import { Navbar, Footer } from "../components/shared";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frame Fantasy by Purbafalguni Paul</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/site/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/site/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/site/favicon-16x16.png"
        />
        <link rel="manifest" href="/site/site.webmanifest" />
      </Head>

      <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
