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
  // "light" = section beneath is dark → render logo/text white
  // "dark"  = section beneath is light → render logo/text dark
  const [sectionTheme, setSectionTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Watch sections tagged with data-nav-theme and pick whichever one sits under the header band.
  useEffect(() => {
    const HEADER_BAND = 96; // px — approximate header height we care about

    const compute = () => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
      );
      if (!targets.length) {
        setSectionTheme("dark");
        return;
      }
      // Pick the section whose rect crosses the header band; fall back to last passed.
      let active: HTMLElement | null = null;
      for (const el of targets) {
        const r = el.getBoundingClientRect();
        if (r.top <= HEADER_BAND && r.bottom > HEADER_BAND) {
          active = el;
          break;
        }
      }
      const theme = (active?.dataset.navTheme as "light" | "dark" | undefined) ?? "dark";
      setSectionTheme(theme);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    // Recompute after route content mounts / images load.
    const t = window.setTimeout(compute, 100);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      window.clearTimeout(t);
    };
  }, []);

  // When the header has its ivory backdrop, always use dark logo/text.
  const effectiveTheme: "light" | "dark" = scrolled ? "dark" : sectionTheme;
  const isLight = effectiveTheme === "light";

  // Logo: invert to white when over dark backgrounds.
  const logoFilter = isLight ? "invert(1) brightness(1.6) contrast(1.05)" : "none";
  const textColor = isLight ? "text-linen" : "text-ink";
  const textColorSoft = isLight ? "text-linen/85 hover:text-linen" : "text-ink/80 hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      {/* Mobile bar */}
      <div className="md:hidden grid grid-cols-[5rem_1fr_5rem] items-center justify-items-center px-5 py-4">
        <button
          aria-label="Menu"
          className={`flex items-center justify-center w-full ${textColor}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.2} /> : <Menu className="h-5 w-5" strokeWidth={1.2} />}
        </button>
        <Link to="/" className="flex items-center justify-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Ride4Movies"
            className="h-12 w-auto transition-[filter] duration-500"
            style={{ filter: logoFilter }}
          />
        </Link>
        <Link
          to="/contact"
          className={`text-[10px] uppercase tracking-luxury link-underline transition-colors duration-500 text-center w-full ${textColor}`}
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
                className={`text-[11px] uppercase tracking-luxury transition-colors duration-500 link-underline ${textColorSoft}`}
                activeProps={{ className: isLight ? "text-linen" : "text-ink" }}
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
              className={`w-auto transition-[filter,height] duration-700 ${
                scrolled ? "h-16" : "h-24"
              }`}
              style={{ filter: logoFilter }}
            />
          </Link>

          <nav className="flex items-center justify-end gap-10">
            {nav.slice(2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`text-[11px] uppercase tracking-luxury transition-colors duration-500 link-underline ${textColorSoft}`}
                activeProps={{ className: isLight ? "text-linen" : "text-ink" }}
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
