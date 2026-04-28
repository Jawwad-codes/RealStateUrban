/** @format */
"use client";

import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  Clock,
  DollarSign,
  Home,
  MapPin,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/Layout";

const articles = [
  {
    image: "/prop-luxury-exterior.jpg",
    imageAlt: "Luxury Austin home exterior — Q1 2026 real estate market report",
    category: "Market Report",
    title: "Austin Real Estate Market: Q1 2026 Review",
    excerpt:
      "Austin's housing market showed resilience in Q1 2026 with median prices rising 6.5% year-over-year. Inventory remains tight in key neighborhoods while new construction adds supply in the suburbs.",
    date: "April 15, 2026",
    readTime: "6 min read",
    author: "Sarah Mitchell",
  },
  {
    image: "/neighborhood-street.jpg",
    imageAlt: "Austin neighborhood street guide for first-time home buyers",
    category: "Buyer's Guide",
    title: "First-Time Buyer's Guide to Austin Neighborhoods",
    excerpt:
      "Choosing the right Austin neighborhood depends on your lifestyle, commute, and budget. We break down the top 10 neighborhoods for first-time buyers with honest pros and cons.",
    date: "April 8, 2026",
    readTime: "9 min read",
    author: "James Okafor",
  },
  {
    image: "/prop-condo-building.jpg",
    imageAlt:
      "Austin condo investment building — top zip codes for rental income 2026",
    category: "Investment",
    title: "Top 5 Austin Zip Codes for Rental Investment in 2026",
    excerpt:
      "With Austin's rental market tightening, savvy investors are targeting specific zip codes for strong cap rates and appreciation potential. Here's where the data points.",
    date: "March 28, 2026",
    readTime: "7 min read",
    author: "Carlos Reyes",
  },
  {
    image: "/prop-kitchen-modern.jpg",
    imageAlt:
      "Beautifully staged kitchen — how to price your Austin home for maximum return",
    category: "Seller's Guide",
    title: "How to Price Your Austin Home in a Shifting Market",
    excerpt:
      "Overpricing is the #1 mistake Austin sellers make in 2026. Learn how to use comparable sales, days-on-market data, and buyer psychology to price your home for maximum return.",
    date: "March 20, 2026",
    readTime: "5 min read",
    author: "Priya Nair",
  },
  {
    image: "/neighborhood-suburban.jpg",
    imageAlt:
      "Austin suburban neighborhood — relocation guide for out-of-state buyers",
    category: "Relocation",
    title: "Moving to Austin from Out of State: What to Expect",
    excerpt:
      "Austin continues to attract relocators from California, New York, and Chicago. Here's a practical guide covering neighborhoods, schools, cost of living, and the buying process.",
    date: "March 12, 2026",
    readTime: "11 min read",
    author: "Emily Chen",
  },
  {
    image: "/prop-pool-home.jpg",
    imageAlt:
      "Austin luxury estate with pool — analysis of the $1M+ property market in 2026",
    category: "Luxury Market",
    title: "Austin's Luxury Market: $1M+ Properties in 2026",
    excerpt:
      "The luxury segment above $1M is performing differently from the broader market. We analyze trends in Westlake, Barton Creek, and Tarrytown with data from Q4 2025 through Q1 2026.",
    date: "March 5, 2026",
    readTime: "8 min read",
    author: "Marcus Webb",
  },
];

const marketStats = [
  { label: "Median Home Price", value: "$650,000", change: "+6.5%", up: true },
  {
    label: "Avg. Days on Market",
    value: "32 days",
    change: "-4 days",
    up: true,
  },
  { label: "Active Listings", value: "2,840", change: "+12%", up: false },
  { label: "Homes Sold (Apr)", value: "1,204", change: "+3.2%", up: true },
  { label: "List-to-Sale Ratio", value: "98.4%", change: "+0.8%", up: true },
  { label: "Price per Sq Ft", value: "$285", change: "+4.1%", up: true },
];

const neighborhoodData = [
  {
    name: "West Austin",
    medianPrice: "$1,250,000",
    dom: "28 days",
    growth: "+8.2%",
    inventory: "Low",
  },
  {
    name: "East Austin",
    medianPrice: "$720,000",
    dom: "22 days",
    growth: "+11.4%",
    inventory: "Very Low",
  },
  {
    name: "South Austin",
    medianPrice: "$680,000",
    dom: "30 days",
    growth: "+7.8%",
    inventory: "Low",
  },
  {
    name: "Downtown / 78701",
    medianPrice: "$890,000",
    dom: "45 days",
    growth: "+5.1%",
    inventory: "Moderate",
  },
  {
    name: "Round Rock",
    medianPrice: "$480,000",
    dom: "35 days",
    growth: "+5.9%",
    inventory: "Moderate",
  },
  {
    name: "Cedar Park",
    medianPrice: "$520,000",
    dom: "33 days",
    growth: "+6.3%",
    inventory: "Low",
  },
  {
    name: "Westlake / Eanes ISD",
    medianPrice: "$1,650,000",
    dom: "52 days",
    growth: "+4.2%",
    inventory: "Low",
  },
  {
    name: "Georgetown",
    medianPrice: "$420,000",
    dom: "38 days",
    growth: "+7.1%",
    inventory: "Moderate",
  },
];

const guides = [
  {
    icon: Home,
    title: "Complete Buyer's Guide",
    desc: "Everything from pre-approval to closing day — a step-by-step walkthrough of the Austin buying process.",
    pages: "24 pages",
  },
  {
    icon: DollarSign,
    title: "Seller's Playbook",
    desc: "Pricing strategy, staging tips, negotiation tactics, and a timeline for selling your Austin home.",
    pages: "18 pages",
  },
  {
    icon: Building2,
    title: "Investment Property Handbook",
    desc: "Cap rates, cash flow analysis, financing options, and the best Austin submarkets for rental income.",
    pages: "32 pages",
  },
  {
    icon: MapPin,
    title: "Austin Neighborhood Guide",
    desc: "In-depth profiles of 20+ Austin neighborhoods with schools, walkability, and price trends.",
    pages: "40 pages",
  },
];

const Insights = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Market Intelligence
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Austin Real Estate Insights
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/76">
            Data-driven market reports, neighborhood analysis, and expert guides
            to help you make smarter real estate decisions.
          </p>
        </div>
      </section>

      {/* Live Market Stats */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                Live Data
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
                Austin Market Snapshot
              </h2>
            </div>
            <p className="text-sm font-semibold text-muted-foreground">
              Updated April 2026
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {marketStats.map(({ label, value, change, up }) => (
              <div
                key={label}
                className="border border-border bg-card p-6 shadow-card"
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-3 font-display text-3xl font-bold text-primary">
                  {value}
                </p>
                <p
                  className={`mt-2 flex items-center gap-1.5 text-sm font-bold ${up ? "text-emerald-600" : "text-rose-500"}`}
                >
                  {up ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {change} YoY
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Breakdown */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              By Neighborhood
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Austin area price breakdown
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[640px] border-collapse bg-card shadow-card"
              aria-label="Austin neighborhood real estate data"
            >
              <thead>
                <tr className="border-b border-border bg-primary text-primary-foreground">
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.16em]">
                    Neighborhood
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.16em]">
                    Median Price
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.16em]">
                    Avg. DOM
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.16em]">
                    YoY Growth
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-extrabold uppercase tracking-[0.16em]">
                    Inventory
                  </th>
                </tr>
              </thead>
              <tbody>
                {neighborhoodData.map((row, i) => (
                  <tr
                    key={row.name}
                    className={`border-b border-border transition-colors hover:bg-secondary ${i % 2 === 0 ? "" : "bg-secondary/40"}`}
                  >
                    <td className="px-5 py-4 font-bold text-primary">
                      {row.name}
                    </td>
                    <td className="px-5 py-4 font-extrabold text-foreground">
                      {row.medianPrice}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground font-semibold">
                      {row.dom}
                    </td>
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-1 font-bold text-emerald-600">
                        <TrendingUp className="h-3.5 w-3.5" />
                        {row.growth}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-extrabold uppercase tracking-[0.12em] ${
                          row.inventory === "Very Low"
                            ? "bg-rose-100 text-rose-700"
                            : row.inventory === "Low"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {row.inventory}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Market Trend Bars (visual, static) */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Price Trends
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Median price by property type
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { type: "Single-Family", price: "$720,000", pct: 88 },
              { type: "Condo / Apt", price: "$465,000", pct: 57 },
              { type: "Townhouse", price: "$580,000", pct: 71 },
              { type: "Luxury Estate", price: "$1,650,000", pct: 100 },
            ].map(({ type, price, pct }) => (
              <div key={type} className="bg-card p-6 shadow-card">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  {type}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-primary">
                  {price}
                </p>
                <div className="mt-4 h-2 w-full bg-secondary overflow-hidden rounded-full">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${pct}%` }}
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${type} price relative to luxury`}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  Relative to luxury segment
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Expert Articles
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Latest from our agents
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group bg-card shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover image-zoom"
                    loading="lazy"
                    width={800}
                    height={450}
                  />
                  <span className="absolute left-4 top-4 bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-accent-foreground">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-primary leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-accent">
                    By {article.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer vs Seller Market Explainer */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Market Conditions
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Is it a buyer's or seller's market?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-2 border-accent bg-card p-8 shadow-premium">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground">
                  <TrendingDown className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
                    Current Status
                  </p>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    Seller's Market
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-7">
                Austin remains a seller's market in 2026. Inventory is below the
                3-month threshold in most neighborhoods, and well-priced homes
                are receiving multiple offers within the first week.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Homes selling above list price",
                  "Multiple offer situations common",
                  "Contingencies being waived",
                  "Fast closings (21–30 days)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                  <BarChart3 className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                    Buyer Opportunities
                  </p>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    Where Buyers Win
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground leading-7">
                Despite the seller's market, buyers can find leverage in
                specific segments — particularly condos downtown, new
                construction in the suburbs, and properties that have been
                sitting 45+ days.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Downtown condos with longer DOM",
                  "New construction with builder incentives",
                  "Properties needing cosmetic updates",
                  "Suburban markets with growing inventory",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Free Resources
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Download our expert guides
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map(({ icon: Icon, title, desc, pages }) => (
              <div
                key={title}
                className="border border-primary-foreground/15 bg-primary-foreground/8 p-6 transition-colors hover:bg-primary-foreground/12"
              >
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-body text-lg font-extrabold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/68">
                  {desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/56">
                    <BookOpen className="h-3.5 w-3.5" />
                    {pages}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
                    Free PDF
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-premium md:px-12">
          <BarChart3 className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Want a custom market report?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/76">
            Our agents can pull a hyper-local analysis for any Austin
            neighborhood, zip code, or property type — free of charge.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Request a Report
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
