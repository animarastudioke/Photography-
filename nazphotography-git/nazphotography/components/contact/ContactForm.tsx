"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact } from "@/lib/submissions";
import type { ContactFormData } from "@/types";

const initialState: ContactFormData = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const result = await submitContact(form);
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
        <h3 className="font-display text-xl text-ivory">Message Sent</h3>
        <p className="max-w-xs text-sm text-ash">Thanks for reaching out — I&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-2">
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className="field-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className="field-input"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone">
          <input value={form.phone} onChange={update("phone")} placeholder="+254 7XX XXX XXX" className="field-input" />
        </Field>
        <Field label="Subject" required>
          <input required value={form.subject} onChange={update("subject")} placeholder="What's this about?" className="field-input" />
        </Field>
      </div>

      <Field label="Message" required>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell me a bit about what you have in mind…"
          className="field-input resize-none"
        />
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4" /> {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-gold w-full sm:w-auto">
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send Message"}
      </button>
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
