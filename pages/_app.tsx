import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Navbar, Footer } from "../components/shared";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
