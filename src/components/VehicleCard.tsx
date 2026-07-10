import { Link } from "@tanstack/react-router";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index?: number }) {
  return (
    <article className="group">
      <Link
        to="/collection/$slug"
        params={{ slug: vehicle.slug }}
        className="block"
        aria-label={`${vehicle.year} ${vehicle.name} — view details`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-linen grain">
          {vehicle.image ? (
            <img
              src={vehicle.image}
              alt={`${vehicle.year} ${vehicle.name} — ${vehicle.category} picture car for rent in Los Angeles`}
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-contain transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="h-full w-full grid place-items-center">
              <div className="text-center">
                <div className="font-display text-6xl text-taupe">{vehicle.year}</div>
                <div className="mt-3 text-[10px] tracking-luxury uppercase text-stone">
                  Photography forthcoming
                </div>
              </div>
            </div>
          )}
          {typeof index === "number" && (
            <div className="absolute top-4 left-4 section-num bg-ivory/85 backdrop-blur-sm px-2 py-1">
              {String(index + 1).padStart(2, "0")}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] tracking-luxury uppercase text-stone">
              {vehicle.category}
            </div>
            <h3 className="mt-2 font-display text-2xl md:text-[26px] leading-tight text-ink">
              {vehicle.name}
            </h3>
          </div>
          <div className="font-display text-lg text-stone italic pt-1 shrink-0">
            {vehicle.year}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3 text-[10px] tracking-luxury uppercase text-stone">
          <span>{vehicle.availability}</span>
          <span className="h-px w-6 bg-taupe/60" />
          <span className="link-underline text-ink">View</span>
        </div>
      </Link>
    </article>
  );
}
