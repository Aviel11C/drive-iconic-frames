import { createFileRoute, Link } from "@tanstack/react-router";
import villaImg from "@/assets/editorial/villa.jpg";
import interiorImg from "@/assets/editorial/interior.jpg";
import vineyardImg from "@/assets/editorial/vineyard.jpg";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Ride4Movies" },
      { name: "description", content: "A family-owned atelier of rare picture cars, quietly serving the entertainment industry from West Hollywood for over 25 years." },
      { property: "og:title", content: "About — Ride4Movies" },
      { property: "og:description", content: "Family-owned. Industry trusted. White-glove service for film, editorial and luxury events." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div className="bg-ivory">
      {/* Editorial hero */}
      <section className="px-6 md:px-10 pt-40 md:pt-52 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1520px]">
          <SectionLabel number="I">Our Story</SectionLabel>
          <h1 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] text-ink tracking-tightest max-w-5xl">
            Twenty-five years,
            <br />
            <em className="serif-italic text-stone">quietly.</em>
          </h1>
        </div>
      </section>

      {/* Editorial pull image */}
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div className="relative aspect-[16/9] overflow-hidden bg-linen grain">
            <img
              src={villaImg}
              alt="A classic car parked in the Mediterranean afternoon light"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1520px] grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="font-display text-2xl md:text-3xl text-ink italic leading-[1.4] tracking-tight max-w-2xl">
              Ride4Movies began the way most enduring things in Hollywood do — quietly, through a single conversation and a single car.
            </p>
            <p className="text-ink-soft leading-relaxed font-light">
              For more than two and a half decades our family has been entrusted with the picture cars that appear behind your favorite leading roles, in cover stories you've torn from magazines, and beside the couples whose wedding albums become heirlooms. We have built our reputation slowly and personally — one production, one editorial, one client at a time.
            </p>
            <p className="text-ink-soft leading-relaxed font-light">
              Every car in our collection has been hand selected, restored where appropriate, and maintained to studio standards. They are not rentals. They are characters in their own right — each with a presence the camera recognizes immediately.
            </p>
            <p className="text-ink-soft leading-relaxed font-light">
              We work white glove. That means a single point of contact, vehicles delivered immaculate to set, on-set support throughout the day, and the kind of discretion that has earned us the trust of the names on the marquee. Our service is reservation based, and many of our cars are reserved exclusively for film, television, photography and luxury events.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <div className="relative aspect-[3/4] overflow-hidden bg-linen grain">
              <img
                src={interiorImg}
                alt="Interior of a vintage car in soft light"
                loading="lazy"
                width={1400}
                height={1750}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-hairline pt-10">
              <div>
                <div className="font-display text-5xl md:text-6xl text-ink tracking-tightest">25+</div>
                <div className="mt-3 text-[10px] tracking-luxury uppercase text-stone">
                  Years in Hollywood
                </div>
              </div>
              <div>
                <div className="font-display text-5xl md:text-6xl text-ink tracking-tightest">100%</div>
                <div className="mt-3 text-[10px] tracking-luxury uppercase text-stone">
                  Family owned
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Full bleed editorial */}
      <section className="relative">
        <div className="relative aspect-[16/10] md:aspect-[16/7]">
          <img
            src={vineyardImg}
            alt="A Defender at rest in a vineyard at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ink/25" />
          <div className="absolute inset-0 flex items-end p-6 md:p-16">
            <p className="font-display italic text-linen text-2xl md:text-4xl lg:text-5xl leading-[1.15] max-w-3xl tracking-tightest">
              "Curated. Cinematic. Effortless. Timeless."
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel align="center">Reserve</SectionLabel>
          <h2 className="mt-8 font-display text-4xl md:text-5xl text-ink tracking-tightest">
            Begin a conversation.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors duration-700"
          >
            Contact us
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
          </Link>
        </div>
      </section>
    </div>
  );
}
