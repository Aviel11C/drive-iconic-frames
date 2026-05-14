import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — A Family-Owned Picture Car Atelier in Hollywood | Ride4Movies" },
      { name: "description", content: "For over 25 years, Ride4Movies has provided rare and exotic picture cars to the entertainment industry with white-glove service and unwavering discretion." },
      { property: "og:title", content: "About Ride4Movies — 25 Years of Hollywood Picture Cars" },
      { property: "og:description", content: "Family-owned. Industry trusted. White-glove service for film, editorial and luxury events." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden film-grain">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
        <div className="absolute inset-0 vignette" />
        <div className="relative h-full flex items-end pb-20 px-6 md:px-10">
          <div className="mx-auto max-w-[1480px] w-full">
            <SectionLabel>Our Story</SectionLabel>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] max-w-4xl">
              Over 25 Years <em className="gradient-gold-text not-italic">in the Industry.</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-10 py-32">
        <div className="mx-auto max-w-[1480px] grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-7 text-lg text-foreground/85 leading-relaxed font-light">
            <p className="font-display text-2xl md:text-3xl text-ivory italic leading-snug">
              Ride4Movies began the way most enduring things in Hollywood do — quietly, through a single conversation and a single car.
            </p>
            <p>
              For more than two and a half decades our family has been entrusted with the picture cars that appear behind your favorite leading roles, in cover stories you've torn from magazines, and beside the couples whose wedding albums become heirlooms. We have built our reputation slowly and personally — one production, one editorial, one client at a time.
            </p>
            <p>
              Every car in our collection has been hand selected, restored where appropriate, and maintained to studio standards. They are not rentals. They are characters in their own right — each with a presence the camera recognizes immediately.
            </p>
            <p>
              We work white glove. That means a single point of contact, vehicles delivered immaculate to set, on-set support throughout the day, and the kind of discretion that has earned us the trust of the names on the marquee. Our service is reservation based, and many of our cars are reserved exclusively for film, television, photography and luxury events.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden film-grain">
              <img src={aboutImg} alt="Vintage car interior" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="font-display text-5xl text-gold">25+</div>
                <div className="mt-2 text-xs tracking-editorial uppercase text-muted-foreground">Years in Hollywood</div>
              </div>
              <div>
                <div className="font-display text-5xl text-gold">100%</div>
                <div className="mt-2 text-xs tracking-editorial uppercase text-muted-foreground">Family Owned</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 border border-gold text-gold px-10 py-5 text-[11px] uppercase tracking-luxury hover:bg-gold hover:text-primary-foreground transition-all duration-700">
            Begin a Conversation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
