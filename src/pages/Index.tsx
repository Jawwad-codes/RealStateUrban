import {
  ArrowRight,
  Award,
  BarChart3,
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/urbannest-hero.jpg";
import teamImage from "@/assets/urbannest-team.jpg";
import livingImage from "@/assets/urbannest-living.jpg";
import kitchenImage from "@/assets/urbannest-kitchen.jpg";
import condoImage from "@/assets/urbannest-condo.jpg";
import townhouseImage from "@/assets/urbannest-townhouse.jpg";

const navItems = ["Listings", "About", "Insights", "Contact"];

const listings = [
  {
    image: heroImage,
    price: "$1,325,000",
    address: "4108 Balcones Dr, Austin, TX",
    details: "5 Beds • 4 Baths • 3,620 sqft",
    badge: "West Austin",
  },
  {
    image: livingImage,
    price: "$725,000",
    address: "2401 Bluebonnet Ln, Austin, TX",
    details: "4 Beds • 3 Baths • 2,400 sqft",
    badge: "South Austin",
  },
  {
    image: kitchenImage,
    price: "$589,000",
    address: "118 Cedar Elm Rd, Round Rock, TX",
    details: "3 Beds • 2 Baths • 2,050 sqft",
    badge: "Round Rock",
  },
  {
    image: condoImage,
    price: "$465,000",
    address: "902 E 5th St Unit 304, Austin, TX",
    details: "2 Beds • 2 Baths • 1,120 sqft",
    badge: "East Austin",
  },
  {
    image: townhouseImage,
    price: "$638,000",
    address: "3305 Brushy Creek Loop, Cedar Park, TX",
    details: "3 Beds • 3 Baths • 2,180 sqft",
    badge: "Cedar Park",
  },
  {
    image: livingImage,
    price: "$352,000",
    address: "7601 Rialto Blvd Apt 218, Austin, TX",
    details: "2 Beds • 2 Baths • 1,030 sqft",
    badge: "Oak Hill",
  },
];

const features = [
  { icon: Award, title: "10+ Years in Austin Market" },
  { icon: Home, title: "1,000+ Properties Sold" },
  { icon: ShieldCheck, title: "Licensed Real Estate Agents" },
  { icon: BarChart3, title: "Transparent & Data-Driven Pricing" },
];

const testimonials = [
  {
    quote: "UrbanNest helped us find the perfect home in South Austin. Smooth process from start to finish.",
    name: "Michael Turner",
    place: "Austin, TX",
  },
  {
    quote: "Professional team and great communication. Highly recommended!",
    name: "Jessica Miller",
    place: "Round Rock, TX",
  },
  {
    quote: "Best real estate experience I’ve had in Texas.",
    name: "David Clark",
    place: "Cedar Park, TX",
  },
];

const propertyTypes = [
  { icon: Home, label: "Single-Family Homes" },
  { icon: Building2, label: "Apartments & Condos" },
  { icon: BedDouble, label: "Townhouses" },
  { icon: TrendingUp, label: "Commercial Spaces" },
];

const insights = [
  ["Median Home Price in Austin", "$650,000"],
  ["Average Days on Market", "32 days"],
  ["Yearly Growth", "+6.5%"],
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="absolute left-0 right-0 top-0 z-30 border-b border-primary-foreground/15">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-primary-foreground" aria-label="UrbanNest Realty home">
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground shadow-card">
              <Home className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-xl font-bold leading-none">UrbanNest</span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/72">Realty</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-primary-foreground/82 transition-colors hover:text-primary-foreground">
                {item}
              </a>
            ))}
          </div>
          <Button variant="glass" size="sm" className="hidden sm:inline-flex">Schedule a Tour</Button>
        </nav>
      </header>

      <section id="top" className="relative min-h-[780px] overflow-hidden md:min-h-[860px]">
        <img src={heroImage} alt="Modern luxury house in Austin, Texas at sunset" className="absolute inset-0 h-full w-full object-cover" width={1600} height={960} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,hsl(var(--accent)/0.18),transparent_34%)]" />
        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-end px-5 pb-8 pt-32 md:min-h-[860px] lg:px-8 lg:pb-14">
          <div className="max-w-3xl luxury-reveal">
            <p className="mb-5 inline-flex items-center gap-2 border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent" /> Find Your Perfect Space to Live and Invest
            </p>
            <h1 className="text-balance font-display text-5xl font-bold leading-[0.95] text-primary-foreground md:text-7xl lg:text-8xl">
              Find Your Dream Home in Austin
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/82 md:text-xl">
              Explore premium homes, apartments, and investment properties across Austin, Texas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg">Browse Listings <ArrowRight className="h-4 w-4" /></Button>
              <Button variant="glass" size="lg">Schedule a Tour</Button>
            </div>
          </div>

          <form className="gold-sheen mt-12 grid gap-3 bg-card/95 p-4 shadow-premium backdrop-blur-md md:grid-cols-[1.2fr_1fr_1fr_auto]" aria-label="Property search">
            {[
              ["Location", "Austin, TX"],
              ["Price Range", "$500K - $1.5M"],
              ["Property Type", "Single-Family"],
            ].map(([label, value]) => (
              <label key={label} className="border border-border bg-background px-4 py-3">
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
                <select className="mt-1 w-full bg-transparent text-sm font-bold text-foreground outline-none" defaultValue={value}>
                  <option>{value}</option>
                  <option>Round Rock, TX</option>
                  <option>Cedar Park, TX</option>
                </select>
              </label>
            ))}
            <Button variant="navy" size="lg" className="h-full min-h-14"><Search className="h-4 w-4" /> Search</Button>
          </form>
        </div>
      </section>

      <section id="listings" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Featured Listings</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Austin homes worth seeing</h2>
            </div>
            <p className="max-w-xl text-muted-foreground">Curated properties across Austin, Round Rock, and Cedar Park with realistic pricing and neighborhood context.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <article key={listing.address} className="group overflow-hidden bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={listing.image} alt={`${listing.address} property`} className="h-full w-full object-cover image-zoom" loading="lazy" width={1000} height={760} />
                  <span className="absolute left-4 top-4 bg-card px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-primary shadow-card">{listing.badge}</span>
                </div>
                <div className="p-5">
                  <p className="text-2xl font-extrabold text-primary">{listing.price}</p>
                  <p className="mt-2 flex items-start gap-2 font-semibold text-foreground"><MapPin className="mt-1 h-4 w-4 text-accent" />{listing.address}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground"><BedDouble className="h-4 w-4" /><Bath className="h-4 w-4" />{listing.details}</p>
                  <Button variant="navy" className="mt-5 w-full">View Details</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="border border-primary-foreground/14 bg-primary-foreground/6 p-6 transition-colors hover:bg-primary-foreground/10">
              <Icon className="h-8 w-8 text-accent" />
              <h3 className="mt-5 font-body text-xl font-extrabold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img src={teamImage} alt="UrbanNest Realty agents in a modern Austin office" className="aspect-[4/3] w-full object-cover shadow-premium" loading="lazy" width={1200} height={900} />
            <div className="absolute -bottom-5 right-5 bg-accent px-6 py-4 text-accent-foreground shadow-premium">
              <p className="text-3xl font-extrabold">2013</p>
              <p className="text-sm font-bold uppercase tracking-[0.16em]">Serving Austin</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">About Us</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Local guidance with modern market intelligence</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              UrbanNest Realty has been serving the Austin community since 2013, helping families, professionals, and investors find the right property. Our team combines local expertise with modern technology to deliver seamless buying and selling experiences.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Neighborhood-level pricing", "Tour coordination", "Offer strategy", "Investor analysis"].map((item) => (
                <p key={item} className="flex items-center gap-2 font-bold text-primary"><CheckCircle2 className="h-5 w-5 text-accent" />{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">What clients say after closing</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <figure key={review.name} className="bg-card p-7 shadow-card">
                <div className="mb-5 flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="text-lg font-semibold leading-8 text-foreground">“{review.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 font-bold text-primary">— {review.name}, <span className="text-muted-foreground">{review.place}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Property Types</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Spaces for every Austin move</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {propertyTypes.map(({ icon: Icon, label }) => (
                <div key={label} className="group flex items-center gap-4 border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                  <span className="flex h-12 w-12 items-center justify-center bg-gold-soft text-accent"><Icon className="h-6 w-6" /></span>
                  <h3 className="font-body text-xl font-extrabold text-primary">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="bg-navy-premium px-5 py-20 text-primary-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Market Insights</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Austin data that keeps your search grounded</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {insights.map(([label, value]) => (
                <div key={label} className="border border-primary-foreground/15 bg-primary-foreground/8 p-6">
                  <p className="text-3xl font-extrabold text-accent">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-primary-foreground/72">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-premium md:px-12">
          <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to Find Your Next Home?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/76">Talk with an Austin advisor about neighborhoods, pricing, tours, and timing.</p>
          <Button variant="hero" size="lg" className="mt-8">Get a Free Consultation</Button>
        </div>
      </section>

      <section id="contact" className="bg-secondary px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">Visit our Congress Ave office</h2>
            <div className="mt-8 space-y-4 text-lg font-semibold text-foreground">
              <p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 text-accent" />1234 Congress Ave, Suite 500, Austin, TX 78701</p>
              <p className="flex gap-3"><Phone className="mt-1 h-5 w-5 text-accent" />+1 (512) 555-7890</p>
              <p className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-accent" />info@urbannestrealty.com</p>
            </div>
            <div className="mt-8 flex min-h-[240px] items-center justify-center border border-border bg-card shadow-card">
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-accent" />
                <p className="mt-3 font-bold text-primary">Google Maps Placeholder</p>
                <p className="text-sm text-muted-foreground">Downtown Austin • Congress Ave</p>
              </div>
            </div>
          </div>
          <form className="bg-card p-6 shadow-premium md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="First name" aria-label="First name" />
              <input className="border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Last name" aria-label="Last name" />
            </div>
            <input className="mt-4 w-full border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Email address" type="email" aria-label="Email address" />
            <input className="mt-4 w-full border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Phone number" type="tel" aria-label="Phone number" />
            <select className="mt-4 w-full border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" aria-label="Interest">
              <option>Buying in Austin</option>
              <option>Selling a property</option>
              <option>Investment property</option>
              <option>Relocating to Texas</option>
            </select>
            <textarea className="mt-4 min-h-32 w-full border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us what you’re looking for" aria-label="Message" />
            <Button variant="navy" size="lg" className="mt-4 w-full">Send Message</Button>
          </form>
        </div>
      </section>

      <footer className="bg-primary px-5 py-10 text-primary-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">UrbanNest Realty</p>
            <p className="mt-1 text-sm text-primary-foreground/68">© 2026 UrbanNest Realty. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-primary-foreground/76">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary-foreground">{item}</a>)}
          </div>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <a key={index} href="#top" className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10" aria-label="Social media link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
