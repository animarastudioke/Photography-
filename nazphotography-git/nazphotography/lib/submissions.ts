import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import type { BookingFormData, ContactFormData } from "@/types";

const BOOKING_NOTIFY_URL = process.env.NEXT_PUBLIC_BOOKING_NOTIFY_URL;
const BOOKING_NOTIFY_SECRET = process.env.NEXT_PUBLIC_BOOKING_NOTIFY_SECRET;

// Fires the Apps Script Web App (see apps-script/booking-notify.gs) so the
// studio owner and customer get emailed immediately. Best-effort: the
// booking is already saved to Firestore by the time this runs, so a failed
// or unconfigured notification shouldn't turn a successful booking into an
// error for the visitor.
async function notifyBooking(booking: BookingFormData): Promise<void> {
  if (!BOOKING_NOTIFY_URL) return;
  try {
    await fetch(BOOKING_NOTIFY_URL, {
      method: "POST",
      // text/plain avoids a CORS preflight that Apps Script Web Apps don't
      // handle; the body is still parsed as JSON on the receiving end.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret: BOOKING_NOTIFY_SECRET, booking }),
    });
  } catch {
    // Ignored — see comment above.
  }
}

export async function submitBooking(data: BookingFormData): Promise<{ ok: boolean; error?: string }> {
  if (!isFirebaseConfigured) {
    return { ok: false, error: "Booking backend isn't configured yet. Please WhatsApp us directly." };
  }
  try {
    await addDoc(collection(db, "bookings"), { ...data, status: "new", createdAt: serverTimestamp() });
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Something went wrong." };
  }
  await notifyBooking(data);
  return { ok: true };
}

export async function submitContact(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
  if (!isFirebaseConfigured) {
    return { ok: false, error: "Contact backend isn't configured yet. Please WhatsApp us directly." };
  }
  try {
    await addDoc(collection(db, "messages"), { ...data, status: "unread", createdAt: serverTimestamp() });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Something went wrong." };
  }
}

export async function submitNewsletter(email: string): Promise<{ ok: boolean; error?: string }> {
  if (!isFirebaseConfigured) {
    return { ok: false, error: "Newsletter isn't configured yet." };
  }
  try {
    await addDoc(collection(db, "newsletter"), { email, createdAt: serverTimestamp() });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Something went wrong." };
  }
}
