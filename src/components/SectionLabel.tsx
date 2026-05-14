export function SectionLabel({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
      <span className="h-px w-12 bg-gold/60" />
      <span className="text-[11px] tracking-luxury uppercase text-gold">{children}</span>
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}
