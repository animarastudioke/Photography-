"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitBooking } from "@/lib/submissions";
import { services, formatKes } from "@/lib/data/services";
import { payment } from "@/lib/data/contact";
import type { BookingFormData } from "@/types";

const budgetRanges = ["Under Ksh 15,000", "Ksh 15,000 – 40,000", "Ksh 40,000 – 100,000", "Ksh 100,000+"];

const initialState: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  serviceId: "",
  preferredDate: "",
  location: "",
  budgetRange: budgetRanges[0]!,
  message: "",
};

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<BookingFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fromUrl = searchParams.get("service");
    if (fromUrl && services.some((s) => s.id === fromUrl)) {
      setForm((f) => ({ ...f, serviceId: fromUrl }));
    }
  }, [searchParams]);

  const update = <K extends keyof BookingFormData>(field: K) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const result = await submitBooking(form);
    if (result.ok) {
      setStatus("success");
      setForm(initialState);
    } else {
      setStatus("error");
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-sm border border-gold/30 bg-charcoal p-10 text-center"
      >
        <CheckCircle2 className="h-8 w-8 text-gold" />
        <h3 className="font-display text-xl text-ivory">Request Received</h3>
        <p className="max-w-xs text-sm text-ash">
          I&apos;ll review your request and confirm availability within 24 hours.
        </p>
        <div className="mt-1 w-full max-w-xs rounded-sm border border-gold/20 bg-ink p-4 text-left">
          <p className="text-[11px] font-medium uppercase tracking-widest text-gold">
            Once Confirmed — Deposit Payment
          </p>
          <p className="mt-2 text-sm text-ash">
            Pay your 30% deposit via M-Pesa:
          </p>
          <p className="mt-1 text-sm text-ivory">
            Paybill: <span className="font-semibold">{payment.mpesaPaybill}</span>
            <br />
            Account: <span className="font-semibold">{payment.mpesaAccount}</span>
          </p>
          <p className="mt-2 text-xs text-ash">
            You&apos;ll also get this by email — please wait for my confirmation before paying.
          </p>
        </div>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-2">
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input required value={form.name} onChange={update("name")} placeholder="Your name" className="field-input" />
        </Field>
        <Field label="Email" required>
          <input required type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className="field-input" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" required>
          <input required value={form.phone} onChange={update("phone")} placeholder="+254 7XX XXX XXX" className="field-input" />
        </Field>
        <Field label="Service" required>
          <select required value={form.serviceId} onChange={update("serviceId")} className="field-input">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title} — from {formatKes(s.startingPrice)}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Date" required>
          <input required type="date" value={form.preferredDate} onChange={update("preferredDate")} className="field-input" />
        </Field>
        <Field label="Location" required>
          <input required value={form.location} onChange={update("location")} placeholder="e.g. Diani, Nyali, Bamburi Studio" className="field-input" />
        </Field>
      </div>

      <Field label="Budget Range">
        <select value={form.budgetRange} onChange={update("budgetRange")} className="field-input">
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell Me About Your Session">
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Number of guests, vision for the shoot, anything I should know…"
          className="field-input resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" /> {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-gold w-full">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit Booking Request"}
      </button>
      <p className="text-center text-[11px] text-ash">A 30% deposit confirms your date after approval.</p>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-widest text-ash">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
