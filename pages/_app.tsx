import Head from "next/head";

import type { AppProps } from "next/app";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Apple Maps to Google Maps</title>
        <meta name="title" content="Apple Maps to Google Maps" />
        <meta
          name="description"
          content="Open an Apple Maps URL with Google Maps in just one click."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atogmaps.com" />
        <meta property="og:title" content="Apple Maps to Google Maps" />
        <meta
          property="og:description"
          content="Open an Apple Maps URL with Google Maps in just one click."
        />

        <meta property="twitter:card" content="summary_large" />
        <meta property="twitter:url" content="https://atogmaps.com" />
        <meta property="twitter:title" content="Apple Maps to Google Maps" />
        <meta
          property="twitter:description"
          content="Open an Apple Maps URL with Google Maps in just one click."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
