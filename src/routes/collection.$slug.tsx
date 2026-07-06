import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { vehicles } from "@/data/vehicles";
import { SectionLabel } from "@/components/SectionLabel";
import { VehicleCard } from "@/components/VehicleCard";
import { VehicleGallery } from "@/components/VehicleGallery";
import { ArrowLeft, ArrowUpRight, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const vehicle = vehicles.find((v) => v.slug === params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData, params }) => {
    const v = loaderData?.vehicle;
    if (!v) return {};
    const fullName = `${v.year} ${v.name}`;
    const title = `${fullName} for Rent in Los Angeles — Ride4Movies Picture Cars`;
    const description = `Rent the ${fullName} (${v.category}) for film productions, weddings, music videos and editorial shoots in Los Angeles. Reservation based — call 310-877-6400 or inquire online.`;
    const meta: Array<Record<string, string>> = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/collection/${params.slug}` },
    ];
    if (v.image) {
      meta.push({ property: "og:image", content: v.image });
      meta.push({ name: "twitter:image", content: v.image });
    }
    return {
      meta,
      links: [{ rel: "canonical", href: `/collection/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: fullName,
            category: v.category,
            description,
            image: v.image ? [v.image] : undefined,
            brand: { "@type": "Brand", name: v.name.split(" ")[0] },
            productionDate: String(v.year),
            offers: {
              "@type": "Offer",
              availability:
                v.availability === "Available"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/LimitedAvailability",
              priceCurrency: "USD",
              price: "0",
              priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: "Reservation based — pricing on request" },
              seller: {
                "@type": "AutoRental",
                name: "Ride4Movies",
                telephone: "+1-310-877-6400",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "615 N West Knoll Dr",
                  addressLocality: "West Hollywood",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Collection", item: "/collection" },
              { "@type": "ListItem", position: 3, name: fullName, item: `/collection/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: VehicleDetail,
});

function VehicleDetail() {
  const { vehicle } = Route.useLoaderData();
  const fullName = `${vehicle.year} ${vehicle.name}`;
  const related = vehicles.filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug).slice(0, 3);

  return (
    <div className="pt-28 md:pt-32">
      {/* Hero */}
      <section className="px-6 md:px-10 pt-10 pb-16">
        <div className="mx-auto max-w-[1480px]">
          <Link to="/collection" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Collection
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal film-grain">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={`${fullName} — picture car for rent in Los Angeles`}
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover ken-burns"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center">
                    <div className="text-center">
                      <div className="font-display text-7xl text-gold/60">{vehicle.year}</div>
                      <div className="mt-3 text-[11px] tracking-luxury uppercase text-muted-foreground">Photography forthcoming</div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionLabel>{vehicle.category}</SectionLabel>
              <h1 className="mt-6 font-display text-5xl md:text-6xl text-ivory leading-[1.02]">
                {vehicle.name}
              </h1>
              <div className="mt-3 font-display text-3xl gradient-gold-text">{vehicle.year}</div>

              <div className="mt-10 grid grid-cols-2 gap-px bg-border/50 border border-border/50">
                <Detail label="Year" value={String(vehicle.year)} />
                <Detail label="Category" value={vehicle.category} />
                <Detail label="Availability" value={vehicle.availability} />
                <Detail label="Location" value="West Hollywood, CA" />
              </div>

              <p className="mt-10 text-foreground/80 leading-relaxed font-light">
                The {fullName} is part of the Ride4Movies private collection — meticulously preserved and reserved for film productions, editorial photography, weddings, music videos, and discerning private events across Los Angeles. Personally delivered. White glove on set.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  search={{ vehicle: fullName }}
                  className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 text-[11px] uppercase tracking-luxury hover:shadow-gold-glow transition-all duration-700"
                >
                  Reserve this vehicle <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="tel:3108776400"
                  className="inline-flex items-center gap-2 border border-ivory/30 text-ivory px-6 py-4 text-[11px] uppercase tracking-luxury hover:border-gold hover:text-gold transition-all duration-700"
                >
                  <Phone className="h-3.5 w-3.5" /> 310-877-6400
                </a>
                <a
                  href={`mailto:Erez88@yahoo.com?subject=Reservation%20Inquiry%20—%20${encodeURIComponent(fullName)}`}
                  className="inline-flex items-center gap-2 border border-ivory/30 text-ivory px-6 py-4 text-[11px] uppercase tracking-luxury hover:border-gold hover:text-gold transition-all duration-700"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 md:px-10 py-24 bg-card/30">
          <div className="mx-auto max-w-[1480px]">
            <SectionLabel>Also in {vehicle.category}</SectionLabel>
            <h2 className="mt-6 font-display text-3xl md:text-5xl text-ivory">From the same chapter</h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((v) => <VehicleCard key={v.slug} vehicle={v} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-lg text-ivory">{value}</div>
    </div>
  );
}
