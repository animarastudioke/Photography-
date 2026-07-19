/**
 * Google Apps Script Web App — paste this into a new project at script.google.com
 * (not run by Next.js; this file is a reference copy for version control).
 *
 * Deploy as: Deploy > New deployment > Web app > Execute as "Me" > Who has
 * access "Anyone". Copy the resulting /exec URL into NEXT_PUBLIC_BOOKING_NOTIFY_URL.
 *
 * On first deploy, Google will prompt you to authorize the script to send
 * email as you — that's expected, it's using your own Gmail account.
 *
 * See README.md "Booking notifications & deposit payment" for full setup steps.
 */

// Must match NEXT_PUBLIC_BOOKING_NOTIFY_SECRET in the site's env vars.
const SHARED_SECRET = "REPLACE_WITH_A_RANDOM_SECRET";
const STUDIO_NOTIFY_EMAIL = "naz@nazphotography.co.ke";

const MPESA_PAYBILL = "247247";
const MPESA_ACCOUNT = "0706549995";

const SERVICE_TITLES = {
  wedding: "Wedding Photography",
  portrait: "Portrait Photography",
  studio: "Studio Sessions",
  "hotel-resort": "Hotel & Resort Photography",
  corporate: "Corporate Photography",
  commercial: "Commercial Photography",
  events: "Events Coverage",
  drone: "Drone Photography",
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.secret !== SHARED_SECRET) {
      return jsonResponse({ ok: false, error: "unauthorized" });
    }

    const booking = data.booking;
    if (!booking || !booking.name || !booking.email) {
      return jsonResponse({ ok: false, error: "invalid payload" });
    }

    const serviceTitle = SERVICE_TITLES[booking.serviceId] || booking.serviceId;

    GmailApp.sendEmail(
      STUDIO_NOTIFY_EMAIL,
      "New booking request — " + booking.name + " (" + serviceTitle + ")",
      [
        "New booking request received:",
        "",
        "Name: " + booking.name,
        "Email: " + booking.email,
        "Phone: " + booking.phone,
        "Service: " + serviceTitle,
        "Preferred date: " + booking.preferredDate,
        "Location: " + booking.location,
        "Budget: " + booking.budgetRange,
        "Message: " + (booking.message || "(none)"),
      ].join("\n"),
      { replyTo: booking.email }
    );

    GmailApp.sendEmail(
      booking.email,
      "We received your booking request — Nazphotography.ke",
      [
        "Hi " + booking.name + ",",
        "",
        "Thanks for your booking request! I'll review it and confirm availability within 24 hours.",
        "",
        "Once confirmed, you can pay your 30% deposit via M-Pesa:",
        "Paybill: " + MPESA_PAYBILL,
        "Account: " + MPESA_ACCOUNT,
        "",
        "Please wait for my confirmation before paying.",
        "",
        "— Naz, Nazphotography.ke",
      ].join("\n")
    );

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
