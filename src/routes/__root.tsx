import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AmbientParticles } from "@/components/AmbientParticles";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <div className="section-num">404</div>
        <h1 className="mt-6 font-display text-6xl md:text-7xl text-ink tracking-tightest">
          Off the map.
        </h1>
        <p className="mt-6 text-sm text-stone leading-relaxed">
          The page you're looking for has driven off the lot. Let's return you to the collection.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center text-[11px] uppercase tracking-luxury text-ink link-underline"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl md:text-5xl text-ink tracking-tightest">
          Something went off-script.
        </h1>
        <p className="mt-4 text-sm text-stone">{error.message}</p>
        <div className="mt-10 flex gap-6 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="text-[11px] uppercase tracking-luxury text-ink link-underline"
          >
            Try again
          </button>
          <a href="/" className="text-[11px] uppercase tracking-luxury text-stone link-underline">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ride4Movies — A Curated Collection of Picture Cars" },
      { name: "description", content: "A quietly curated atelier of vintage, classic and modern picture cars for film, editorial, weddings and luxury events. West Hollywood, California." },
      { name: "author", content: "Ride4Movies" },
      { name: "theme-color", content: "#F5EFE4" },
      { property: "og:site_name", content: "Ride4Movies" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ride4Movies — A Curated Collection of Picture Cars" },
      { property: "og:description", content: "Vintage, classic and modern picture cars for film, editorial, weddings and luxury events." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ride4Movies — A Curated Collection of Picture Cars" },
      { name: "twitter:description", content: "Vintage, classic and modern picture cars for film, editorial, weddings and luxury events." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRental",
          name: "Ride4Movies",
          description: "A curated atelier of picture cars for film, editorial, weddings and luxury events.",
          telephone: "+1-310-877-6400",
          email: "Erez88@yahoo.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "615 N West Knoll Dr",
            addressLocality: "West Hollywood",
            addressRegion: "CA",
            addressCountry: "US",
          },
          areaServed: ["Beverly Hills", "Hollywood", "Los Angeles", "Santa Monica", "West Hollywood"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen bg-ivory">
        <Outlet />
      </main>
      <SiteFooter />
      <AmbientParticles />
    </QueryClientProvider>
  );
}
