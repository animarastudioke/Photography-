import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import type { BookingFormData, ContactFormData } from "@/types";

export async function submitBooking(data: BookingFormData): Promise<{ ok: boolean; error?: string }> {
  if (!isFirebaseConfigured) {
    return { ok: false, error: "Booking backend isn't configured yet. Please WhatsApp us directly." };
  }
  try {
    await addDoc(collection(db, "bookings"), { ...data, status: "new", createdAt: serverTimestamp() });

    // Send email notification
    try {
      await fetch("/api/send-booking-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
      // Don't fail the booking if email fails
    }

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Something went wrong." };
  }
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
