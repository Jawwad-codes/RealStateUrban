/** @format */

import type { Metadata, Viewport } from "next";
import "../src/index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://urbannestrealty.com"),
  title: {
    default: "UrbanNest Realty — Austin Real Estate",
    template: "%s | UrbanNest Realty",
  },
  description:
    "Austin's trusted real estate team since 2013. Browse homes, condos, townhouses, and luxury estates across Austin, TX. 1,000+ properties sold.",
  keywords: [
    "Austin real estate",
    "homes for sale Austin TX",
    "Austin realtor",
    "UrbanNest Realty",
    "Austin homes",
    "Austin property listings",
    "buy home Austin",
    "sell home Austin",
  ],
  authors: [{ name: "UrbanNest Realty", url: "https://urbannestrealty.com" }],
  creator: "UrbanNest Realty",
  publisher: "UrbanNest Realty",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urbannestrealty.com",
    siteName: "UrbanNest Realty",
    title: "UrbanNest Realty — Austin Real Estate",
    description:
      "Austin's trusted real estate team since 2013. Browse homes, condos, and luxury estates across Austin, TX.",
    images: [
      {
        url: "/urbannest-hero.jpg",
        width: 1600,
        height: 960,
        alt: "Luxury home in Austin, Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanNest Realty — Austin Real Estate",
    description: "Austin's trusted real estate team since 2013.",
    images: ["/urbannest-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
