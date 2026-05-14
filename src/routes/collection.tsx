import { createFileRoute } from "@tanstack/react-router";
import { vehicles, categories } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/collection")({
  component: Collection,
  head: () => ({
    meta: [
      { title: "The Collection — Vintage, Exotic & Luxury Picture Cars | Ride4Movies" },
      { name: "description", content: "Browse our curated collection of vintage classics, luxury vehicles, electric modern cars and vespas — available for film, photography, and luxury events in Los Angeles." },
      { property: "og:title", content: "The Collection — Ride4Movies" },
      { property: "og:description", content: "Vintage classics, luxury vehicles, electric modern cars and vespas for productions and editorial." },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
});

function Collection() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-[1480px] text-center">
          <SectionLabel align="center">The Collection</SectionLabel>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[0.95]">
            Every car has <em className="gradient-gold-text not-italic">a story.</em>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-foreground/75 leading-relaxed font-light">
            From the chrome of mid-century motoring to the silent torque of modern electrics, every vehicle in our care has been chosen for the camera.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const list = vehicles.filter((v) => v.category === cat);
        return (
          <section key={cat} className="px-6 md:px-10 py-16">
            <div className="mx-auto max-w-[1480px]">
              <div className="flex items-end justify-between mb-12 border-b border-border/50 pb-6">
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-gold">{String(list.length).padStart(2, "0")} Vehicles</div>
                  <h2 className="mt-3 font-display text-3xl md:text-5xl text-ivory">{cat}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((v) => <VehicleCard key={v.slug} vehicle={v} />)}
              </div>
            </div>
          </section>
        );
      })}

      <p className="mt-12 text-center text-xs text-muted-foreground italic max-w-2xl mx-auto px-6">
        Select vehicles are intended exclusively for film, photography, weddings, and luxury events — not available for private recreational rentals. All bookings are reservation based.
      </p>
    </div>
  );
}
