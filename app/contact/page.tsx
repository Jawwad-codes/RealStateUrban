/** @format */

import type { Metadata } from "next";
import ContactPage from "@/pages/Contact";

export const metadata: Metadata = {
  title: "Contact UrbanNest Realty — Austin Real Estate Agents",
  description:
    "Get in touch with UrbanNest Realty. Call, email, or visit our Congress Ave office. We respond within 2 business hours.",
  keywords: [
    "contact Austin realtor",
    "UrbanNest Realty contact",
    "Austin real estate agent contact",
    "schedule home tour Austin",
  ],
  openGraph: {
    title: "Contact UrbanNest Realty — Austin Real Estate",
    description:
      "Reach our Austin real estate team. We respond within 2 hours.",
    images: [
      {
        url: "/urbannest-team.jpg",
        width: 1200,
        height: 900,
        alt: "UrbanNest Realty office Austin",
      },
    ],
  },
};

export default function Contact() {
  return <ContactPage />;
}
