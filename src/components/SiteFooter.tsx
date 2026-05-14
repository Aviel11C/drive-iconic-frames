import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-background mt-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10 py-20">
        <div className="gold-line mb-16 opacity-60" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="" className="h-10 w-auto opacity-90" />
              <span className="font-display text-xl">Ride<span className="text-gold">4</span>Movies</span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Hollywood's premier collection of vintage and exotic picture cars. Trusted by film, fashion, and the entertainment industry for over 25 years.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-gold mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li><Link to="/collection" className="hover:text-gold transition-colors">The Collection</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-gold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> <a href="tel:3108776400" className="hover:text-gold">310-877-6400</a></li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> <a href="mailto:Erez88@yahoo.com" className="hover:text-gold">Erez88@yahoo.com</a></li>
              <li className="pt-2 leading-relaxed">615 N West Knoll Dr<br />West Hollywood, California</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-luxury text-gold mb-6">Follow</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center border border-border hover:border-gold hover:text-gold transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              Serving Beverly Hills, Hollywood, Santa Monica, West Hollywood & all of greater Los Angeles.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ride4Movies. All rights reserved.</p>
          <p className="tracking-editorial uppercase">Crafted in Los Angeles · Reservation based service</p>
        </div>
      </div>
    </footer>
  );
}
