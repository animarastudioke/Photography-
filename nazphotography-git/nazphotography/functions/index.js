const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const nodemailer = require("nodemailer");

initializeApp();

const SMTP_HOST = defineSecret("SMTP_HOST");
const SMTP_PORT = defineSecret("SMTP_PORT");
const SMTP_USER = defineSecret("SMTP_USER");
const SMTP_PASS = defineSecret("SMTP_PASS");
const STUDIO_NOTIFY_EMAIL = defineSecret("STUDIO_NOTIFY_EMAIL");

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

function buildTransport() {
  const port = Number(SMTP_PORT.value());
  return nodemailer.createTransport({
    host: SMTP_HOST.value(),
    port,
    secure: port === 465,
    auth: { user: SMTP_USER.value(), pass: SMTP_PASS.value() },
  });
}

exports.onBookingCreated = onDocumentCreated(
  {
    document: "bookings/{bookingId}",
    secrets: [SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, STUDIO_NOTIFY_EMAIL],
  },
  async (event) => {
    const booking = event.data?.data();
    if (!booking) return;

    const transport = buildTransport();
    const from = `"Nazphotography.ke" <${SMTP_USER.value()}>`;
    const serviceTitle = SERVICE_TITLES[booking.serviceId] ?? booking.serviceId;

    await transport.sendMail({
      from,
      to: STUDIO_NOTIFY_EMAIL.value(),
      replyTo: booking.email,
      subject: `New booking request — ${booking.name} (${serviceTitle})`,
      text: [
        "New booking request received:",
        "",
        `Name: ${booking.name}`,
        `Email: ${booking.email}`,
        `Phone: ${booking.phone}`,
        `Service: ${serviceTitle}`,
        `Preferred date: ${booking.preferredDate}`,
        `Location: ${booking.location}`,
        `Budget: ${booking.budgetRange}`,
        `Message: ${booking.message || "(none)"}`,
      ].join("\n"),
    });

    await transport.sendMail({
      from,
      to: booking.email,
      subject: "We received your booking request — Nazphotography.ke",
      text: [
        `Hi ${booking.name},`,
        "",
        "Thanks for your booking request! I'll review it and confirm availability within 24 hours.",
        "",
        "Once confirmed, you can pay your 30% deposit via M-Pesa:",
        `Paybill: ${MPESA_PAYBILL}`,
        `Account: ${MPESA_ACCOUNT}`,
        "",
        "Please wait for my confirmation before paying.",
        "",
        "— Naz, Nazphotography.ke",
      ].join("\n"),
    });
  }
);
