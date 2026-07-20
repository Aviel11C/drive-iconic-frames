import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SectionLabel } from "@/components/SectionLabel";
import { Phone, Mail, MapPin, ArrowUpRight, Check } from "lucide-react";
import { vehicles, categories } from "@/data/vehicles";

const searchSchema = z.object({
  vehicle: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  component: Contact,
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Reserve a Vehicle — Ride4Movies" },
      { name: "description", content: "Reserve a vintage or luxury picture car. Call 310-877-6400 or email Erez88@yahoo.com. 615 N West Knoll Dr, West Hollywood." },
      { property: "og:title", content: "Reserve a Vehicle — Ride4Movies" },
      { property: "og:description", content: "Personal reservations for film, editorial and luxury events. West Hollywood, California." },
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
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendError(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues)
        errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json().catch(() => ({ ok: false, error: "Something went wrong." }));
      if (!res.ok || !json.ok) {
        setSendError(json.error || "Could not send inquiry. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSendError("Could not send inquiry. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  const fieldClass =
    "w-full bg-transparent border-b border-hairline focus:border-ink outline-none py-4 text-ink placeholder:text-stone/60 transition-colors";

  return (
    <div className="bg-ivory">
      <section className="px-6 md:px-10 pt-40 md:pt-52 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1520px]">
          <SectionLabel>Reservations</SectionLabel>
          <h1 className="mt-10 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] text-ink tracking-tightest max-w-5xl">
            A personal
            <br />
            <em className="serif-italic text-stone">conversation.</em>
          </h1>
          <p className="mt-10 max-w-md text-stone leading-relaxed font-light">
            Tell us about your production, event, or shoot. We'll respond personally — typically within the same day.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1520px] grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border-t border-hairline pt-14 text-center">
                <div className="mx-auto h-14 w-14 grid place-items-center rounded-full border border-ink">
                  <Check className="h-5 w-5 text-ink" strokeWidth={1.4} />
                </div>
                <h3 className="mt-8 font-display text-4xl text-ink tracking-tightest">
                  Inquiry received.
                </h3>
                <p className="mt-6 text-stone max-w-md mx-auto font-light">
                  Thank you. Erez or a member of our team will be in touch personally within twenty-four hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Name</label>
                    <input name="name" required className={fieldClass} placeholder="Your full name" />
                    {errors.name && <p className="text-xs text-burgundy mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Email</label>
                    <input name="email" type="email" required className={fieldClass} placeholder="you@studio.com" />
                    {errors.email && <p className="text-xs text-burgundy mt-2">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Phone</label>
                    <input name="phone" className={fieldClass} placeholder="Optional" />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Project type</label>
                    <select name="type" className={fieldClass} defaultValue="">
                      <option value="" className="bg-ivory">Select…</option>
                      {["Film / TV", "Music Video", "Editorial", "Wedding", "Luxury Event", "Other"].map((o) => (
                        <option key={o} value={o} className="bg-ivory">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Date</label>
                    <input name="date" className={fieldClass} placeholder="Production / event date" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] tracking-luxury uppercase text-stone">Vehicle of interest</label>
                    <select name="vehicle" defaultValue={vehicle ?? ""} className={fieldClass}>
                      <option value="" className="bg-ivory">Select a vehicle (optional)…</option>
                      <option value="No preference — recommend something" className="bg-ivory">
                        No preference — recommend something
                      </option>
                      {categories.map((cat) => (
                        <optgroup key={cat} label={cat}>
                          {vehicles
                            .filter((v) => v.category === cat)
                            .map((v) => {
                              const label = `${v.year} ${v.name}`;
                              return (
                                <option key={v.slug} value={label} className="bg-ivory">
                                  {label}
                                </option>
                              );
                            })}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-6">
                  <label className="text-[10px] tracking-luxury uppercase text-stone">
                    Tell us about your shoot
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className={`${fieldClass} resize-none`}
                    placeholder="Locations, dates, the look you're chasing…"
                  />
                  {errors.message && <p className="text-xs text-burgundy mt-2">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-10 inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors duration-700"
                >
                  Send inquiry
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-12">
            <div className="border-t border-hairline pt-8">
              <div className="flex items-start gap-5">
                <Phone className="h-4 w-4 text-ink mt-2" strokeWidth={1.4} />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-stone">Direct line</div>
                  <a
                    href="tel:3108776400"
                    className="mt-2 block font-display text-3xl text-ink hover:text-stone transition-colors tracking-tightest"
                  >
                    310 · 877 · 6400
                  </a>
                  <div className="mt-1 text-xs text-stone italic font-display">Erez Chaim</div>
                </div>
              </div>
            </div>

            <div className="border-t border-hairline pt-8">
              <div className="flex items-start gap-5">
                <Mail className="h-4 w-4 text-ink mt-2" strokeWidth={1.4} />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-stone">Email</div>
                  <a
                    href="mailto:Erez88@yahoo.com"
                    className="mt-2 block font-display text-2xl text-ink hover:text-stone transition-colors break-all tracking-tightest"
                  >
                    Erez88@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-hairline pt-8">
              <div className="flex items-start gap-5">
                <MapPin className="h-4 w-4 text-ink mt-2" strokeWidth={1.4} />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-stone">Atelier</div>
                  <div className="mt-2 font-display text-xl text-ink leading-tight tracking-tightest">
                    615 N West Knoll Dr
                    <br />
                    West Hollywood, California
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden aspect-[4/3] bg-linen">
              <iframe
                title="Ride4Movies — West Hollywood location"
                src="https://www.google.com/maps?q=615+N+West+Knoll+Dr,+West+Hollywood,+CA&output=embed"
                loading="lazy"
                className="w-full h-full"
                style={{ filter: "grayscale(0.9) contrast(1.0) brightness(1.02)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
