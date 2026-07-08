import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { vehicles, categories, type VehicleCategory } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/collection/")({
  component: Collection,
  head: () => ({
    meta: [
      { title: "The Collection — Ride4Movies" },
      { name: "description", content: "Browse a curated collection of vintage, classic, and modern picture cars for film, editorial, weddings and luxury events in Los Angeles." },
      { property: "og:title", content: "The Collection — Ride4Movies" },
      { property: "og:description", content: "Vintage, classic and modern picture cars for productions and editorial." },
      { property: "og:url", content: "/collection" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
});

function Collection() {
  const [filter, setFilter] = useState<VehicleCategory | "All">("All");
  const list = filter === "All" ? vehicles : vehicles.filter((v) => v.category === filter);

  return (
    <div className="bg-ivory">
      {/* Hero heading */}
      <section className="px-6 md:px-10 pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1520px]">
          <SectionLabel>The Collection</SectionLabel>
          <h1 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl leading-[1] text-ink tracking-tightest max-w-5xl">
            Every car has
            <br />
            <em className="serif-italic text-stone">a story.</em>
          </h1>
          <p className="mt-10 max-w-md text-stone leading-relaxed font-light">
            From the chrome of mid-century motoring to the silent torque of modern electrics, every vehicle in our care has been chosen for the camera.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="px-6 md:px-10 sticky top-[68px] md:top-[104px] z-30 bg-ivory/95 backdrop-blur-xl border-b border-hairline">
        <div className="mx-auto max-w-[1520px] py-5 flex items-center gap-3 md:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`shrink-0 text-[11px] uppercase tracking-luxury pb-1 transition-colors duration-500 border-b ${
                filter === c
                  ? "text-ink border-ink"
                  : "text-stone border-transparent hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto shrink-0 text-[10px] tracking-luxury uppercase text-stone hidden md:block">
            {String(list.length).padStart(2, "0")} vehicles
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-[1520px]">
          {filter === "All" ? (
            <div className="space-y-24 md:space-y-32">
              {categories.map((cat, ci) => {
                const catList = vehicles.filter((v) => v.category === cat);
                if (!catList.length) return null;
                return (
                  <div key={cat}>
                    <div className="flex items-end justify-between mb-12 pb-6 border-b border-hairline">
                      <div>
                        <div className="section-num">{String(ci + 1).padStart(2, "0")}</div>
                        <h2 className="mt-3 font-display text-3xl md:text-5xl text-ink tracking-tightest">
                          {cat}
                        </h2>
                      </div>
                      <div className="text-[10px] tracking-luxury uppercase text-stone">
                        {String(catList.length).padStart(2, "0")} vehicles
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                      {catList.map((v, i) => (
                        <VehicleCard key={v.slug} vehicle={v} index={i} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {list.map((v, i) => (
                <VehicleCard key={v.slug} vehicle={v} index={i} />
              ))}
            </div>
          )}

          <p className="mt-24 text-center text-xs text-stone italic font-display max-w-xl mx-auto">
            Select vehicles are intended for film, photography, weddings and luxury events — not available for private recreational rentals. All bookings are reservation based.
          </p>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors duration-700"
            >
              Reserve a vehicle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
