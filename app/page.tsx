/** @format */

import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "UrbanNest Realty — Find Your Dream Home in Austin, TX",
  description:
    "Explore premium homes, condos, and investment properties across Austin, Texas. UrbanNest Realty — 1,000+ properties sold since 2013.",
  openGraph: {
    title: "UrbanNest Realty — Find Your Dream Home in Austin, TX",
    description:
      "Explore premium homes, condos, and investment properties across Austin, Texas.",
    images: [
      {
        url: "/urbannest-hero.jpg",
        width: 1600,
        height: 960,
        alt: "Luxury home in Austin TX",
      },
    ],
  },
};

const listings = [
  {
    image: "/prop-luxury-exterior.jpg",
    price: "$1,325,000",
    address: "4108 Balcones Dr, Austin, TX",
    details: "5 Beds • 4 Baths • 3,620 sqft",
    badge: "West Austin",
    alt: "Luxury single-family estate in West Austin with pool and hill country views",
  },
  {
    image: "/prop-craftsman.jpg",
    price: "$725,000",
    address: "2401 Bluebonnet Ln, Austin, TX",
    details: "4 Beds • 3 Baths • 2,400 sqft",
    badge: "South Austin",
    alt: "Charming craftsman-style home in South Austin with mature oak trees",
  },
  {
    image: "/prop-kitchen-modern.jpg",
    price: "$589,000",
    address: "118 Cedar Elm Rd, Round Rock, TX",
    details: "3 Beds • 2 Baths • 2,050 sqft",
    badge: "Round Rock",
    alt: "Modern kitchen with quartz countertops in Round Rock home",
  },
  {
    image: "/prop-condo-interior.jpg",
    price: "$465,000",
    address: "902 E 5th St Unit 304, Austin, TX",
    details: "2 Beds • 2 Baths • 1,120 sqft",
    badge: "East Austin",
    alt: "Contemporary condo interior with floor-to-ceiling windows in East Austin",
  },
  {
    image: "/prop-townhouse-row.jpg",
    price: "$638,000",
    address: "3305 Brushy Creek Loop, Cedar Park, TX",
    details: "3 Beds • 3 Baths • 2,180 sqft",
    badge: "Cedar Park",
    alt: "Elegant row of townhouses in Cedar Park with two-car garages",
  },
  {
    image: "/prop-suburban-home.jpg",
    price: "$352,000",
    address: "7601 Rialto Blvd Apt 218, Austin, TX",
    details: "2 Beds • 2 Baths • 1,030 sqft",
    badge: "Oak Hill",
    alt: "Well-maintained suburban home in Oak Hill Austin",
  },
];

const features = [
  { icon: Award, title: "10+ Years in Austin Market" },
  { icon: Building2, title: "1,000+ Properties Sold" },
  { icon: ShieldCheck, title: "Licensed Real Estate Agents" },
  { icon: BarChart3, title: "Transparent & Data-Driven Pricing" },
];

const testimonials = [
  {
    quote:
      "UrbanNest helped us find the perfect home in South Austin. Smooth process from start to finish.",
    name: "Michael Turner",
    place: "Austin, TX",
  },
  {
    quote: "Professional team and great communication. Highly recommended!",
    name: "Jessica Miller",
    place: "Round Rock, TX",
  },
  {
    quote: "Best real estate experience I've had in Texas.",
    name: "David Clark",
    place: "Cedar Park, TX",
  },
];

const propertyTypes = [
  { icon: Building2, label: "Single-Family Homes" },
  { icon: Building2, label: "Apartments & Condos" },
  { icon: BedDouble, label: "Townhouses" },
  { icon: TrendingUp, label: "Commercial Spaces" },
];

const marketStats = [
  { label: "Median Home Price in Austin", value: "$650,000" },
  { label: "Average Days on Market", value: "32 days" },
  { label: "Yearly Price Growth", value: "+6.5%" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Transparent hero navbar */}
      <div className="relative">
        <Navbar transparent />

        {/* Hero */}
        <section
          className="relative min-h-[780px] overflow-hidden md:min-h-[860px]"
          aria-label="Hero — Find your dream home in Austin"
        >
          <img
            src="/urbannest-hero.jpg"
            alt="Luxury home in Austin, Texas at sunset — UrbanNest Realty"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={960}
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-hero-overlay"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,hsl(var(--accent)/0.18),transparent_34%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-end px-5 pb-8 pt-36 md:min-h-[860px] lg:px-8 lg:pb-14">
            <div className="max-w-3xl luxury-reveal">
              <p className="mb-5 inline-flex items-center gap-2 border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                Find Your Perfect Space to Live and Invest
              </p>
              <h1 className="text-balance font-display text-5xl font-bold leading-[0.95] text-primary-foreground md:text-7xl lg:text-8xl">
                Find Your Dream Home in Austin
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white-50 md:text-xl">
                Explore premium homes, apartments, and investment properties
                across Austin, Texas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/listings"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  Browse Listings{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/35 bg-primary-foreground/10 px-8 text-sm font-medium text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary-foreground/18"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>

            {/* Search bar — client component, no page reload */}
            <SearchBar />
          </div>
        </section>
      </div>

      {/* Featured Listings */}
      <section
        className="px-5 py-20 lg:px-8 lg:py-28"
        aria-labelledby="listings-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                Featured Listings
              </p>
              <h2
                id="listings-heading"
                className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl"
              >
                Austin homes worth seeing
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              Curated properties across Austin, Round Rock, and Cedar Park with
              realistic pricing and neighborhood context.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <article
                key={listing.address}
                className="group overflow-hidden bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.alt}
                    className="h-full w-full object-cover image-zoom"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <span className="absolute left-4 top-4 bg-card px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-primary shadow-card">
                    {listing.badge}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-2xl font-extrabold text-primary">
                    {listing.price}
                  </p>
                  <p className="mt-2 flex items-start gap-2 font-semibold text-foreground">
                    <MapPin
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {listing.address}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <BedDouble className="h-4 w-4" aria-hidden="true" />
                    <Bath className="h-4 w-4" aria-hidden="true" />
                    {listing.details}
                  </p>
                  <a
                    href="/listings"
                    className="mt-5 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View Details
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/listings"
              className="inline-flex h-11 items-center gap-2 border border-border bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View All Listings{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section
        className="bg-primary px-5 py-16 text-primary-foreground lg:px-8"
        aria-label="Why choose UrbanNest"
      >
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="border border-primary-foreground/14 bg-primary-foreground/6 p-6"
            >
              <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-extrabold">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section
        className="px-5 py-20 lg:px-8 lg:py-28"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              src="/office-team.jpg"
              alt="UrbanNest Realty agents collaborating in their modern Austin office"
              className="aspect-[4/3] w-full object-cover shadow-premium"
              loading="lazy"
              width={1200}
              height={900}
            />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-premium">
              <p className="text-3xl font-extrabold">2013</p>
              <p className="text-sm font-bold uppercase tracking-[0.16em]">
                Serving Austin
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              About Us
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl"
            >
              Local guidance with modern market intelligence
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              UrbanNest Realty has been serving the Austin community since 2013,
              helping families, professionals, and investors find the right
              property. Our team combines local expertise with modern technology
              to deliver seamless buying and selling experiences.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Neighborhood-level pricing",
                "Tour coordination",
                "Offer strategy",
                "Investor analysis",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <CheckCircle2
                    className="h-5 w-5 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </p>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:underline"
            >
              Meet the team{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-secondary px-5 py-20 lg:px-8"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Testimonials
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl"
            >
              What clients say after closing
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <figure key={review.name} className="bg-card p-7 shadow-card">
                <div
                  className="mb-5 flex gap-1 text-accent"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-lg font-semibold leading-8 text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 font-bold text-primary">
                  — {review.name},{" "}
                  <span className="text-muted-foreground">{review.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section
        className="px-5 py-20 lg:px-8"
        aria-labelledby="property-types-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                Property Types
              </p>
              <h2
                id="property-types-heading"
                className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl"
              >
                Spaces for every Austin move
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {propertyTypes.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="/listings"
                  className="group flex items-center gap-4 border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-primary">
                    {label}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section
        className="bg-navy-premium px-5 py-20 text-primary-foreground lg:px-8"
        aria-labelledby="market-heading"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Market Insights
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2
              id="market-heading"
              className="font-display text-4xl font-bold md:text-5xl"
            >
              Austin data that keeps your search grounded
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {marketStats.map(({ label, value }) => (
                <div
                  key={label}
                  className="border border-primary-foreground/15 bg-primary-foreground/8 p-6"
                >
                  <p className="text-3xl font-extrabold text-accent">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground/72">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:underline"
            >
              View full market report{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8" aria-label="Call to action">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-premium md:px-12">
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            Ready to Find Your Next Home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/76">
            Talk with an Austin advisor about neighborhoods, pricing, tours, and
            timing.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
