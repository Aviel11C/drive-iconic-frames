import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function VehicleGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (i: number) => setActive((i + count) % count);

  return (
    <div>
      <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-linen grain group">
        <img
          key={images[active]}
          src={images[active]}
          alt={alt}
          width={1600}
          height={1200}
          className="h-full w-full object-cover animate-in fade-in duration-1000"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous photo"
              className="absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-ivory/85 backdrop-blur-md text-ink hover:bg-ivory transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next photo"
              className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-ivory/85 backdrop-blur-md text-ink hover:bg-ivory transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.2} />
            </button>
            <div className="absolute bottom-5 right-5 section-num bg-ivory/85 backdrop-blur-sm px-2 py-1">
              {String(active + 1).padStart(2, "0")} — {String(count).padStart(2, "0")}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="mt-5 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
              className={`relative shrink-0 snap-start w-24 md:w-28 aspect-[4/3] overflow-hidden transition-all duration-500 ${
                i === active
                  ? "opacity-100 ring-1 ring-ink"
                  : "opacity-55 hover:opacity-100"
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
