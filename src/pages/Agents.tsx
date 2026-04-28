/** @format */

"use client";

import {
  Award,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  Star,
  Users,
} from "lucide-react";
import Layout from "@/components/Layout";

const agents = [
  {
    name: "Sarah Mitchell",
    title: "Founder & Principal Broker",
    license: "TX #0512001",
    phone: "+1 (512) 555-0101",
    email: "sarah@urbannestrealty.com",
    image: "/agent-sarah.jpg",
    imageAlt:
      "Sarah Mitchell — Founder & Principal Broker, UrbanNest Realty Austin",
    bio: "Sarah founded UrbanNest in 2013 after 8 years at a national brokerage. She specializes in luxury residential and investment properties across West Austin and Westlake. Her deep market knowledge and negotiation skills have helped clients save and earn millions.",
    specialties: [
      "Luxury Residential",
      "Investment Properties",
      "West Austin",
      "Westlake",
    ],
    languages: ["English", "Spanish"],
    sales: "320+",
    volume: "$280M+",
    rating: 4.9,
    reviews: 142,
    years: 13,
    awards: [
      "Austin Business Journal Top Agent 2023",
      "Zillow Premier Agent 5-Star",
    ],
  },
  {
    name: "James Okafor",
    title: "Senior Buyer's Agent",
    license: "TX #0512002",
    phone: "+1 (512) 555-0102",
    email: "james@urbannestrealty.com",
    image: "/agent-james.jpg",
    imageAlt:
      "James Okafor — Senior Buyer's Agent specializing in East Austin and first-time buyers",
    bio: "James has helped over 200 families find their perfect home in Austin. His deep knowledge of East Austin and the Domain area makes him a go-to for first-time buyers. He's known for his patience, honesty, and ability to find off-market deals.",
    specialties: [
      "First-Time Buyers",
      "East Austin",
      "The Domain",
      "Off-Market",
    ],
    languages: ["English", "Yoruba"],
    sales: "210+",
    volume: "$120M+",
    rating: 4.9,
    reviews: 98,
    years: 9,
    awards: [
      "Realtor.com Top Buyer's Agent 2022",
      "UrbanNest Agent of the Year 2021",
    ],
  },
  {
    name: "Priya Nair",
    title: "Listing Specialist",
    license: "TX #0512003",
    phone: "+1 (512) 555-0103",
    email: "priya@urbannestrealty.com",
    image: "/agent-priya.jpg",
    imageAlt:
      "Priya Nair — Listing Specialist and home staging expert in South Austin",
    bio: "Priya's marketing expertise and staging knowledge consistently achieve above-asking prices for her sellers. She covers South Austin, Buda, and Kyle. Her listings average 98.4% of list price and sell in under 30 days.",
    specialties: [
      "Home Staging",
      "South Austin",
      "Seller Strategy",
      "Marketing",
    ],
    languages: ["English", "Hindi", "Tamil"],
    sales: "180+",
    volume: "$95M+",
    rating: 5.0,
    reviews: 87,
    years: 7,
    awards: ["Texas Association of Realtors Excellence Award 2022"],
  },
  {
    name: "Carlos Reyes",
    title: "Commercial & Investment Advisor",
    license: "TX #0512004",
    phone: "+1 (512) 555-0104",
    email: "carlos@urbannestrealty.com",
    image: "/agent-carlos.jpg",
    imageAlt:
      "Carlos Reyes — Commercial and Investment Real Estate Advisor in Austin",
    bio: "Carlos brings 12 years of commercial real estate experience to UrbanNest. He advises investors on multi-family, retail, and mixed-use opportunities across the Austin metro. His financial modeling and market analysis are second to none.",
    specialties: [
      "Commercial",
      "Multi-Family",
      "Investment Analysis",
      "Cap Rate Modeling",
    ],
    languages: ["English", "Spanish", "Portuguese"],
    sales: "150+",
    volume: "$210M+",
    rating: 4.8,
    reviews: 64,
    years: 12,
    awards: ["CCIM Designation", "Austin Commercial RE Award 2023"],
  },
  {
    name: "Emily Chen",
    title: "Relocation Specialist",
    license: "TX #0512005",
    phone: "+1 (512) 555-0105",
    email: "emily@urbannestrealty.com",
    image: "/agent-emily.jpg",
    imageAlt:
      "Emily Chen — Relocation Specialist helping out-of-state buyers move to Austin",
    bio: "Emily specializes in helping out-of-state buyers navigate the Austin market remotely. She's assisted clients relocating from 30+ states and 12 countries. Her virtual tour process and remote closing coordination are seamless.",
    specialties: [
      "Relocation",
      "Remote Buying",
      "New Construction",
      "International Buyers",
    ],
    languages: ["English", "Mandarin", "Cantonese"],
    sales: "140+",
    volume: "$88M+",
    rating: 4.9,
    reviews: 76,
    years: 6,
    awards: [
      "NAR Relocation Specialist Certification",
      "UrbanNest Rising Star 2020",
    ],
  },
  {
    name: "Marcus Webb",
    title: "Luxury Property Specialist",
    license: "TX #0512006",
    phone: "+1 (512) 555-0106",
    email: "marcus@urbannestrealty.com",
    image: "/agent-marcus.jpg",
    imageAlt:
      "Marcus Webb — Luxury Property Specialist for Westlake and Barton Creek Austin",
    bio: "Marcus focuses exclusively on Austin's luxury market — $1M+ properties in Westlake, Tarrytown, and Barton Creek. His discretion, network, and knowledge of the ultra-high-end segment are unmatched in Austin.",
    specialties: ["Luxury Estates", "Westlake", "Barton Creek", "Tarrytown"],
    languages: ["English", "French"],
    sales: "95+",
    volume: "$185M+",
    rating: 5.0,
    reviews: 52,
    years: 8,
    awards: [
      "Institute for Luxury Home Marketing Member",
      "Austin Luxury Agent Top 10 2023",
    ],
  },
];

const whyJoin = [
  {
    icon: Award,
    title: "Top Commission Structure",
    desc: "Competitive splits with performance bonuses for top producers.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    desc: "New agents are paired with senior agents for 6 months of guided development.",
  },
  {
    icon: Globe,
    title: "Marketing Support",
    desc: "Professional photography, social media, and listing marketing included.",
  },
  {
    icon: CheckCircle2,
    title: "Leads & Technology",
    desc: "Access to our CRM, lead pipeline, and proprietary market data tools.",
  },
];

const Agents = () => {
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
            Our Team
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Meet Our Agents
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/76">
            20+ licensed Austin real estate professionals, each with deep
            neighborhood expertise and a track record of results.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { value: "20+", label: "Licensed Agents" },
              { value: "1,000+", label: "Deals Closed" },
              { value: "4.9★", label: "Avg. Rating" },
              { value: "$1.2B+", label: "Sales Volume" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="border border-primary-foreground/15 bg-primary-foreground/8 px-5 py-3"
              >
                <p className="text-2xl font-extrabold text-accent">{value}</p>
                <p className="text-xs font-semibold text-primary-foreground/68">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Grid */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <article
                key={agent.name}
                className="group bg-card shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.imageAlt}
                    className="h-full w-full object-cover object-top image-zoom"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                    <p className="font-display text-xl font-bold text-primary-foreground">
                      {agent.name}
                    </p>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
                      {agent.title}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex gap-0.5 text-accent"
                      aria-label={`${agent.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${i < Math.floor(agent.rating) ? "fill-current" : "fill-none"}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {agent.rating}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({agent.reviews} reviews)
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {agent.bio}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    <div className="text-center">
                      <p className="text-lg font-extrabold text-primary">
                        {agent.sales}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Sales
                      </p>
                    </div>
                    <div className="text-center border-x border-border">
                      <p className="text-lg font-extrabold text-primary">
                        {agent.volume}
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Volume
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-extrabold text-primary">
                        {agent.years} yrs
                      </p>
                      <p className="text-xs font-semibold text-muted-foreground">
                        Experience
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {agent.specialties.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border border-border bg-secondary px-2 py-0.5 text-xs font-bold text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs font-semibold text-muted-foreground">
                    <Globe
                      className="inline h-3.5 w-3.5 mr-1 text-accent"
                      aria-hidden="true"
                    />
                    {agent.languages.join(" · ")}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {agent.license}
                  </p>
                  <div className="mt-3 space-y-1">
                    {agent.awards.map((a) => (
                      <p
                        key={a}
                        className="flex items-center gap-1.5 text-xs font-semibold text-foreground"
                      >
                        <Award
                          className="h-3.5 w-3.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {a}
                      </p>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center justify-center gap-2 border border-border bg-background py-2.5 text-xs font-bold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center justify-center gap-2 bg-primary py-2.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Office Photo */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <img
              src="/office-meeting.jpg"
              alt="UrbanNest Realty agents in a team meeting at their Austin office"
              className="aspect-[4/3] w-full object-cover shadow-premium"
              loading="lazy"
              width={900}
              height={675}
            />
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
                Our Culture
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
                A team that works together
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Every week our agents share market intelligence, off-market
                leads, and client feedback. That collaboration is what gives
                UrbanNest clients an edge — you get one agent's attention with
                the knowledge of the whole team behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Careers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Join the UrbanNest team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              We're always looking for talented, motivated agents who share our
              commitment to client service and Austin community.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Apply to Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-premium md:px-12">
          <Users className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Ready to work with an expert?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/76">
            Match with the right agent for your needs — buyer, seller, investor,
            or relocator.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Find My Agent
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Agents;
