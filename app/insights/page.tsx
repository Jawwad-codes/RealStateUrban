/** @format */

import type { Metadata } from "next";
import InsightsPage from "@/pages/Insights";

export const metadata: Metadata = {
  title: "Austin Real Estate Market Insights & Reports 2026",
  description:
    "Austin real estate market data, neighborhood price breakdowns, expert articles, and free buyer/seller guides. Updated April 2026.",
  keywords: [
    "Austin real estate market 2026",
    "Austin home prices",
    "Austin market report",
    "Austin neighborhood data",
    "Austin real estate trends",
  ],
  openGraph: {
    title: "Austin Real Estate Market Insights 2026 — UrbanNest Realty",
    description:
      "Data-driven market reports and expert guides for Austin real estate.",
    images: [
      {
        url: "/urbannest-hero.jpg",
        width: 1600,
        height: 960,
        alt: "Austin real estate market insights",
      },
    ],
  },
};

export default function Insights() {
  return <InsightsPage />;
}
