/** @format */
"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "./Navbar";

const navItems = [
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const propertyTypeLinks = [
  "Single-Family Homes",
  "Condos & Apartments",
  "Townhouses",
  "Commercial Spaces",
  "Luxury Estates",
  "Investment Properties",
];

interface LayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export default function Layout({
  children,
  transparentHeader = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar transparent={transparentHeader} />
      <main>{children}</main>

      <footer className="bg-primary px-5 py-14 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <a
                href="/"
                className="flex items-center gap-3"
                aria-label="UrbanNest Realty"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-xl font-bold leading-none">
                    UrbanNest
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/68">
                    Realty
                  </p>
                </div>
              </a>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/68">
                Austin's trusted real estate partner since 2013. Helping
                families, professionals, and investors find the right property.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                Quick Links
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary-foreground/76">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                Property Types
              </p>
              <ul className="space-y-3 text-sm font-semibold text-primary-foreground/76">
                {propertyTypeLinks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                Contact
              </p>
              <address className="not-italic space-y-4 text-sm font-semibold text-primary-foreground/76">
                <p className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  1234 Congress Ave, Suite 500, Austin, TX 78701
                </p>
                <p className="flex gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+15125557890"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +1 (512) 555-7890
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@urbannestrealty.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    info@urbannestrealty.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/14 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-primary-foreground/56">
              © 2026 UrbanNest Realty. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-semibold text-primary-foreground/56">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Fair Housing Notice</span>
              <span>DMCA</span>
            </div>
            <p className="text-xs text-primary-foreground/40">
              Made by{" "}
              <span className="font-bold text-primary-foreground/60">
                Pixova
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
