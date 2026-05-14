import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Collection" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Ride4Movies" className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
          <div className="hidden sm:block leading-none">
            <div className="font-display text-xl text-ivory tracking-wide">Ride<span className="text-gold">4</span>Movies</div>
            <div className="text-[10px] tracking-luxury text-muted-foreground uppercase mt-1">Hollywood · Est. Picture Cars</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-luxury text-foreground/80 hover:text-gold transition-colors duration-500"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-[11px] uppercase tracking-luxury border border-gold/60 text-gold px-5 py-3 hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          Reserve
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6 gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-editorial text-foreground/80"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-[11px] uppercase tracking-luxury border border-gold/60 text-gold px-5 py-3 text-center"
            >
              Reserve a Vehicle
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
