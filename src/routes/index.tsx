import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/homepage-hero.jpg";
import villaImg from "@/assets/editorial/villa.jpg";
import modernElectricImg from "@/assets/editorial/modern-electric.jpg";
import filmsetImg from "@/assets/editorial/filmset.jpg";
import vineyardImg from "@/assets/editorial/vineyard.jpg";
import desertImg from "@/assets/editorial/desert.jpg";
import vintageClassicsImg from "@/assets/editorial/vintage-classics.jpg";
import { vehicles, categories } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowUpRight } from "lucide-react";



export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Ride4Movies — A Curated Collection of Picture Cars" },
      { name: "description", content: "A quietly curated atelier of vintage, classic and modern picture cars for film, editorial, weddings and luxury events. West Hollywood." },
      { property: "og:title", content: "Ride4Movies — A Curated Collection of Picture Cars" },
      { property: "og:description", content: "A quietly curated atelier of vintage, classic and modern picture cars for film, editorial, weddings and luxury events. West Hollywood." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const editorialCollections = [
  { title: "Vintage Classics", subtitle: "American icons of chrome and cinema.", image: vintageClassicsAsset.url, category: "Vintage Classics", flip: true },
  { title: "European Icons", subtitle: "Mercedes, Rolls, and refined continental design.", image: villaImg, category: "Luxury Vehicles" },
  { title: "Modern Electric", subtitle: "Silent torque. Contemporary presence.", image: modernElectricAsset.url, category: "Electric Modern" },
  { title: "On the Water", subtitle: "Chris-Craft, Duffy, Sea-Doo.", image: vineyardImg, category: "Boats & Watercraft" },
];

const studios = ["Netflix", "Universal", "Disney", "Sony", "Warner Bros", "A24", "HBO", "Vogue"];

const process = [
  { n: "01", t: "Browse", d: "Explore the collection at your own pace. Every vehicle is available on request." },
  { n: "02", t: "Reserve", d: "Personally handled by our team. Reply typically within the same day." },
  { n: "03", t: "Create", d: "White-glove delivery, on-set support, and quiet discretion." },
];

const testimonials = [
  {
    quote: "The Corniche on a Beverly Hills boulevard at golden hour — flawless. Their team handled everything with the discretion the talent required.",
    author: "Marcus Vale",
    role: "Producer",
  },
  {
    quote: "Erez and his team are the reason our editorial covers feel cinematic. The cars arrive immaculate, the team disappears on set.",
    author: "Lina Castellanos",
    role: "Creative Director",
  },
  {
    quote: "I've been booking picture cars for fifteen years. Ride4Movies is the only call I make in LA. Period.",
    author: "Jordan Reyes",
    role: "Editorial Photographer",
  },
];

function Home() {
  const featured = vehicles.filter((v) => v.image).slice(0, 6);

  return (
    <div className="bg-ivory">
      {/* HERO */}
      <section data-nav-theme="light" className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="A classic Land Rover Defender in dappled Mediterranean light"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/45" />
          <div className="hero-blur" aria-hidden="true" />
        </div>

        <div className="relative z-10 flex h-full items-end pb-24 md:pb-28">
          <div className="mx-auto max-w-[1520px] w-full px-6 md:px-10">
            <div className="max-w-4xl reveal-up">
              <div className="text-[10px] tracking-luxury uppercase text-linen/85 mb-8">
                Ride4Movies · West Hollywood, California
              </div>
              <h1 className="font-display text-linen text-[44px] sm:text-6xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-tightest">
                Picture cars,
                <br />
                <em className="serif-italic text-linen/95">beautifully curated.</em>
              </h1>
              <p className="mt-8 max-w-md text-linen/85 leading-relaxed font-light text-[15px]">
                A quiet collection of vintage, classic and modern vehicles — reserved for film, editorial, weddings and luxury events.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <Link
                  to="/collection"
                  className="group inline-flex items-center gap-3 bg-ivory text-ink px-8 py-4 text-[11px] uppercase tracking-luxury hover:bg-linen transition-colors duration-700"
                >
                  Browse Collection
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.4} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-linen text-[11px] uppercase tracking-luxury link-underline"
                >
                  Request a vehicle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="px-6 md:px-10 py-32 md:py-44 grain relative">
        <div className="mx-auto max-w-[1200px] text-center">
          <SectionLabel align="center" number="I">Introduction</SectionLabel>
          <h2 className="mt-10 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-ink tracking-tightest">
            A quiet atelier of rare automobiles —
            <br />
            <em className="serif-italic text-stone">where every car is a character.</em>
          </h2>
          <p className="mt-10 max-w-xl mx-auto text-stone leading-relaxed font-light">
            For twenty-five years, Ride4Movies has been the discreet source behind the vehicles that appear in feature films, magazine covers, and the wedding albums of clients who value restraint as much as design.
          </p>
        </div>
      </section>

      {/* EDITORIAL COLLECTIONS */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1520px]">
          <div className="flex items-end justify-between mb-14">
            <div>
              <SectionLabel number="II">The Collections</SectionLabel>
              <h2 className="mt-8 font-display text-4xl md:text-6xl text-ink tracking-tightest max-w-2xl leading-[1.02]">
                Selected chapters.
              </h2>
            </div>
            <Link
              to="/collection"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-luxury text-ink link-underline shrink-0"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {editorialCollections.map((c, i) => (
              <Link
                key={c.title}
                to="/collection"
                className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className={`relative aspect-[4/5] overflow-hidden bg-linen grain ${c.flip ? "flip-h" : ""}`}>
                  <img
                    src={c.image}
                    alt={`${c.title} — Ride4Movies collection`}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className={`h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.05] ${c.flip ? "object-bottom" : ""}`}
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-luxury uppercase text-stone">
                      Chapter {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink tracking-tightest">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone font-light max-w-sm">{c.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink shrink-0 mt-1 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.2}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES — editorial grid */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-bone">
        <div className="mx-auto max-w-[1520px]">
          <div className="flex items-end justify-between mb-16">
            <div>
              <SectionLabel number="III">Featured</SectionLabel>
              <h2 className="mt-8 font-display text-4xl md:text-6xl text-ink tracking-tightest">
                From the archive.
              </h2>
            </div>
            <Link
              to="/collection"
              className="text-[11px] uppercase tracking-luxury text-ink link-underline shrink-0"
            >
              All vehicles
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featured.map((v, i) => (
              <VehicleCard key={v.slug} vehicle={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — editorial split */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[720px]">
            <img
              src={filmsetImg}
              alt="A film set at dawn"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1920}
              height={1200}
            />
          </div>
          <div className="bg-charcoal text-linen px-6 md:px-16 py-24 md:py-32 flex items-center">
            <div className="max-w-lg">
              <div className="text-[10px] tracking-luxury uppercase text-linen/60 mb-8">
                IV · Why Ride4Movies
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-linen">
                Trusted by the names you don't see on the call sheet.
              </h2>
              <p className="mt-10 text-linen/70 leading-relaxed font-light">
                Hollywood productions. Editorial campaigns. Music films. Luxury weddings. Private events. Every car is personally delivered, quietly maintained, and reserved for the moments that ask for something more considered.
              </p>
              <Link
                to="/about"
                className="mt-12 inline-flex items-center gap-3 text-linen text-[11px] uppercase tracking-luxury link-underline"
              >
                Read the story
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1520px]">
          <div className="text-center mb-16">
            <SectionLabel align="center" number="V">Trusted by</SectionLabel>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-14">
            {studios.map((s) => (
              <div
                key={s}
                className="font-display text-2xl md:text-3xl text-stone/80 text-center tracking-tight hover:text-ink transition-colors duration-500"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-bone">
        <div className="mx-auto max-w-[1520px]">
          <div className="max-w-xl mb-20">
            <SectionLabel number="VI">Process</SectionLabel>
            <h2 className="mt-8 font-display text-4xl md:text-6xl text-ink tracking-tightest">
              Three considered steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {process.map((p) => (
              <div key={p.n} className="border-t border-hairline pt-10">
                <div className="section-num">{p.n}</div>
                <h3 className="mt-6 font-display text-3xl md:text-4xl text-ink tracking-tightest">
                  {p.t}
                </h3>
                <p className="mt-5 text-sm text-stone leading-relaxed font-light max-w-xs">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1520px]">
          <div className="mb-16">
            <SectionLabel number="VII">Industry voices</SectionLabel>
          </div>
          <div className="grid md:grid-cols-3 gap-x-14 gap-y-16">
            {testimonials.map((t) => (
              <figure key={t.author}>
                <blockquote className="font-display italic text-2xl md:text-[26px] leading-[1.35] text-ink tracking-tightest">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-hairline">
                  <div className="text-sm text-ink">{t.author}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-stone mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — full-bleed image */}
      <section className="relative overflow-hidden">
        <img
          src={desertImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative px-6 md:px-10 py-32 md:py-48 text-center">
          <div className="mx-auto max-w-2xl">
            <SectionLabel align="center" number="VIII">Reserve</SectionLabel>
            <h2 className="mt-10 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-linen tracking-tightest">
              Ready when
              <br />
              <em className="serif-italic">the camera is.</em>
            </h2>
            <p className="mt-8 text-linen/80 leading-relaxed font-light max-w-md mx-auto">
              Tell us your production date, location, and the look you're chasing. We reply personally.
            </p>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-3 bg-ivory text-ink px-10 py-4 text-[11px] uppercase tracking-luxury hover:bg-linen transition-colors duration-700"
            >
              Begin a conversation
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// silence unused imports if categories not needed elsewhere
void categories;
