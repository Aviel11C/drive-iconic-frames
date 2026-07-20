const brands = [
  "Netflix",
  "Universal",
  "Disney",
  "Sony",
  "Warner Bros",
  "A24",
  "HBO",
  "Vogue",
  "Paramount",
  "Apple TV+",
  "Amazon Studios",
  "GQ",
];

export function BrandMarquee() {
  const loop = [...brands, ...brands];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-16 md:gap-24 py-4">
        {loop.map((b, i) => (
          <div
            key={`${b}-${i}`}
            className="shrink-0 font-display text-2xl md:text-3xl text-stone/70 tracking-tight hover:text-ink transition-colors duration-500"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}
