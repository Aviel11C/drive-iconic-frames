import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export function VehicleGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const count = images.length;
  const go = (i: number) => setActive((i + count) % count);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") go(active - 1);
      if (e.key === "ArrowRight") go(active + 1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, active, count]);

  return (
    <div>
      <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden bg-linen grain group">
        <button
          type="button"
          onClick={() => { setZoomed(false); setLightbox(true); }}
          aria-label="Open photo in full view"
          className="absolute inset-0 h-full w-full cursor-zoom-in"
        >
          <img
            key={images[active]}
            src={images[active]}
            alt={alt}
            width={1600}
            height={1200}
            className="h-full w-full object-contain animate-in fade-in duration-1000 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.02]"
          />
        </button>

        <div className="pointer-events-none absolute top-5 right-5 h-10 w-10 grid place-items-center bg-ivory/85 backdrop-blur-md text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <ZoomIn className="h-4 w-4" strokeWidth={1.2} />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(active - 1); }}
              aria-label="Previous photo"
              className="absolute left-5 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-ivory/85 backdrop-blur-md text-ink hover:bg-ivory transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(active + 1); }}
              aria-label="Next photo"
              className="absolute right-5 top-1/2 -translate-y-1/2 h-12 w-12 grid place-items-center bg-ivory/85 backdrop-blur-md text-ink hover:bg-ivory transition-all duration-500 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.2} />
            </button>
            <div className="pointer-events-none absolute bottom-5 right-5 section-num bg-ivory/85 backdrop-blur-sm px-2 py-1">
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
              className={`relative shrink-0 snap-start w-24 md:w-28 aspect-[4/3] overflow-hidden bg-linen transition-all duration-500 ${
                i === active
                  ? "opacity-100 ring-1 ring-ink"
                  : "opacity-55 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl animate-in fade-in duration-500"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Close viewer"
            className="absolute top-6 right-6 h-12 w-12 grid place-items-center text-ivory hover:bg-ivory/10 transition-colors duration-500 z-10"
          >
            <X className="h-5 w-5" strokeWidth={1.2} />
          </button>

          <div className="absolute top-6 left-6 text-[10px] tracking-luxury uppercase text-ivory/70 z-10">
            {String(active + 1).padStart(2, "0")} — {String(count).padStart(2, "0")}
          </div>

          <div
            className={`absolute inset-0 grid place-items-center p-6 md:p-16 overflow-auto ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            onClick={() => setZoomed((z) => !z)}
          >
            <img
              key={images[active]}
              src={images[active]}
              alt={alt}
              className={`animate-in fade-in duration-700 select-none transition-transform duration-700 ease-out ${
                zoomed
                  ? "max-w-none max-h-none w-auto h-auto scale-[1.6] md:scale-[2]"
                  : "max-w-full max-h-full object-contain"
              }`}
              draggable={false}
            />
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setZoomed(false); go(active - 1); }}
                aria-label="Previous photo"
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-14 w-14 grid place-items-center text-ivory hover:bg-ivory/10 transition-colors duration-500 z-10"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={1.2} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setZoomed(false); go(active + 1); }}
                aria-label="Next photo"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-14 w-14 grid place-items-center text-ivory hover:bg-ivory/10 transition-colors duration-500 z-10"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={1.2} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
