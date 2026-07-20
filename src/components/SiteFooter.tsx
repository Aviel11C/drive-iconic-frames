import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-charcoal text-linen mt-32">
      <div className="mx-auto max-w-[1520px] px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-4xl text-linen tracking-tightest">
              Ride4Movies
            </Link>
            <p className="mt-8 text-sm text-linen/70 leading-relaxed max-w-sm font-light">
              A quiet atelier of rare automobiles. Trusted by film, editorial and the entertainment industry for over 25 years.
            </p>
            <div className="mt-10 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="h-11 w-11 grid place-items-center border border-linen/25 hover:border-linen transition-colors duration-500"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.2} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-11 w-11 grid place-items-center border border-linen/25 hover:border-linen transition-colors duration-500"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.2} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-luxury text-linen/50 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm text-linen/80 font-light">
              <li>
                <Link to="/collection" className="hover:text-linen transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-linen transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-linen transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-linen transition-colors">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-luxury text-linen/50 mb-6">
              Reservations
            </h4>
            <ul className="space-y-4 text-sm text-linen/80 font-light">
              <li>
                <a href="tel:3108776400" className="font-display text-2xl text-linen hover:text-linen/80 transition-colors">
                  310 · 877 · 6400
                </a>
              </li>
              <li>
                <a href="mailto:Erez88@yahoo.com" className="hover:text-linen transition-colors">
                  Erez88@yahoo.com
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                615 N West Knoll Dr
                <br />
                West Hollywood, California
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-linen/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-linen/50">
          <p>© {new Date().getFullYear()} Ride4Movies — All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/terms" className="hover:text-linen transition-colors tracking-editorial uppercase">
              Terms & Conditions
            </Link>
            <Link to="/privacy-choices" className="hover:text-linen transition-colors tracking-editorial uppercase">
              Your Privacy Choices
            </Link>
          </div>
          <p className="tracking-editorial uppercase">
            Made in Los Angeles · Reservation based
          </p>
        </div>

      </div>
    </footer>
  );
}
