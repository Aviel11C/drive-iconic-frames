import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const submissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  type: z.string().max(80).optional(),
  date: z.string().max(40).optional(),
  vehicle: z.string().max(160).optional(),
  message: z.string().trim().min(10).max(2000),
});

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const parsed = submissionSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Please check your information and try again." },
            { status: 400 }
          );
        }

        const { name, email, phone, type, date, vehicle, message } = parsed.data;

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          console.error("Missing LOVABLE_API_KEY or RESEND_API_KEY");
          return Response.json(
            { ok: false, error: "Email service is not configured." },
            { status: 503 }
          );
        }

        const html = `
          <div style="font-family: Georgia, serif; color: #1a1a1a; max-width: 560px; margin: 0 auto; padding: 32px;">
            <h1 style="font-size: 22px; font-weight: 400; margin-bottom: 24px; letter-spacing: -0.02em;">New Ride4Movies inquiry</h1>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
              ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ""}
              ${type ? `<tr><td style="padding: 8px 0; color: #666;">Project type</td><td style="padding: 8px 0;">${escapeHtml(type)}</td></tr>` : ""}
              ${date ? `<tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0;">${escapeHtml(date)}</td></tr>` : ""}
              ${vehicle ? `<tr><td style="padding: 8px 0; color: #666;">Vehicle</td><td style="padding: 8px 0;">${escapeHtml(vehicle)}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 28px 0;" />
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Message</p>
            <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
          </div>
        `;

        const subject = vehicle
          ? `Inquiry: ${vehicle} — ${name}`
          : `New inquiry from ${name}`;

        // IMPORTANT: For emails to go to erez88@yahoo.com reliably, verify a domain in Resend
        // and update FROM_ADDRESS to something like "Ride4Movies <inquiries@yourdomain.com>".
        // onboarding@resend.dev only delivers to the Resend account owner's own email.
        const FROM_ADDRESS = "Ride4Movies <onboarding@resend.dev>";

        try {
          const res = await fetch(`${GATEWAY_URL}/emails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: FROM_ADDRESS,
              to: ["erez88@yahoo.com"],
              reply_to: email,
              subject,
              html,
            }),
          });

          if (!res.ok) {
            const errorBody = await res.text();
            console.error(`Resend gateway failed [${res.status}]: ${errorBody}`);
            return Response.json(
              { ok: false, error: `Provider request failed [${res.status}]: ${errorBody}` },
              { status: 502 }
            );
          }

          const result = await res.json();
          return Response.json({ ok: true, id: result.id });
        } catch (err) {
          console.error("Resend send error:", err);
          return Response.json(
            { ok: false, error: "Could not send email. Please try again later." },
            { status: 500 }
          );
        }
      },
    },
  },
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
