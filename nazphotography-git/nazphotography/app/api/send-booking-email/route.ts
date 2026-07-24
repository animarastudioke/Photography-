import { Resend } from "resend";
import type { BookingFormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const booking: BookingFormData = await req.json();

    const serviceNames: Record<string, string> = {
      wedding: "Wedding Photography",
      portrait: "Portrait Photography",
      studio: "Studio Sessions",
      "hotel-resort": "Hotel & Resort Photography",
      corporate: "Corporate Photography",
      commercial: "Commercial Photography",
      events: "Events Coverage",
      drone: "Drone Photography",
    };

    const serviceName = serviceNames[booking.serviceId] || booking.serviceId;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: #d4af37; padding: 20px; border-radius: 4px; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { margin-top: 20px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #1a1a1a; }
    .value { color: #555; margin-top: 4px; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📸 New Booking Request</h1>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">Client Name</div>
        <div class="value">${booking.name}</div>
      </div>

      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${booking.email}">${booking.email}</a></div>
      </div>

      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${booking.phone}</div>
      </div>

      <div class="field">
        <div class="label">Service Requested</div>
        <div class="value">${serviceName}</div>
      </div>

      <div class="field">
        <div class="label">Preferred Date</div>
        <div class="value">${new Date(booking.preferredDate).toLocaleDateString()}</div>
      </div>

      <div class="field">
        <div class="label">Location</div>
        <div class="value">${booking.location}</div>
      </div>

      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${booking.budgetRange}</div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="value">${booking.message || "(No message provided)"}</div>
      </div>

      <div class="footer">
        <p>This is an automated email from Nazphotography.ke booking system.</p>
        <p>Reply to: ${booking.email}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "bookings@nazphotography.co.ke",
      to: process.env.BOOKING_EMAIL_TO || "animarastudio.ke@gmail.com",
      replyTo: booking.email,
      subject: `New Booking: ${booking.name} — ${serviceName}`,
      html: emailHtml,
    });

    if (result.error) {
      console.error("Email send error:", result.error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, messageId: result.data?.id });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
