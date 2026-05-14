import { createFileRoute, Link } from "@tanstack/react-router";
import { Film, Camera, Music, Heart, Users, Sparkles, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Film, Editorial, Wedding & Event Picture Cars | Ride4Movies" },
      { name: "description", content: "White-glove picture car service for film productions, music videos, editorial campaigns, weddings, celebrity transport and luxury events in Los Angeles." },
      { property: "og:title", content: "Services — Ride4Movies" },
      { property: "og:description", content: "White-glove picture car service for film, editorial, weddings and luxury events." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { icon: Film, title: "Film & Television Productions", body: "Studio-grade picture cars delivered camera ready, with on-set support throughout principal photography." },
  { icon: Camera, title: "Editorial Campaigns", body: "Magazine covers, fashion editorials, and brand campaigns — coordinated directly with your creative director." },
  { icon: Music, title: "Music Videos", body: "From hip-hop visuals to high-fashion music films, we provide cars with cinematic presence and proven on-camera credits." },
  { icon: Heart, title: "Wedding Photography", body: "Vintage and luxury cars for editorial wedding portraits — staged, lit and styled for the album of a lifetime." },
  { icon: Users, title: "Celebrity Transportation", body: "Discreet, white-glove transport for talent and high-profile clients across Los Angeles." },
  { icon: Sparkles, title: "Luxury Events", body: "Premieres, galas, brand activations and private events. Our cars arrive as part of the experience." },
];

function Services() {
  return (
    <div className="pt-32">
      <section className="px-6 md:px-10 py-16 md:py-28">
        <div className="mx-auto max-w-[1480px] text-center">
          <SectionLabel align="center">Services</SectionLabel>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-tight">
            Quietly engineered into <em className="gradient-gold-text not-italic">the moment.</em>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-foreground/75 leading-relaxed font-light">
            For 25 years our cars have appeared in productions, editorials and private events across Hollywood — always on time, always on brand.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1480px] grid md:grid-cols-2 gap-px bg-border/40">
          {services.map((s, i) => (
            <article key={s.title} className="group bg-background p-10 md:p-14 hover:bg-card transition-colors duration-700">
              <div className="flex items-start justify-between">
                <s.icon className="h-8 w-8 text-gold" strokeWidth={1} />
                <div className="text-[10px] tracking-luxury text-muted-foreground">{String(i + 1).padStart(2, "0")} / 06</div>
              </div>
              <h3 className="mt-10 font-display text-3xl text-ivory">{s.title}</h3>
              <p className="mt-5 text-foreground/75 leading-relaxed font-light">{s.body}</p>
              <div className="mt-8 h-px w-10 bg-gold/40 group-hover:w-24 transition-all duration-700" />
            </article>
          ))}
        </div>

        <div className="text-center mt-24">
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-luxury hover:shadow-gold-glow transition-all duration-700">
            Inquire About Your Production <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
