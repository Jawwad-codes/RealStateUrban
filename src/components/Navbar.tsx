/** @format */

"use client";

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

const navItems = [
  { label: "Listings", href: "/listings" },
  { label: "Neighborhoods", href: "/neighborhoods" },
  { label: "Agents", href: "/agents" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const textColor = transparent ? "text-primary-foreground" : "text-primary";
  const subTextColor = transparent
    ? "text-primary-foreground/72"
    : "text-muted-foreground";
  const linkColor = transparent
    ? "text-primary-foreground/82 hover:text-primary-foreground"
    : "text-foreground/72 hover:text-foreground";
  const ctaClass = transparent
    ? "border border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/18"
    : "bg-primary text-primary-foreground hover:bg-primary/90";
  const hamburgerColor = transparent
    ? "text-primary-foreground"
    : "text-primary";

  return (
    <>
      <header
        className={
          transparent
            ? "absolute left-0 right-0 top-0 z-40 border-b border-primary-foreground/15"
            : "sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur-md shadow-card"
        }
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className={`flex items-center gap-3 ${textColor}`}
            aria-label="UrbanNest Realty home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground shadow-card">
              <Home className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-xl font-bold leading-none">
                UrbanNest
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-[0.22em] ${subTextColor}`}
              >
                Realty
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${linkColor}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className={`hidden lg:inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors ${ctaClass}`}
          >
            Schedule a Tour
          </a>

          {/* Mobile hamburger */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${hamburgerColor}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        </div>
      )}

      <div
        className={`fixed left-0 right-0 top-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="bg-card shadow-premium">
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <a
              href="/"
              className="flex items-center gap-3 text-primary"
              onClick={() => setOpen(false)}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <Home className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-primary">
                UrbanNest Realty
              </span>
            </a>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-5 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="border-t border-border px-5 py-4">
            <a
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
