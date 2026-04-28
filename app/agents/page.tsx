/** @format */

import type { Metadata } from "next";
import AgentsPage from "@/pages/Agents";

export const metadata: Metadata = {
  title: "Meet Our Austin Real Estate Agents — UrbanNest Realty",
  description:
    "20+ licensed Austin real estate agents specializing in buying, selling, luxury, investment, and relocation. Find the right agent for your needs.",
  keywords: [
    "Austin real estate agents",
    "Austin realtors",
    "luxury Austin agent",
    "Austin buyer agent",
    "Austin seller agent",
    "Austin relocation specialist",
  ],
  openGraph: {
    title: "Meet Our Austin Real Estate Agents — UrbanNest Realty",
    description: "20+ licensed Austin agents with deep neighborhood expertise.",
    images: [
      {
        url: "/urbannest-team.jpg",
        width: 1200,
        height: 900,
        alt: "UrbanNest Realty agents",
      },
    ],
  },
};

export default function Agents() {
  return <AgentsPage />;
}
