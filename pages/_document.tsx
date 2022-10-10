import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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

          <meta name="msapplication-TileColor" content="#232323" />
          <meta name="theme-color" content="#232323" />

          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="content-language" content="en" />
          <meta name="language" content="English" />

          <meta name="author" content="Purbafalguni Paul | Frame Fantasy" />
          <meta
            name="description"
            content="I have had the privilege to shoot many events and people. I am experienced with many locations and photography styles. The photograph style may differ from assignment to assignment, but my commitment to quality and craft is unwavering."
          />
          <meta name="image" content="/site/og-image.png" />

          <meta itemProp="name" content="Purbafalguni Paul | Frame Fantasy" />
          <meta
            itemProp="description"
            content="I have had the privilege to shoot many events and people. I am experienced with many locations and photography styles. The photograph style may differ from assignment to assignment, but my commitment to quality and craft is unwavering."
          />
          <meta itemProp="image" content="/site/og-image.png" />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Purbafalguni Paul | Frame Fantasy"
          />
          <meta
            name="twitter:description"
            content="I have had the privilege to shoot many events and people. I am experienced with many locations and photography styles. The photograph style may differ from assignment to assignment, but my commitment to quality and craft is unwavering."
          />
          <meta name="twitter:site" content="@FantasyFrame" />
          <meta name="twitter:creator" content="@FantasyFrame" />
          <meta name="twitter:image:src" content="/site/og-image.png" />

          <meta name="og:title" content="Purbafalguni Paul | Frame Fantasy" />
          <meta
            name="og:description"
            content="I have had the privilege to shoot many events and people. I am experienced with many locations and photography styles. The photograph style may differ from assignment to assignment, but my commitment to quality and craft is unwavering."
          />
          <meta name="og:image" content="/site/og-image.png" />
          <meta name="og:url" content="https://framefantasy.co.in/" />
          <meta
            name="og:site_name"
            content="Purbafalguni Paul | Frame Fantasy"
          />
          <meta name="og:type" content="website" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
