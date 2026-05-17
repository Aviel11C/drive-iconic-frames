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

const leftNav = nav.slice(0, 2);
const rightNav = nav.slice(2);

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
          ? "bg-background/85 backdrop-blur-xl border-b border-gold/20"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      {/* Mobile bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-3">
        <button aria-label="Menu" className="text-ivory" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Ride4Movies — Hollywood Picture Cars"
            className={`w-auto transition-all duration-700 ${
              scrolled ? "h-20" : "h-24"
            }`}
          />
        </Link>
        <Link
          to="/contact"
          className="text-[10px] uppercase tracking-luxury text-gold border border-gold/50 px-3 py-2"
        >
          Reserve
        </Link>
      </div>

      {/* Desktop centered emblem */}
      <div className="hidden md:block">
        <div
          className={`mx-auto max-w-[1480px] grid grid-cols-[1fr_auto_1fr] items-center gap-8 px-10 transition-all duration-700 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <nav className="flex items-center justify-end gap-10">
            {leftNav.map((n) => (
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

          <Link to="/" className="group flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="Ride4Movies — Hollywood Picture Cars"
              className={`w-auto transition-all duration-700 drop-shadow-[0_0_30px_rgba(212,175,90,0.35)] group-hover:drop-shadow-[0_0_45px_rgba(212,175,90,0.55)] ${
                scrolled ? "h-16" : "h-28 lg:h-32"
              }`}
            />
            {!scrolled && (
              <div className="mt-2 text-[9px] tracking-[0.5em] uppercase text-gold/80 font-display italic">
                Est. Hollywood
              </div>
            )}
          </Link>

          <nav className="flex items-center justify-start gap-10">
            {rightNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] uppercase tracking-luxury text-foreground/80 hover:text-gold transition-colors duration-500"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mx-auto max-w-[1480px] px-10">
          <div className="gold-line opacity-60" />
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-background/95 backdrop-blur-xl">
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
