/** @format */

import type { Metadata } from "next";
import ListingsPage from "@/pages/Listings";

export const metadata: Metadata = {
  title: "Austin Property Listings — Homes, Condos & Luxury Estates",
  description:
    "Browse 9+ Austin area properties for sale. Single-family homes, condos, townhouses, and luxury estates in West Austin, East Austin, Round Rock, Cedar Park, and more.",
  keywords: [
    "Austin homes for sale",
    "Austin property listings",
    "Austin condos",
    "Austin luxury homes",
    "Round Rock homes",
    "Cedar Park real estate",
  ],
  openGraph: {
    title: "Austin Property Listings — UrbanNest Realty",
    description: "Browse homes, condos, and luxury estates across Austin, TX.",
    images: [
      {
        url: "/urbannest-hero.jpg",
        width: 1600,
        height: 960,
        alt: "Austin luxury home for sale",
      },
    ],
  },
};

export default function Listings() {
  return <ListingsPage />;
}
