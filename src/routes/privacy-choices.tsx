import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/privacy-choices")({
  head: () => ({
    meta: [
      { title: "Your Privacy Choices — Ride4Movies" },
      {
        name: "description",
        content:
          "Manage your privacy preferences, cookie choices, and data sharing options for Ride4Movies.",
      },
      { property: "og:title", content: "Your Privacy Choices — Ride4Movies" },
      {
        property: "og:description",
        content:
          "Control how Ride4Movies uses cookies, analytics, and shared information.",
      },
    ],
  }),
  component: PrivacyChoicesPage,
});

type Prefs = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  sale: boolean;
};

const DEFAULT_PREFS: Prefs = {
  essential: true,
  analytics: true,
  marketing: false,
  sale: false,
};

const STORAGE_KEY = "r4m-privacy-prefs";

function PrivacyChoicesPage() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  const save = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
      setSaved(true);
      setTimeout(() => setSaved(false), 2400);
    } catch {
      /* ignore */
    }
  };

  return (
    <main className="pt-40 pb-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-[10px] uppercase tracking-luxury text-stone">Privacy</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-ink tracking-tightest">
          Your Privacy Choices
        </h1>
        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft font-light max-w-2xl">
          We respect your right to control how information about your visit is used. Adjust
          the options below and your preferences will be saved on this device. To exercise
          rights under the CCPA, GDPR, or other applicable regulations, contact us directly.
        </p>

        <div className="mt-16 border-t border-hairline">
          {(
            [
              {
                key: "essential",
                title: "Strictly necessary",
                copy: "Required for the site to function — reservations, security, and form submissions. Cannot be disabled.",
                locked: true,
              },
              {
                key: "analytics",
                title: "Analytics",
                copy: "Anonymous usage measurement so we can understand which vehicles and pages guests find most useful.",
              },
              {
                key: "marketing",
                title: "Marketing & personalization",
                copy: "Tailor content and outreach to your interests based on how you interact with our site.",
              },
              {
                key: "sale",
                title: "Do not sell or share my personal information",
                copy: "Opt out of any sharing of personal information with third parties for cross-context behavioral advertising.",
              },
            ] as const
          ).map((row) => {
            const enabled = prefs[row.key as keyof Prefs];
            const isOptOut = row.key === "sale";
            const active = isOptOut ? enabled : enabled;
            return (
              <div
                key={row.key}
                className="border-b border-hairline py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
              >
                <div className="max-w-xl">
                  <h3 className="font-display text-xl text-ink tracking-tightest">
                    {row.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone font-light leading-relaxed">
                    {row.copy}
                  </p>
                </div>
                <button
                  type="button"
                  disabled={"locked" in row && row.locked}
                  onClick={() =>
                    setPrefs((p) => ({ ...p, [row.key]: !p[row.key as keyof Prefs] }))
                  }
                  aria-pressed={active}
                  className={`relative h-7 w-14 shrink-0 border transition-colors duration-300 ${
                    active ? "bg-ink border-ink" : "bg-transparent border-stone/40"
                  } ${"locked" in row && row.locked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 bg-ivory transition-all duration-300 ${
                      active ? "left-[calc(100%-1.375rem)]" : "left-1"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button
            type="button"
            onClick={save}
            className="px-8 py-4 bg-ink text-ivory text-[11px] uppercase tracking-luxury hover:bg-charcoal transition-colors"
          >
            Save preferences
          </button>
          {saved && (
            <span className="text-sm text-stone font-light">
              Your preferences have been saved.
            </span>
          )}
        </div>

        <p className="mt-16 text-xs text-stone font-light leading-relaxed max-w-2xl">
          For requests to access, correct, or delete personal information we hold about you,
          email{" "}
          <a href="mailto:Erez88@yahoo.com" className="underline underline-offset-4">
            Erez88@yahoo.com
          </a>
          . We will respond within the timeframes required by applicable law.
        </p>
      </div>
    </main>
  );
}
