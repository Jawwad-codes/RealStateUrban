/** @format */

import type { Metadata } from "next";
import AboutPage from "@/pages/About";

export const metadata: Metadata = {
  title: "About UrbanNest Realty — Austin's Most Trusted Real Estate Team",
  description:
    "Meet the UrbanNest Realty team. 20+ licensed Austin agents, $1.2B+ in sales volume, and 13 years serving the Austin real estate market.",
  keywords: [
    "UrbanNest Realty team",
    "Austin real estate agents",
    "Austin realtor",
    "Austin property experts",
  ],
  openGraph: {
    title: "About UrbanNest Realty — Austin's Most Trusted Real Estate Team",
    description: "Meet our team of 20+ licensed Austin real estate agents.",
    images: [
      {
        url: "/urbannest-team.jpg",
        width: 1200,
        height: 900,
        alt: "UrbanNest Realty team in Austin office",
      },
    ],
  },
};

export default function About() {
  return <AboutPage />;
}
