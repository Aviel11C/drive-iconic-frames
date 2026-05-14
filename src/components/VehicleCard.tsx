import { Link } from "@tanstack/react-router";
import type { Vehicle } from "@/data/vehicles";
import { ArrowUpRight } from "lucide-react";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group relative overflow-hidden bg-card border border-border/60 hover:border-gold/50 transition-all duration-700">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.year} ${vehicle.name}`}
            loading="lazy"
            width={1280}
            height={896}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-center px-6">
            <div>
              <div className="font-display text-4xl text-gold/70">{vehicle.year}</div>
              <div className="mt-2 text-xs tracking-luxury uppercase text-muted-foreground">Available on request</div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] tracking-luxury uppercase px-3 py-1.5 bg-background/70 backdrop-blur-md border border-gold/40 text-gold">
            {vehicle.availability}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">{vehicle.category}</div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-ivory leading-tight">{vehicle.name}</h3>
          <span className="font-display text-gold text-xl">{vehicle.year}</span>
        </div>

        <Link
          to="/contact"
          search={{ vehicle: `${vehicle.year} ${vehicle.name}` }}
          className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-luxury uppercase text-foreground/85 hover:text-gold transition-colors duration-500 group/link"
        >
          Request Booking
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
