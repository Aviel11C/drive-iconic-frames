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
          ? "bg-ivory/90 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      {/* Mobile bar */}
      <div className="md:hidden flex items-center justify-between px-5 py-4">
        <button
          aria-label="Menu"
          className="text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.2} /> : <Menu className="h-5 w-5" strokeWidth={1.2} />}
        </button>
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Ride4Movies"
            className="h-10 w-auto"
          />
        </Link>
        <Link
          to="/contact"
          className="text-[10px] uppercase tracking-luxury text-ink link-underline"
        >
          Reserve
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div
          className={`mx-auto max-w-[1520px] grid grid-cols-[1fr_auto_1fr] items-center gap-10 px-10 transition-all duration-700 ${
            scrolled ? "py-4" : "py-7"
          }`}
        >
          <nav className="flex items-center justify-start gap-10">
            {nav.slice(0, 2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] uppercase tracking-luxury text-ink/80 hover:text-ink transition-colors duration-500 link-underline"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="Ride4Movies — Hollywood Picture Cars"
              className={`w-auto transition-all duration-700 ${
                scrolled ? "h-14" : "h-20"
              }`}
            />
          </Link>

          <nav className="flex items-center justify-end gap-10">
            {nav.slice(2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[11px] uppercase tracking-luxury text-ink/80 hover:text-ink transition-colors duration-500 link-underline"
                activeProps={{ className: "text-ink" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-ivory/98 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-8 gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ink/85"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-[11px] uppercase tracking-luxury bg-ink text-ivory px-5 py-4 text-center"
            >
              Reserve a Vehicle
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
