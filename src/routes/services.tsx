import { createFileRoute, Link } from "@tanstack/react-router";
import filmsetImg from "@/assets/editorial/filmset.jpg";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Ride4Movies" },
      { name: "description", content: "White-glove picture car service for film, editorial campaigns, music videos, weddings, celebrity transport and luxury events in Los Angeles." },
      { property: "og:title", content: "Services — Ride4Movies" },
      { property: "og:description", content: "White-glove picture car service for film, editorial, weddings and luxury events." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    title: "Film & Television",
    body: "Studio-grade picture cars delivered camera ready, with on-set support throughout principal photography.",
  },
  {
    title: "Editorial Campaigns",
    body: "Magazine covers, fashion editorials and brand campaigns — coordinated with your creative director.",
  },
  {
    title: "Music Videos",
    body: "Cars with cinematic presence and proven on-camera credits — from hip-hop to high fashion.",
  },
  {
    title: "Wedding Photography",
    body: "Vintage and luxury cars for editorial portraits — staged, lit and styled for the album of a lifetime.",
  },
  {
    title: "Celebrity Transport",
    body: "Discreet, white-glove transport for talent and high-profile clients across Los Angeles.",
  },
  {
    title: "Luxury Events",
    body: "Premieres, galas, brand activations, private events. Our cars arrive as part of the experience.",
  },
];

function Services() {
  return (
    <div className="bg-ivory">
      <section className="px-6 md:px-10 pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1520px]">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] text-ink tracking-tightest max-w-5xl">
            Quietly engineered
            <br />
            <em className="serif-italic text-stone">into the moment.</em>
          </h1>
          <p className="mt-10 max-w-md text-stone leading-relaxed font-light">
            For twenty-five years our cars have appeared in productions, editorials and private events across Hollywood — always on time, always on brand.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div className="relative aspect-[16/8] overflow-hidden bg-linen grain">
            <img
              src={filmsetImg}
              alt="A film set at dawn"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={960}
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1520px]">
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-16">
            {services.map((s, i) => (
              <article key={s.title} className="border-t border-hairline pt-10 group">
                <div className="flex items-start justify-between gap-6">
                  <div className="section-num">
                    {String(i + 1).padStart(2, "0")} — 06
                  </div>
                </div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl text-ink tracking-tightest">
                  {s.title}
                </h3>
                <p className="mt-5 text-ink-soft leading-relaxed font-light max-w-md">
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-24">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors duration-700"
            >
              Inquire about your production
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
