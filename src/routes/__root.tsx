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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-[11px] tracking-luxury uppercase text-gold">Error 404</div>
        <h1 className="mt-6 font-display text-6xl text-ivory">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This page has driven off the lot. Let's get you back to the showroom.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center text-[11px] uppercase tracking-luxury border border-gold/60 text-gold px-6 py-3 hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ivory">Something went off-script.</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="text-[11px] uppercase tracking-luxury border border-gold/60 text-gold px-5 py-3 hover:bg-gold hover:text-primary-foreground transition-all"
          >
            Try Again
          </button>
          <a href="/" className="text-[11px] uppercase tracking-luxury border border-border px-5 py-3 hover:border-gold hover:text-gold transition-all">Home</a>
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
      { title: "Ride4Movies — Hollywood's Premier Picture Car Collection" },
      { name: "description", content: "Rent vintage, exotic and luxury picture cars, motorcycles, Vespas, boats and jet skis in Los Angeles. Serving Hollywood film productions, weddings, music videos and editorials for 25+ years." },
      { name: "keywords", content: "picture car rental Los Angeles, vintage car rental Hollywood, exotic car rental Beverly Hills, classic Mustang rental, Rolls Royce rental LA, Tesla Cybertruck rental, Vespa rental Los Angeles, boat rental Hollywood, Sea-Doo jet ski rental, Chris-Craft rental, Duffy boat rental, film production cars, wedding car rental LA, music video car rental" },
      { name: "author", content: "Ride4Movies" },
      { property: "og:site_name", content: "Ride4Movies" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Ride4Movies — Hollywood's Premier Picture Car Collection" },
      { property: "og:description", content: "Luxury, vintage and exotic picture cars for film, photography, weddings and luxury events." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0c0c0c" },
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
          description: "Luxury, vintage and exotic picture cars for film productions, photography, weddings and luxury events.",
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
    <html lang="en" className="dark">
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
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
