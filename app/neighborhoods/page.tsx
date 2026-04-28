/** @format */

import type { Metadata } from "next";
import NeighborhoodsPage from "@/pages/Neighborhoods";

export const metadata: Metadata = {
  title: "Austin Neighborhood Guide — Find the Right Area for You",
  description:
    "Explore Austin's top neighborhoods: East Austin, West Austin, South Austin, Downtown, Round Rock, Cedar Park, Westlake, and Georgetown. Prices, schools, and lifestyle guides.",
  keywords: [
    "Austin neighborhoods",
    "East Austin real estate",
    "West Austin homes",
    "South Austin homes",
    "Westlake Austin",
    "Round Rock neighborhoods",
    "Cedar Park neighborhoods",
  ],
  openGraph: {
    title: "Austin Neighborhood Guide — UrbanNest Realty",
    description:
      "Find the perfect Austin neighborhood for your lifestyle and budget.",
    images: [
      {
        url: "/urbannest-hero.jpg",
        width: 1600,
        height: 960,
        alt: "Austin neighborhood aerial view",
      },
    ],
  },
};

export default function Neighborhoods() {
  return <NeighborhoodsPage />;
}
