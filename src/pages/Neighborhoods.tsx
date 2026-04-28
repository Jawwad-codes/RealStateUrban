/** @format */
"use client";

import {
  ArrowRight,
  Building2,
  Car,
  GraduationCap,
  Home,
  MapPin,
  Star,
  Trees,
  TrendingUp,
  Utensils,
} from "lucide-react";
import Layout from "@/components/Layout";

// Images assigned by neighborhood character — each unique
const neighborhoods = [
  {
    name: "East Austin",
    image: "/neighborhood-street.jpg",
    imageAlt:
      "Vibrant East Austin street with local restaurants, murals, and walkable urban energy",
    tagline: "Vibrant, walkable, and rapidly appreciating",
    medianPrice: "$720,000",
    growth: "+11.4%",
    walkScore: 82,
    schools: "B+",
    vibe: ["Hip & Trendy", "Walkable", "Foodie Scene"],
    description:
      "East Austin has transformed from an overlooked neighborhood into one of Austin's most sought-after zip codes. Known for its eclectic mix of food trucks, craft breweries, boutique shops, and converted bungalows, East Austin attracts young professionals and creatives.",
    highlights: [
      "6th Street entertainment district",
      "Rainey Street bar scene",
      "Mueller development",
      "Easy downtown access",
    ],
    propertyTypes: ["Condos", "Bungalows", "New Construction"],
    priceRange: "$450K – $1.2M",
  },
  {
    name: "West Austin",
    image: "/neighborhood-hills.jpg",
    imageAlt:
      "Luxury West Austin estate nestled in rolling hill country with mature trees",
    tagline: "Hill country views and luxury living",
    medianPrice: "$1,250,000",
    growth: "+8.2%",
    walkScore: 34,
    schools: "A",
    vibe: ["Luxury", "Quiet", "Nature"],
    description:
      "West Austin is synonymous with luxury real estate, hill country views, and top-rated schools. Neighborhoods like Tarrytown, Rollingwood, and West Lake Hills offer large lots, mature trees, and a suburban feel just minutes from downtown.",
    highlights: [
      "Barton Creek Greenbelt access",
      "Top-rated Eanes ISD",
      "Lake Austin waterfront",
      "Luxury estates",
    ],
    propertyTypes: ["Luxury Estates", "Single-Family", "Waterfront"],
    priceRange: "$800K – $5M+",
  },
  {
    name: "South Austin",
    image: "/prop-craftsman.jpg",
    imageAlt: "Eclectic craftsman bungalow on a tree-lined South Austin street",
    tagline: "Keep Austin Weird — and affordable",
    medianPrice: "$680,000",
    growth: "+7.8%",
    walkScore: 58,
    schools: "B",
    vibe: ["Eclectic", "Artsy", "Family-Friendly"],
    description:
      "South Austin is the heart of Austin's quirky, independent spirit. From the South Congress shopping corridor to the live music venues on South Lamar, this area blends affordability with character.",
    highlights: [
      "South Congress Ave (SoCo)",
      "Barton Springs Pool",
      "Zilker Park",
      "Live music venues",
    ],
    propertyTypes: ["Bungalows", "Craftsman Homes", "New Construction"],
    priceRange: "$450K – $1.1M",
  },
  {
    name: "Downtown Austin",
    image: "/neighborhood-downtown.jpg",
    imageAlt:
      "Downtown Austin skyline with high-rise condos and Lady Bird Lake at dusk",
    tagline: "Urban living at the center of it all",
    medianPrice: "$890,000",
    growth: "+5.1%",
    walkScore: 91,
    schools: "B-",
    vibe: ["Urban", "Walkable", "Nightlife"],
    description:
      "Downtown Austin offers the ultimate urban lifestyle — walkable to restaurants, entertainment, and the State Capitol. High-rise condos and luxury apartments dominate the market, attracting professionals who want to live where they work and play.",
    highlights: [
      "6th Street entertainment",
      "Lady Bird Lake trail",
      "State Capitol",
      "World-class dining",
    ],
    propertyTypes: ["High-Rise Condos", "Luxury Apartments", "Lofts"],
    priceRange: "$400K – $3M+",
  },
  {
    name: "Round Rock",
    image: "/neighborhood-suburban.jpg",
    imageAlt:
      "Well-maintained suburban neighborhood in Round Rock with wide streets and green lawns",
    tagline: "Suburban value with big-city access",
    medianPrice: "$480,000",
    growth: "+5.9%",
    walkScore: 42,
    schools: "A-",
    vibe: ["Suburban", "Family-Friendly", "Value"],
    description:
      "Round Rock offers excellent value for families priced out of central Austin. With top-rated schools, new master-planned communities, and easy access to I-35 and the Domain, Round Rock has become one of the fastest-growing cities in Texas.",
    highlights: [
      "Round Rock ISD (top-rated)",
      "Dell Diamond baseball",
      "Old Settlers Park",
      "Premium Outlets",
    ],
    propertyTypes: ["Single-Family", "New Construction", "Townhouses"],
    priceRange: "$350K – $750K",
  },
  {
    name: "Cedar Park",
    image: "/prop-townhouse-row.jpg",
    imageAlt:
      "Master-planned Cedar Park community with new townhouses and manicured landscaping",
    tagline: "Master-planned communities and great schools",
    medianPrice: "$520,000",
    growth: "+6.3%",
    walkScore: 38,
    schools: "A",
    vibe: ["Planned Community", "Family", "Safe"],
    description:
      "Cedar Park is one of Austin's most popular suburbs for families, offering master-planned communities, excellent Leander ISD schools, and a growing retail and dining scene.",
    highlights: [
      "Leander ISD schools",
      "HEB Center arena",
      "Brushy Creek trails",
      "Growing tech employers",
    ],
    propertyTypes: ["Single-Family", "New Construction", "Townhouses"],
    priceRange: "$380K – $850K",
  },
  {
    name: "Westlake / Eanes ISD",
    image: "/prop-pool-home.jpg",
    imageAlt:
      "Prestigious Westlake Hills luxury estate with pool and panoramic Austin views",
    tagline: "Austin's most prestigious address",
    medianPrice: "$1,650,000",
    growth: "+4.2%",
    walkScore: 22,
    schools: "A+",
    vibe: ["Prestigious", "Exclusive", "Top Schools"],
    description:
      "Westlake Hills and the Eanes ISD area represent the pinnacle of Austin real estate. Home to some of the city's most successful executives, athletes, and entrepreneurs, this enclave offers privacy, security, and the best public schools in Texas.",
    highlights: [
      "#1 ranked Eanes ISD",
      "Lake Austin access",
      "Private estates",
      "Gated communities",
    ],
    propertyTypes: ["Luxury Estates", "Gated Communities", "Waterfront"],
    priceRange: "$1M – $10M+",
  },
  {
    name: "Georgetown",
    image: "/prop-modern-house.jpg",
    imageAlt:
      "Charming Georgetown TX home near the historic Victorian downtown square",
    tagline: "Small-town charm, big-city proximity",
    medianPrice: "$420,000",
    growth: "+7.1%",
    walkScore: 35,
    schools: "A-",
    vibe: ["Historic", "Charming", "Growing"],
    description:
      "Georgetown is one of Texas's fastest-growing cities, blending a beautifully preserved Victorian downtown square with modern master-planned communities. Located 30 miles north of Austin on I-35, Georgetown offers affordability, excellent schools, and a strong sense of community.",
    highlights: [
      "Historic downtown square",
      "Georgetown ISD",
      "Sun City active adult community",
      "Lake Georgetown",
    ],
    propertyTypes: ["Single-Family", "New Construction", "Active Adult"],
    priceRange: "$300K – $650K",
  },
];

const Neighborhoods = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Explore Austin
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Austin Neighborhood Guide
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/76">
            Every Austin neighborhood has its own personality, price point, and
            lifestyle. Find the one that fits yours.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="border-b border-border bg-card/95 px-5 py-4 shadow-card lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <a
                key={n.name}
                href={`#${n.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "")}`}
                className="border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {n.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Cards */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {neighborhoods.map((n, i) => (
            <article
              key={n.name}
              id={n.name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "")}
              className="scroll-mt-24"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative">
                  <img
                    src={n.image}
                    alt={n.imageAlt}
                    className="aspect-[4/3] w-full object-cover shadow-premium"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute -bottom-4 left-4 bg-accent px-4 py-2 text-accent-foreground shadow-premium">
                    <p className="text-xl font-extrabold">{n.medianPrice}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.14em]">
                      Median Price
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    {n.vibe.map((v) => (
                      <span
                        key={v}
                        className="border border-border bg-secondary px-2.5 py-1 text-xs font-bold text-primary"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl">
                    {n.name}
                  </h2>
                  <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                    {n.tagline}
                  </p>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {n.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border border-border bg-card p-3 text-center shadow-card">
                      <TrendingUp className="mx-auto h-4 w-4 text-accent" />
                      <p className="mt-1 text-lg font-extrabold text-primary">
                        {n.growth}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        YoY Growth
                      </p>
                    </div>
                    <div className="border border-border bg-card p-3 text-center shadow-card">
                      <Car className="mx-auto h-4 w-4 text-accent" />
                      <p className="mt-1 text-lg font-extrabold text-primary">
                        {n.walkScore}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Walk Score
                      </p>
                    </div>
                    <div className="border border-border bg-card p-3 text-center shadow-card">
                      <GraduationCap className="mx-auto h-4 w-4 text-accent" />
                      <p className="mt-1 text-lg font-extrabold text-primary">
                        {n.schools}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Schools
                      </p>
                    </div>
                    <div className="border border-border bg-card p-3 text-center shadow-card">
                      <Home className="mx-auto h-4 w-4 text-accent" />
                      <p className="mt-1 text-xs font-extrabold text-primary leading-tight">
                        {n.priceRange}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Price Range
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2">
                        Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {n.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-sm font-semibold text-foreground"
                          >
                            <Star className="h-3.5 w-3.5 shrink-0 text-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2">
                        Property Types
                      </p>
                      <ul className="space-y-1.5">
                        {n.propertyTypes.map((p) => (
                          <li
                            key={p}
                            className="flex items-center gap-2 text-sm font-semibold text-foreground"
                          >
                            <Building2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="/listings"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-accent hover:underline"
                  >
                    View {n.name} listings <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              {i < neighborhoods.length - 1 && (
                <hr className="mt-16 border-border" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Side by Side
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Neighborhood comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[700px] border-collapse bg-card shadow-card"
              aria-label="Austin neighborhood comparison"
            >
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    Neighborhood
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    Median Price
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    YoY Growth
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    Walk Score
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    Schools
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.14em]">
                    Price Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((n, i) => (
                  <tr
                    key={n.name}
                    className={`border-b border-border hover:bg-secondary transition-colors ${i % 2 !== 0 ? "bg-secondary/40" : ""}`}
                  >
                    <td className="px-5 py-4 font-bold text-primary">
                      {n.name}
                    </td>
                    <td className="px-5 py-4 font-extrabold text-foreground">
                      {n.medianPrice}
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-600">
                      {n.growth}
                    </td>
                    <td className="px-5 py-4 font-semibold text-muted-foreground">
                      {n.walkScore}/100
                    </td>
                    <td className="px-5 py-4 font-bold text-foreground">
                      {n.schools}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-muted-foreground">
                      {n.priceRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lifestyle Icons */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Find Your Fit
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              What matters most to you?
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Best Schools",
                neighborhoods: "West Austin, Cedar Park, Westlake, Round Rock",
              },
              {
                icon: Utensils,
                title: "Food & Nightlife",
                neighborhoods: "East Austin, Downtown, South Congress",
              },
              {
                icon: Trees,
                title: "Nature & Outdoors",
                neighborhoods: "West Austin, South Austin, Georgetown",
              },
              {
                icon: MapPin,
                title: "Best Value",
                neighborhoods: "Round Rock, Georgetown, Cedar Park",
              },
            ].map(({ icon: Icon, title, neighborhoods: hoods }) => (
              <div
                key={title}
                className="border border-border bg-card p-6 shadow-card text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center bg-gold-soft text-accent">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-body text-lg font-extrabold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{hoods}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <MapPin className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Not sure which neighborhood is right for you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/76">
            Our agents know every street in Austin. Tell us your priorities and
            we'll match you with the perfect neighborhood.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Get a Neighborhood Match
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Neighborhoods;
