export function SectionLabel({
  children,
  align = "left",
  number,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  number?: string;
}) {
  return (
    <div
      className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
    >
      {number && (
        <span className="section-num">{number}</span>
      )}
      <span className="h-px w-8 bg-taupe/70" />
      <span className="text-[10px] tracking-luxury uppercase text-stone">
        {children}
      </span>
    </div>
  );
}
