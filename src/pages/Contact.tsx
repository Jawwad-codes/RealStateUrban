/** @format */
"use client";

import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const agents = [
  {
    name: "Sarah Mitchell",
    title: "Founder & Principal Broker",
    phone: "+1 (512) 555-0101",
    email: "sarah@urbannestrealty.com",
    specialty: "Luxury & Investment",
  },
  {
    name: "James Okafor",
    title: "Senior Buyer's Agent",
    phone: "+1 (512) 555-0102",
    email: "james@urbannestrealty.com",
    specialty: "First-Time Buyers",
  },
  {
    name: "Priya Nair",
    title: "Listing Specialist",
    phone: "+1 (512) 555-0103",
    email: "priya@urbannestrealty.com",
    specialty: "Sellers & Staging",
  },
  {
    name: "Carlos Reyes",
    title: "Commercial Advisor",
    phone: "+1 (512) 555-0104",
    email: "carlos@urbannestrealty.com",
    specialty: "Commercial & Multi-Family",
  },
];

const offices = [
  {
    name: "Main Office — Congress Ave",
    address: "1234 Congress Ave, Suite 500",
    city: "Austin, TX 78701",
    phone: "+1 (512) 555-7890",
    email: "info@urbannestrealty.com",
    hours: "Mon–Fri 9am–6pm, Sat 10am–4pm",
    primary: true,
  },
  {
    name: "South Austin Office",
    address: "5678 S Lamar Blvd, Suite 200",
    city: "Austin, TX 78704",
    phone: "+1 (512) 555-7891",
    email: "south@urbannestrealty.com",
    hours: "Mon–Fri 9am–5pm, Sat 10am–3pm",
    primary: false,
  },
];

const faqs = [
  {
    q: "How quickly can I expect a response?",
    a: "Our team responds to all inquiries within 2 business hours during office hours. For urgent matters, call us directly.",
  },
  {
    q: "Do I need to be pre-approved before touring homes?",
    a: "We recommend getting pre-approved before touring, but it's not required. We can connect you with trusted Austin lenders if needed.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover all of Austin and the surrounding metro including Round Rock, Cedar Park, Georgetown, Pflugerville, Buda, Kyle, and Westlake.",
  },
  {
    q: "Is there a fee to work with a buyer's agent?",
    a: "In most cases, buyer's agent fees are covered by the seller. We'll explain the current structure clearly before we start working together.",
  },
  {
    q: "Can you help with investment properties?",
    a: "Absolutely. Carlos Reyes leads our investment division and can provide cap rate analysis, cash flow projections, and market comparisons.",
  },
  {
    q: "Do you work with out-of-state buyers?",
    a: "Yes — Emily Chen specializes in remote and relocation buyers. We offer virtual tours, video walkthroughs, and remote closing coordination.",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Get in Touch
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Contact UrbanNest Realty
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/76">
            Whether you're buying, selling, or just exploring — our Austin team
            is ready to help. Reach out and we'll respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="bg-card p-6 shadow-premium md:p-10">
            <h2 className="font-display text-2xl font-bold text-primary">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and an agent will reach out within 2 business
              hours.
            </p>
            <form className="mt-8 space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                  >
                    First Name *
                  </label>
                  <input
                    id="first-name"
                    className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Jane"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                  >
                    Last Name *
                  </label>
                  <input
                    id="last-name"
                    className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Smith"
                    aria-required="true"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="jane@example.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+1 (512) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  I'm Interested In *
                </label>
                <select
                  id="interest"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  aria-required="true"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Buying a home in Austin</option>
                  <option>Selling my property</option>
                  <option>Investment property analysis</option>
                  <option>Relocating to Austin</option>
                  <option>Scheduling a property tour</option>
                  <option>Commercial real estate</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>Under $400,000</option>
                  <option>$400,000 – $600,000</option>
                  <option>$600,000 – $900,000</option>
                  <option>$900,000 – $1,500,000</option>
                  <option>$1,500,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  className="w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    When are you looking to move?
                  </option>
                  <option>ASAP (within 30 days)</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="min-h-32 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us what you're looking for, any specific neighborhoods, must-haves, or questions..."
                />
              </div>
              <Button variant="navy" size="lg" className="w-full">
                Send Message
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to our Privacy Policy. We never share
                your information.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Offices */}
            {offices.map((office) => (
              <div
                key={office.name}
                className={`p-6 shadow-card ${office.primary ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}
              >
                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.16em] ${office.primary ? "text-accent" : "text-accent"}`}
                >
                  {office.primary ? "Main Office" : "Branch Office"}
                </p>
                <h3
                  className={`mt-2 font-display text-xl font-bold ${office.primary ? "text-primary-foreground" : "text-primary"}`}
                >
                  {office.name}
                </h3>
                <div
                  className={`mt-5 space-y-3 text-sm font-semibold ${office.primary ? "text-primary-foreground/76" : "text-foreground"}`}
                >
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {office.address}, {office.city}
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {office.phone}
                  </p>
                  <p className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {office.email}
                  </p>
                  <p className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {office.hours}
                  </p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="flex min-h-[200px] items-center justify-center border border-border bg-card shadow-card">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-accent" />
                <p className="mt-3 font-bold text-primary">
                  Congress Ave, Austin TX
                </p>
                <p className="text-sm text-muted-foreground">
                  Downtown Austin • Suite 500
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="bg-secondary p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
                Follow Us
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground">
                Stay up to date with Austin market news and new listings.
              </p>
              <div className="mt-4 flex gap-3">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Twitter, label: "Twitter / X" },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="flex h-10 w-10 items-center justify-center border border-border bg-card text-muted-foreground"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Agent Contact */}
      <section className="bg-secondary px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Direct Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Reach an agent directly
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Prefer to skip the form? Contact one of our specialists directly
              based on your needs.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-card p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-body text-lg font-extrabold text-primary">
                  {agent.name}
                </h3>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
                  {agent.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  {agent.specialty}
                </p>
                <div className="mt-4 space-y-2 text-sm font-semibold text-foreground">
                  <p className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    {agent.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    {agent.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              FAQ
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl grid gap-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="border border-border bg-card p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-body text-base font-extrabold text-primary">
                      {q}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Phone className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Prefer to call?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/76">
            Our main line is staffed Monday–Friday 9am–6pm and Saturday
            10am–4pm.
          </p>
          <p className="mt-6 font-display text-4xl font-bold text-accent">
            +1 (512) 555-7890
          </p>
          <p className="mt-2 text-sm text-primary-foreground/56">
            1234 Congress Ave, Suite 500, Austin, TX 78701
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
