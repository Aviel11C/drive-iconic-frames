import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function VehicleGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (i: number) => setActive((i + count) % count);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal film-grain group">
        <img
          key={images[active]}
          src={images[active]}
          alt={alt}
          width={1600}
          height={1200}
          className="h-full w-full object-cover ken-burns animate-in fade-in duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center bg-background/60 backdrop-blur-md border border-gold/30 text-ivory hover:text-gold hover:border-gold transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center bg-background/60 backdrop-blur-md border border-gold/30 text-ivory hover:text-gold hover:border-gold transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute top-4 right-4 text-[10px] tracking-luxury uppercase px-3 py-1.5 bg-background/70 backdrop-blur-md border border-gold/30 text-gold">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="mt-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Vehicle photos"
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`relative shrink-0 snap-start w-24 md:w-28 aspect-[4/3] overflow-hidden border transition-all duration-500 ${
                i === active
                  ? "border-gold shadow-gold-glow"
                  : "border-border/60 opacity-70 hover:opacity-100 hover:border-gold/50"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
