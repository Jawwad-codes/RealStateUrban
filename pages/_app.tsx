/** @format */

// This file ensures the Pages Router (src/pages/) gets global CSS.
// The actual routes are served by the App Router (app/).
import "../src/index.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
