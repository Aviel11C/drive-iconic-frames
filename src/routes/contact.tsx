import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SectionLabel } from "@/components/SectionLabel";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";

const searchSchema = z.object({
  vehicle: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  component: Contact,
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Reserve a Vehicle — Contact Ride4Movies | West Hollywood, CA" },
      { name: "description", content: "Reserve a luxury or vintage picture car. Call 310-877-6400 or email Erez88@yahoo.com. Located at 615 N West Knoll Dr, West Hollywood, California." },
      { property: "og:title", content: "Reserve a Vehicle — Ride4Movies" },
      { property: "og:description", content: "Personal reservations for film, editorial and luxury events. Located in West Hollywood." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  type: z.string().max(80).optional(),
  date: z.string().max(40).optional(),
  vehicle: z.string().max(160).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

function Contact() {
  const { vehicle } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // In production this would post to a server function / email service.
  }

  const fieldClass = "w-full bg-transparent border-b border-border/70 focus:border-gold outline-none py-4 text-ivory placeholder:text-muted-foreground/70 transition-colors";

  return (
    <div className="pt-32">
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-[1480px] text-center">
          <SectionLabel align="center">Reservations</SectionLabel>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-ivory leading-tight">
            A personal <em className="gradient-gold-text not-italic">conversation.</em>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-foreground/75 leading-relaxed font-light">
            Tell us about your production, event, or shoot. We'll respond personally — typically within the same day.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1480px] grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-gold/40 p-12 text-center">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-gold/15 border border-gold">
                  <Check className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-ivory">Inquiry received.</h3>
                <p className="mt-4 text-foreground/75 max-w-md mx-auto">
                  Thank you. Erez or a member of our team will be in touch personally within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-1">
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Name</label>
                    <input name="name" required className={fieldClass} placeholder="Your full name" />
                    {errors.name && <p className="text-xs text-destructive mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Email</label>
                    <input name="email" type="email" required className={fieldClass} placeholder="you@studio.com" />
                    {errors.email && <p className="text-xs text-destructive mt-2">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Phone</label>
                    <input name="phone" className={fieldClass} placeholder="Optional" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Project Type</label>
                    <select name="type" className={fieldClass} defaultValue="">
                      <option value="" className="bg-background">Select…</option>
                      {["Film / TV", "Music Video", "Editorial", "Wedding", "Luxury Event", "Other"].map((o) => (
                        <option key={o} value={o} className="bg-background">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Date</label>
                    <input name="date" className={fieldClass} placeholder="Production / event date" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-gold">Vehicle of Interest</label>
                    <input name="vehicle" defaultValue={vehicle ?? ""} className={fieldClass} placeholder="e.g. 1986 Rolls-Royce Corniche" />
                  </div>
                </div>

                <div className="pt-6">
                  <label className="text-[10px] tracking-luxury uppercase text-gold">Tell us about your shoot</label>
                  <textarea name="message" rows={5} required className={`${fieldClass} resize-none`} placeholder="Locations, dates, the look you're chasing…" />
                  {errors.message && <p className="text-xs text-destructive mt-2">{errors.message}</p>}
                </div>

                <button type="submit" className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-10 py-5 text-[11px] uppercase tracking-luxury hover:shadow-gold-glow transition-all duration-700">
                  Send Inquiry <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="border border-border/60 p-8 bg-card/30 hover:border-gold/40 transition-colors duration-700">
              <div className="flex items-start gap-5">
                <div className="h-11 w-11 grid place-items-center border border-gold/40 text-gold shrink-0"><Phone className="h-4 w-4" /></div>
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">Direct Line</div>
                  <a href="tel:3108776400" className="mt-2 block font-display text-2xl text-ivory hover:text-gold transition-colors">310-877-6400</a>
                  <div className="mt-1 text-xs text-muted-foreground">Erez Chaim</div>
                </div>
              </div>
            </div>

            <div className="border border-border/60 p-8 bg-card/30 hover:border-gold/40 transition-colors duration-700">
              <div className="flex items-start gap-5">
                <div className="h-11 w-11 grid place-items-center border border-gold/40 text-gold shrink-0"><Mail className="h-4 w-4" /></div>
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">Email</div>
                  <a href="mailto:Erez88@yahoo.com" className="mt-2 block font-display text-2xl text-ivory hover:text-gold transition-colors break-all">Erez88@yahoo.com</a>
                </div>
              </div>
            </div>

            <div className="border border-border/60 p-8 bg-card/30 hover:border-gold/40 transition-colors duration-700">
              <div className="flex items-start gap-5">
                <div className="h-11 w-11 grid place-items-center border border-gold/40 text-gold shrink-0"><MapPin className="h-4 w-4" /></div>
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground">Atelier</div>
                  <div className="mt-2 font-display text-xl text-ivory leading-tight">615 N West Knoll Dr<br />West Hollywood, California</div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="mx-auto max-w-[1480px] mt-16">
          <div className="relative overflow-hidden border border-border/60 bg-card film-grain">
            <iframe
              title="Ride4Movies — West Hollywood location"
              src="https://www.google.com/maps?q=615+N+West+Knoll+Dr,+West+Hollywood,+CA&output=embed"
              loading="lazy"
              className="w-full h-[480px] grayscale-[40%] contrast-110 brightness-75 sepia-[20%]"
              style={{ filter: "grayscale(0.5) contrast(1.05) brightness(0.85) sepia(0.15)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
