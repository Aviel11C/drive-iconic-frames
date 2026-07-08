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
    const title = `${fullName} — Ride4Movies`;
    const description = `The ${fullName} (${v.category}) — available on reservation for film productions, weddings, music videos and editorial shoots in Los Angeles.`;
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
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                description: "Reservation based — pricing on request",
              },
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
      ],
    };
  },
  component: VehicleDetail,
});

function VehicleDetail() {
  const { vehicle } = Route.useLoaderData();
  const fullName = `${vehicle.year} ${vehicle.name}`;
  const related = vehicles
    .filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug)
    .slice(0, 3);

  return (
    <div className="bg-ivory pt-32 md:pt-40">
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1520px]">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-stone hover:text-ink transition-colors duration-500"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.4} /> Back to collection
          </Link>

          <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              {vehicle.images && vehicle.images.length > 0 ? (
                <VehicleGallery
                  images={vehicle.images}
                  alt={`${fullName} — picture car for rent in Los Angeles`}
                />
              ) : (
                <div className="relative aspect-[4/5] overflow-hidden bg-linen grain">
                  <div className="h-full w-full grid place-items-center">
                    <div className="text-center">
                      <div className="font-display text-7xl text-taupe">{vehicle.year}</div>
                      <div className="mt-4 text-[10px] tracking-luxury uppercase text-stone">
                        Photography forthcoming
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-40">
              <div className="text-[10px] tracking-luxury uppercase text-stone">
                {vehicle.category}
              </div>
              <h1 className="mt-6 font-display text-5xl md:text-6xl text-ink leading-[1] tracking-tightest">
                {vehicle.name}
              </h1>
              <div className="mt-4 font-display italic text-3xl text-stone">
                {vehicle.year}
              </div>

              <p className="mt-10 text-ink-soft leading-relaxed font-light">
                The {fullName} is part of the Ride4Movies private collection — meticulously preserved and reserved for film productions, editorial photography, weddings, music videos, and discerning private events across Los Angeles. Personally delivered. White glove on set.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 border-t border-hairline pt-10">
                <Detail label="Year" value={String(vehicle.year)} />
                <Detail label="Category" value={vehicle.category} />
                <Detail label="Availability" value={vehicle.availability} />
                <Detail label="Location" value="West Hollywood, CA" />
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  search={{ vehicle: fullName }}
                  className="inline-flex items-center gap-3 bg-ink text-ivory px-8 py-4 text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors duration-700"
                >
                  Reserve this vehicle
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                </Link>
                <a
                  href="tel:3108776400"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-ink link-underline"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.4} /> 310-877-6400
                </a>
                <a
                  href={`mailto:Erez88@yahoo.com?subject=Reservation%20Inquiry%20—%20${encodeURIComponent(fullName)}`}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-stone link-underline"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.4} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 md:px-10 py-24 md:py-32 bg-bone">
          <div className="mx-auto max-w-[1520px]">
            <div className="flex items-end justify-between mb-14 pb-6 border-b border-hairline">
              <div>
                <SectionLabel>Also in {vehicle.category}</SectionLabel>
                <h2 className="mt-8 font-display text-3xl md:text-5xl text-ink tracking-tightest">
                  From the same chapter.
                </h2>
              </div>
              <Link
                to="/collection"
                className="hidden md:inline-flex text-[11px] uppercase tracking-luxury text-ink link-underline"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {related.map((v, i) => (
                <VehicleCard key={v.slug} vehicle={v} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-luxury uppercase text-stone">{label}</div>
      <div className="mt-2 font-display text-lg text-ink">{value}</div>
    </div>
  );
}
