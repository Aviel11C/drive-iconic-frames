import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/homepage-hero.jpg.asset.json";
const heroImg = heroAsset.url;
import aboutImg from "@/assets/about.jpg";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionLabel } from "@/components/SectionLabel";
import { Film, Camera, Music, Heart, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Ride4Movies — Hollywood's Premier Picture Car Collection" },
      { name: "description", content: "Rare vintage, exotic, and luxury picture cars for film productions, weddings, editorials and celebrity events. 25+ years serving Hollywood." },
      { property: "og:title", content: "Ride4Movies — Hollywood's Premier Picture Car Collection" },
      { property: "og:description", content: "Rare vintage, exotic, and luxury picture cars for film productions, weddings, editorials and celebrity events." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  { icon: Film, title: "Film & Television" },
  { icon: Camera, title: "Editorial Campaigns" },
  { icon: Music, title: "Music Videos" },
  { icon: Heart, title: "Wedding Photography" },
  { icon: Users, title: "Celebrity Transport" },
  { icon: Sparkles, title: "Luxury Events" },
];

const testimonials = [
  {
    quote: "Working with Ride4Movies elevated our entire production. The Corniche on a Beverly Hills boulevard at golden hour — flawless. Their crew handled everything with the discretion the talent required.",
    author: "Marcus Vale",
    role: "Producer, Independent Feature",
  },
  {
    quote: "Erez and his team are the reason our editorial covers feel cinematic. The cars arrive immaculate, the team disappears on set, and the result is always magazine-ready.",
    author: "Lina Castellanos",
    role: "Creative Director",
  },
  {
    quote: "I've been booking picture cars for fifteen years. Ride4Movies is the only call I make in LA. Period.",
    author: "Jordan Reyes",
    role: "Wedding & Editorial Photographer",
  },
];

function Home() {
  const featured = vehicles.filter((v) => v.image).slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden film-grain">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Vintage Rolls-Royce driving through Beverly Hills at golden hour"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
          <div className="absolute inset-0 vignette" />
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-[1480px] w-full px-6 md:px-10">
            <div className="max-w-3xl reveal-up">
              <div className="text-[11px] tracking-luxury uppercase text-gold mb-8">
                Est. Hollywood · West Hollywood, CA
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-ivory">
                Hollywood's Premier
                <br />
                <em className="gradient-gold-text not-italic">Picture Car</em> Collection
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed font-light">
                Rare vintage, exotic, and luxury automobiles for film productions, weddings, editorials, and celebrity events.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  to="/collection"
                  className="group inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-luxury hover:shadow-gold-glow transition-all duration-700"
                >
                  View Collection
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-ivory/40 text-ivory px-8 py-4 text-[11px] uppercase tracking-luxury hover:border-gold hover:text-gold transition-all duration-700"
                >
                  Reserve a Vehicle
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-luxury uppercase text-foreground/60 reveal-fade">
          Scroll to explore
        </div>
      </section>

      {/* ABOUT preview */}
      <section className="relative py-32 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px] grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden film-grain">
            <img src={aboutImg} alt="Vintage car interior detail" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div>
            <SectionLabel>Our Heritage</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ivory">
              Over 25 years quietly shaping Hollywood's most enduring imagery.
            </h2>
            <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed font-light">
              <p>
                Ride4Movies is a family-owned atelier of rare automobiles, built on a quarter century of trust within the entertainment industry. Our cars have appeared in feature films, magazine covers, music videos, and the private moments of celebrated clientele who value discretion as much as design.
              </p>
              <p>
                Every vehicle in our care is meticulously preserved and personally delivered. We work white glove — from set call to final wrap — ensuring our cars arrive ready for camera and our clients are met with the kind of service reserved for the few.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxury text-gold hover:gap-5 transition-all duration-500"
            >
              Read our story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTION preview */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 bg-card/30">
        <div className="mx-auto max-w-[1480px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel>The Collection</SectionLabel>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-ivory">Featured Vehicles</h2>
            </div>
            <Link to="/collection" className="text-[11px] uppercase tracking-luxury text-gold hover:gap-5 inline-flex items-center gap-3 transition-all">
              View all {vehicles.length} vehicles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>

          <p className="mt-14 text-center text-xs text-muted-foreground italic max-w-2xl mx-auto">
            Select vehicles in our collection are intended for production and editorial use only — not available for private recreational rentals. All bookings are reservation based.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel align="center">What We Provide</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-ivory">Cinematic Service</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed font-light">
              From principal photography to private celebrations, our cars are quietly engineered into the moments that matter.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40">
            {services.map((s) => (
              <div key={s.title} className="group bg-background p-10 md:p-12 hover-luxury hover:bg-card cursor-default">
                <s.icon className="h-7 w-7 text-gold/80 group-hover:text-gold transition-colors duration-500" strokeWidth={1} />
                <div className="mt-8 font-display text-xl md:text-2xl text-ivory">{s.title}</div>
                <div className="mt-4 h-px w-8 bg-gold/40 group-hover:w-16 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-32 md:py-40 px-6 md:px-10 bg-card/30 film-grain">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Why Ride4Movies</SectionLabel>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
                Trusted by the names you don't see on the call sheet.
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                ["25+ Years", "A trusted Hollywood institution since the late 1990s."],
                ["Family Owned", "Personal stewardship of every car and every client."],
                ["Rare Inventory", "Vehicles you simply cannot source elsewhere in Los Angeles."],
                ["White Glove Service", "Delivery, on-set support, and discretion as standard."],
                ["Production Experience", "We speak the language of producers, DPs and stylists."],
                ["Reservation Based", "Bookings handled personally — never through a portal."],
              ].map(([t, d]) => (
                <div key={t}>
                  <div className="font-display text-2xl text-gold">{t}</div>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 md:py-40 px-6 md:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel align="center">Industry Voices</SectionLabel>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-ivory">Spoken on Set</h2>
          </div>
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-border/40">
            {testimonials.map((t) => (
              <figure key={t.author} className="bg-background p-10 md:p-12">
                <div className="font-display text-5xl text-gold/40 leading-none">"</div>
                <blockquote className="mt-4 text-foreground/85 leading-relaxed font-light italic font-display text-lg">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/50">
                  <div className="text-sm text-ivory">{t.author}</div>
                  <div className="text-xs tracking-editorial uppercase text-muted-foreground mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 px-6 md:px-10 bg-card/40">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel align="center">Reserve</SectionLabel>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-ivory leading-tight">
            Ready when the camera is.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed font-light">
            Tell us your production date, location, and the look you're chasing. We'll respond personally.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-luxury hover:shadow-gold-glow transition-all duration-700"
          >
            Begin Reservation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
