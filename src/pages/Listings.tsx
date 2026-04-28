/** @format */
"use client";

import {
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  Home,
  MapPin,
  Maximize2,
  Search,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const heroImage = "/urbannest-hero.jpg";
const livingImage = "/urbannest-living.jpg";
const kitchenImage = "/urbannest-kitchen.jpg";
const condoImage = "/urbannest-condo.jpg";
const townhouseImage = "/urbannest-townhouse.jpg";

const allListings = [
  {
    image: "/prop-luxury-exterior.jpg",
    imageAlt:
      "Luxury single-family estate in West Austin with pool and hill country views",
    price: "$1,325,000",
    address: "4108 Balcones Dr, Austin, TX",
    beds: 5,
    baths: 4,
    sqft: "3,620",
    garage: 2,
    badge: "West Austin",
    type: "Single-Family",
    status: "For Sale",
    year: 2019,
    description:
      "Stunning West Austin estate with panoramic hill country views. Open-concept living, chef's kitchen, and resort-style backyard.",
  },
  {
    image: "/prop-craftsman.jpg",
    imageAlt:
      "Charming craftsman-style home in South Austin with mature oak trees",
    price: "$725,000",
    address: "2401 Bluebonnet Ln, Austin, TX",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    garage: 2,
    badge: "South Austin",
    type: "Single-Family",
    status: "For Sale",
    year: 2016,
    description:
      "Charming South Austin home with mature oak trees, updated kitchen, and a spacious backyard perfect for entertaining.",
  },
  {
    image: "/prop-suburban-home.jpg",
    imageAlt: "Move-in ready suburban home in Round Rock with modern finishes",
    price: "$589,000",
    address: "118 Cedar Elm Rd, Round Rock, TX",
    beds: 3,
    baths: 2,
    sqft: "2,050",
    garage: 2,
    badge: "Round Rock",
    type: "Single-Family",
    status: "For Sale",
    year: 2014,
    description:
      "Move-in ready Round Rock home with modern finishes, open floor plan, and a large covered patio.",
  },
  {
    image: "/prop-condo-interior.jpg",
    imageAlt:
      "Modern East Austin condo interior with floor-to-ceiling windows and city views",
    price: "$465,000",
    address: "902 E 5th St Unit 304, Austin, TX",
    beds: 2,
    baths: 2,
    sqft: "1,120",
    garage: 1,
    badge: "East Austin",
    type: "Condo",
    status: "For Sale",
    year: 2021,
    description:
      "Modern East Austin condo with floor-to-ceiling windows, quartz countertops, and walkable access to top restaurants.",
  },
  {
    image: "/prop-townhouse-row.jpg",
    imageAlt: "Elegant row of townhouses in Cedar Park with two-car garages",
    price: "$638,000",
    address: "3305 Brushy Creek Loop, Cedar Park, TX",
    beds: 3,
    baths: 3,
    sqft: "2,180",
    garage: 2,
    badge: "Cedar Park",
    type: "Townhouse",
    status: "For Sale",
    year: 2020,
    description:
      "Elegant Cedar Park townhouse with rooftop terrace, two-car garage, and proximity to top-rated schools.",
  },
  {
    image: "/prop-living-room.jpg",
    imageAlt:
      "Bright apartment living room in Oak Hill Austin with updated finishes",
    price: "$352,000",
    address: "7601 Rialto Blvd Apt 218, Austin, TX",
    beds: 2,
    baths: 2,
    sqft: "1,030",
    garage: 1,
    badge: "Oak Hill",
    type: "Apartment",
    status: "For Sale",
    year: 2018,
    description:
      "Bright Oak Hill apartment with updated appliances, community pool, and easy access to Mopac Expressway.",
  },
  {
    image: "/prop-pool-home.jpg",
    imageAlt:
      "Exceptional Westlake luxury estate with infinity pool and Lake Austin views",
    price: "$2,100,000",
    address: "5500 Westover Hills Blvd, Austin, TX",
    beds: 6,
    baths: 5,
    sqft: "5,200",
    garage: 3,
    badge: "Westlake",
    type: "Luxury",
    status: "For Sale",
    year: 2022,
    description:
      "Exceptional Westlake estate with infinity pool, home theater, wine cellar, and sweeping views of Lake Austin.",
  },
  {
    image: "/prop-kitchen-modern.jpg",
    imageAlt: "Well-maintained Georgetown home with updated modern kitchen",
    price: "$415,000",
    address: "1204 Leander Rd, Georgetown, TX",
    beds: 3,
    baths: 2,
    sqft: "1,780",
    garage: 2,
    badge: "Georgetown",
    type: "Single-Family",
    status: "For Sale",
    year: 2015,
    description:
      "Well-maintained Georgetown home in a quiet cul-de-sac with updated bathrooms and a large fenced backyard.",
  },
  {
    image: "/prop-condo-building.jpg",
    imageAlt:
      "High-rise downtown Austin condo building with floor-to-ceiling city views",
    price: "$875,000",
    address: "200 Congress Ave Unit 1502, Austin, TX",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    garage: 1,
    badge: "Downtown",
    type: "Condo",
    status: "For Sale",
    year: 2023,
    description:
      "High-rise downtown condo with floor-to-ceiling city views, concierge service, and rooftop amenities.",
  },
];

const propertyTypes = [
  "All",
  "Single-Family",
  "Condo",
  "Townhouse",
  "Apartment",
  "Luxury",
];
const priceRanges = [
  "Any Price",
  "Under $400K",
  "$400K–$600K",
  "$600K–$900K",
  "$900K–$1.5M",
  "$1.5M+",
];
const bedroomOptions = ["Any Beds", "1+", "2+", "3+", "4+", "5+"];

const Listings = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Browse Properties
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Austin Property Listings
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/76">
            Explore homes, condos, townhouses, and luxury estates across Austin
            and surrounding communities.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-[73px] z-20 border-b border-border bg-card/95 px-5 py-4 shadow-card backdrop-blur-md lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-1 min-w-[200px] items-center gap-2 border border-input bg-background px-4 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search by address, neighborhood, or ZIP..."
                aria-label="Search properties"
                readOnly
                defaultValue=""
              />
            </div>
            <select
              className="border border-input bg-background px-4 py-2.5 text-sm font-semibold outline-none"
              aria-label="Property type filter"
              defaultValue="All"
            >
              {propertyTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <select
              className="border border-input bg-background px-4 py-2.5 text-sm font-semibold outline-none"
              aria-label="Price range filter"
              defaultValue="Any Price"
            >
              {priceRanges.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select
              className="border border-input bg-background px-4 py-2.5 text-sm font-semibold outline-none"
              aria-label="Bedrooms filter"
              defaultValue="Any Beds"
            >
              {bedroomOptions.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <button
              className="flex items-center gap-2 border border-input bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              aria-label="More filters"
            >
              <SlidersHorizontal className="h-4 w-4" /> More Filters
            </button>
          </div>
        </div>
      </section>

      {/* Results Count + Sort */}
      <section className="px-5 pt-8 pb-4 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <p className="text-sm font-semibold text-muted-foreground">
            Showing{" "}
            <span className="font-extrabold text-foreground">
              {allListings.length}
            </span>{" "}
            properties in Austin area
          </p>
          <select
            className="border border-input bg-background px-3 py-2 text-sm font-semibold outline-none"
            aria-label="Sort listings"
            defaultValue="newest"
          >
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="sqft">Largest First</option>
          </select>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allListings.map((listing) => (
              <article
                key={listing.address}
                className="group overflow-hidden bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.imageAlt}
                    className="h-full w-full object-cover image-zoom"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <span className="absolute left-4 top-4 bg-card px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-primary shadow-card">
                    {listing.badge}
                  </span>
                  <span className="absolute right-4 top-4 bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-accent-foreground">
                    {listing.status}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-2xl font-extrabold text-primary">
                      {listing.price}
                    </p>
                    <span className="mt-1 shrink-0 border border-border px-2 py-0.5 text-xs font-bold text-muted-foreground">
                      {listing.type}
                    </span>
                  </div>
                  <p className="mt-2 flex items-start gap-2 font-semibold text-foreground">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    {listing.address}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-6">
                    {listing.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4" />
                      {listing.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4" />
                      {listing.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="h-4 w-4" />
                      {listing.sqft} sqft
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Car className="h-4 w-4" />
                      {listing.garage} Car
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Button variant="navy" className="w-full">
                      View Details
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Why Buy With Us */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Why UrbanNest
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
              Your search, simplified
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Curated Listings",
                desc: "Every property is vetted by our local agents for accuracy and quality.",
              },
              {
                icon: Home,
                title: "Neighborhood Expertise",
                desc: "Deep knowledge of Austin's 50+ neighborhoods and their unique character.",
              },
              {
                icon: CheckCircle2,
                title: "Transparent Pricing",
                desc: "Data-driven valuations with no hidden fees or surprise costs.",
              },
              {
                icon: TrendingUp,
                title: "Investment Insights",
                desc: "Market trends and ROI analysis for every property we list.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-body text-lg font-extrabold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-premium md:px-12">
          <Building2 className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Can't find what you're looking for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/76">
            Our agents have access to off-market listings and upcoming
            properties not yet listed publicly.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Talk to an Agent
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Listings;
