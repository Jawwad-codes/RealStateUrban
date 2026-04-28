/** @format */

"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const fields = [
  {
    label: "Location",
    name: "location",
    options: [
      "Austin, TX",
      "Round Rock, TX",
      "Cedar Park, TX",
      "Georgetown, TX",
    ],
  },
  {
    label: "Price Range",
    name: "price",
    options: [
      "Any Price",
      "Under $400K",
      "$400K–$600K",
      "$600K–$900K",
      "$900K–$1.5M",
      "$1.5M+",
    ],
  },
  {
    label: "Property Type",
    name: "type",
    options: ["Any Type", "Single-Family", "Condo", "Townhouse", "Luxury"],
  },
];

export default function SearchBar() {
  const router = useRouter();
  const refs = useRef<Record<string, HTMLSelectElement | null>>({});

  function handleSearch(e: React.FormEvent) {
    e.preventDefault(); // prevent any page reload

    const params = new URLSearchParams();
    for (const field of fields) {
      const val = refs.current[field.name]?.value ?? "";
      // only append if user picked something meaningful
      if (val && val !== "Any Price" && val !== "Any Type") {
        params.set(field.name, val);
      }
    }

    const query = params.toString();
    // client-side navigation — no reload
    router.push(query ? `/listings?${query}` : "/listings");
  }

  return (
    <form
      onSubmit={handleSearch}
      className="gold-sheen mt-12 grid gap-3 bg-card/95 p-4 shadow-premium backdrop-blur-md md:grid-cols-[1.2fr_1fr_1fr_auto]"
      aria-label="Property search"
      noValidate
    >
      {fields.map(({ label, name, options }) => (
        <label
          key={name}
          className="border border-border bg-background px-4 py-3"
        >
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
            {label}
          </span>
          <select
            ref={(el) => {
              refs.current[name] = el;
            }}
            className="mt-1 w-full bg-transparent text-sm font-bold text-foreground outline-none cursor-pointer"
            aria-label={label}
            name={name}
          >
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      ))}

      <button
        type="submit"
        className="flex h-full min-h-14 items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Search properties"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </button>
    </form>
  );
}
