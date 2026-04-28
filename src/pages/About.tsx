/** @format */
"use client";

import {
  Award,
  BarChart3,
  CheckCircle2,
  Globe,
  Heart,
  Home,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

// Contextually appropriate images per agent role
const agents = [
  {
    name: "Sarah Mitchell",
    title: "Founder & Principal Broker",
    phone: "+1 (512) 555-0101",
    email: "sarah@urbannestrealty.com",
    image: "/agent-sarah.jpg",
    imageAlt:
      "Sarah Mitchell, Founder and Principal Broker at UrbanNest Realty Austin",
    bio: "Sarah founded UrbanNest in 2013 after 8 years at a national brokerage. She specializes in luxury residential and investment properties across West Austin and Westlake.",
    specialties: ["Luxury Residential", "Investment Properties", "West Austin"],
    sales: "320+",
  },
  {
    name: "James Okafor",
    title: "Senior Buyer's Agent",
    phone: "+1 (512) 555-0102",
    email: "james@urbannestrealty.com",
    image: "/agent-james.jpg",
    imageAlt:
      "James Okafor, Senior Buyer's Agent specializing in East Austin homes",
    bio: "James has helped over 200 families find their perfect home in Austin. His deep knowledge of East Austin and the Domain area makes him a go-to for first-time buyers.",
    specialties: ["First-Time Buyers", "East Austin", "The Domain"],
    sales: "210+",
  },
  {
    name: "Priya Nair",
    title: "Listing Specialist",
    phone: "+1 (512) 555-0103",
    email: "priya@urbannestrealty.com",
    image: "/agent-priya.jpg",
    imageAlt:
      "Priya Nair, Listing Specialist and home staging expert in South Austin",
    bio: "Priya's marketing expertise and staging knowledge consistently achieve above-asking prices for her sellers. She covers South Austin, Buda, and Kyle.",
    specialties: ["Home Staging", "South Austin", "Seller Strategy"],
    sales: "180+",
  },
  {
    name: "Carlos Reyes",
    title: "Commercial & Investment Advisor",
    phone: "+1 (512) 555-0104",
    email: "carlos@urbannestrealty.com",
    image: "/agent-carlos.jpg",
    imageAlt:
      "Carlos Reyes, Commercial and Investment Real Estate Advisor in Austin",
    bio: "Carlos brings 12 years of commercial real estate experience to UrbanNest. He advises investors on multi-family, retail, and mixed-use opportunities across the Austin metro.",
    specialties: ["Commercial", "Multi-Family", "Investment Analysis"],
    sales: "150+",
  },
  {
    name: "Emily Chen",
    title: "Relocation Specialist",
    phone: "+1 (512) 555-0105",
    email: "emily@urbannestrealty.com",
    image: "/agent-emily.jpg",
    imageAlt:
      "Emily Chen, Relocation Specialist helping out-of-state buyers move to Austin",
    bio: "Emily specializes in helping out-of-state buyers navigate the Austin market remotely. She's assisted clients relocating from 30+ states and 12 countries.",
    specialties: ["Relocation", "Remote Buying", "New Construction"],
    sales: "140+",
  },
  {
    name: "Marcus Webb",
    title: "Luxury Property Specialist",
    phone: "+1 (512) 555-0106",
    email: "marcus@urbannestrealty.com",
    image: "/agent-marcus.jpg",
    imageAlt:
      "Marcus Webb, Luxury Property Specialist for Westlake and Barton Creek Austin",
    bio: "Marcus focuses exclusively on Austin's luxury market — $1M+ properties in Westlake, Tarrytown, and Barton Creek. His discretion and network are unmatched.",
    specialties: ["Luxury Estates", "Westlake", "Barton Creek"],
    sales: "95+",
  },
];

const milestones = [
  { year: "2013", event: "UrbanNest Realty founded on Congress Ave" },
  { year: "2015", event: "Expanded to Round Rock and Cedar Park markets" },
  { year: "2017", event: "Launched commercial & investment division" },
  { year: "2019", event: "Opened second office in South Austin" },
  { year: "2021", event: "Surpassed $500M in total sales volume" },
  {
    year: "2023",
    event: "Named Austin's Top Boutique Brokerage by Austin Business Journal",
  },
  { year: "2026", event: "1,000+ properties sold and counting" },
];

const values = [
  {
    icon: Heart,
    title: "Client-First Always",
    desc: "Every decision we make is guided by what's best for our clients — not our commission.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    desc: "We provide honest pricing, clear contracts, and no hidden fees. What you see is what you get.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "We combine local expertise with real-time market data to give you a competitive edge.",
  },
  {
    icon: Globe,
    title: "Community Rooted",
    desc: "We live and work in Austin. We're invested in the neighborhoods we serve.",
  },
];

const awards = [
  "Austin Business Journal Top Boutique Brokerage 2023",
  "Zillow Premier Agent — 5-Star Rated",
  "Texas Association of Realtors Excellence Award 2022",
  "Austin Chamber of Commerce Small Business of the Year 2021",
  "Realtor.com Top 1% Austin Agents 2020–2026",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/office-team.jpg"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            About UrbanNest
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Austin's most trusted real estate team
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/76">
            Since 2013, UrbanNest Realty has helped over 1,000 families,
            professionals, and investors navigate the Austin real estate market
            with confidence, clarity, and care.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "1,000+", label: "Properties Sold" },
              { value: "$1.2B+", label: "Total Sales Volume" },
              { value: "13 yrs", label: "Serving Austin" },
              { value: "4.9★", label: "Average Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="border border-primary-foreground/15 bg-primary-foreground/8 p-5"
              >
                <p className="text-3xl font-extrabold text-accent">{value}</p>
                <p className="mt-1 text-sm font-semibold text-primary-foreground/72">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Born in Austin, built for Austin
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              UrbanNest Realty was founded in 2013 by Sarah Mitchell, a lifelong
              Austinite who saw a gap in the market: buyers and sellers deserved
              a boutique experience with big-brokerage resources.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We started with a small team of three agents on Congress Ave.
              Today, we're a team of 20+ specialists covering every corner of
              the Austin metro — from the luxury estates of Westlake to the
              vibrant condos of East 6th Street.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              What hasn't changed is our commitment: every client gets a
              dedicated agent, transparent pricing, and the kind of local
              knowledge you can only get from people who actually live here.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Neighborhood-level pricing",
                "Off-market access",
                "Investor analysis",
                "Relocation support",
                "Staging & photography",
                "Offer strategy",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/office-meeting.jpg"
              alt="UrbanNest Realty team collaborating in their modern Austin Congress Ave office"
              className="aspect-[4/3] w-full object-cover shadow-premium"
              loading="lazy"
              width={1200}
              height={900}
            />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-premium">
              <p className="text-3xl font-extrabold">2013</p>
              <p className="text-sm font-bold uppercase tracking-[0.16em]">
                Founded in Austin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              What We Stand For
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Our core values
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-body text-xl font-extrabold text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              The Team
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Meet your Austin experts
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Our agents are Austin residents first, real estate professionals
              second. They know these neighborhoods because they live in them.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="group bg-card shadow-card overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.imageAlt}
                    className="h-full w-full object-cover image-zoom"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary">
                    {agent.name}
                  </h3>
                  <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.14em] text-accent">
                    {agent.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {agent.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {agent.specialties.map((s) => (
                      <span
                        key={s}
                        className="border border-border bg-secondary px-2.5 py-1 text-xs font-bold text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border pt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">
                        Closed Deals
                      </p>
                      <p className="text-xl font-extrabold text-primary">
                        {agent.sales}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground"
                        aria-label={`Call ${agent.name}`}
                      >
                        <Phone className="h-4 w-4" />
                      </span>
                      <span
                        className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground"
                        aria-label={`Email ${agent.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Our Journey
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              A decade of milestones
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-[7px] top-0 bottom-0 w-px bg-primary-foreground/20 md:left-1/2"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1" />
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                      {m.year}
                    </p>
                    <p className="mt-1 font-semibold text-primary-foreground/82">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Recognition
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Awards & accolades
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <div
                key={award}
                className="flex items-start gap-4 border border-border bg-card p-5 shadow-card"
              >
                <Award className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <p className="font-semibold text-foreground">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Client Stories
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              What our clients say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Sarah and her team made buying our first home in Austin completely stress-free. They knew every neighborhood inside out and helped us find a home we love.",
                name: "Michael & Laura Turner",
                place: "South Austin, TX",
                rating: 5,
              },
              {
                quote:
                  "James found us an off-market property in East Austin before it was even listed. That kind of access is invaluable in this market.",
                name: "Jessica Miller",
                place: "East Austin, TX",
                rating: 5,
              },
              {
                quote:
                  "Priya sold our home in 8 days at 4% over asking. Her staging advice and marketing strategy were exceptional.",
                name: "David & Karen Clark",
                place: "Cedar Park, TX",
                rating: 5,
              },
              {
                quote:
                  "Carlos helped us analyze three investment properties and we chose the one with the best cap rate. His financial analysis was thorough and honest.",
                name: "Robert Nguyen",
                place: "Austin, TX",
                rating: 5,
              },
              {
                quote:
                  "We relocated from Chicago and Emily made the entire process seamless. She did virtual tours, handled everything remotely, and we closed without a single issue.",
                name: "Amanda & Tom Walsh",
                place: "Round Rock, TX",
                rating: 5,
              },
              {
                quote:
                  "Marcus found us our dream home in Westlake. His discretion and knowledge of the luxury market are unmatched in Austin.",
                name: "Dr. Patricia Osei",
                place: "Westlake, TX",
                rating: 5,
              },
            ].map((review) => (
              <figure key={review.name} className="bg-card p-7 shadow-card">
                <div className="mb-4 flex gap-1 text-accent">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base font-semibold leading-7 text-foreground">
                  "{review.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-5 font-bold text-primary">
                  — {review.name},{" "}
                  <span className="text-muted-foreground">{review.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-premium md:px-12">
          <Users className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Ready to work with our team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/76">
            Whether you're buying, selling, or investing — we have the right
            specialist for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Contact an Agent
            </a>
            <a
              href="/listings"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary-foreground/35 bg-primary-foreground/10 px-8 text-sm font-medium text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary-foreground/18"
            >
              Browse Listings
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
