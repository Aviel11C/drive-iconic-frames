import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Ride4Movies" },
      {
        name: "description",
        content:
          "Terms and conditions governing rentals, reservations, and use of Ride4Movies picture vehicles for film, editorial and private events.",
      },
      { property: "og:title", content: "Terms & Conditions — Ride4Movies" },
      {
        property: "og:description",
        content:
          "The terms that govern our reservations, rentals, and productions.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const updated = "January 2026";
  return (
    <main className="pt-40 pb-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-[10px] uppercase tracking-luxury text-stone">Legal</p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-ink tracking-tightest">
          Terms & Conditions
        </h1>
        <p className="mt-6 text-sm text-stone font-light">Last updated · {updated}</p>

        <div className="mt-16 space-y-12 text-[15px] leading-relaxed text-ink-soft font-light">
          <section>
            <h2 className="font-display text-2xl text-ink mb-4">1. Agreement</h2>
            <p>
              These Terms & Conditions govern all reservations, rentals, and productions
              involving vehicles owned or represented by Ride4Movies ("we," "our," or "us").
              By submitting an inquiry or reserving a vehicle you agree to be bound by these
              terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">2. Reservations</h2>
            <p>
              Every reservation is confirmed in writing and secured by a deposit. Rates,
              minimums, and availability are quoted per project and are subject to change
              until a booking agreement is signed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">3. Insurance & Liability</h2>
            <p>
              Productions must provide a certificate of insurance naming Ride4Movies as
              additional insured, with coverage limits appropriate to the vehicle's stated
              value. The renter assumes full responsibility for any damage, loss, or
              third-party claim arising during the rental period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">4. Use of Vehicles</h2>
            <p>
              Vehicles are provided for the specific use described in the reservation.
              Stunt work, off-road use, modifications, and any use not approved in writing
              are strictly prohibited without prior consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">5. Cancellations</h2>
            <p>
              Cancellation terms are set forth in each booking agreement. Deposits may be
              non-refundable within a defined window prior to the reservation date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">6. Photography & Likeness</h2>
            <p>
              Any commercial, editorial, or advertising use of imagery featuring our
              vehicles requires prior written approval. Trademarks and identifying marks
              may not be altered or obscured without consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ride4Movies is not liable for any
              indirect, incidental, or consequential damages arising out of any rental,
              reservation, or use of our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California. Any dispute
              shall be resolved in the courts located in Los Angeles County.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-ink mb-4">9. Contact</h2>
            <p>
              Questions regarding these terms may be directed to{" "}
              <a href="mailto:Erez88@yahoo.com" className="underline underline-offset-4">
                Erez88@yahoo.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
