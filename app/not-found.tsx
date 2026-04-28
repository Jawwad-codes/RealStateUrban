/** @format */

import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-sm bg-accent text-accent-foreground">
          <Home className="h-10 w-10" />
        </div>
        <h1 className="font-display text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl font-semibold text-muted-foreground">
          Page not found
        </p>
        <p className="mt-2 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
