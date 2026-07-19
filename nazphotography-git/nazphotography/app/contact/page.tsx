import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { whatsappLink } from "@/lib/utils";
import { contact } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nazphotography.ke for bookings, quotes, and enquiries in Mombasa, Kenya.",
};

export default function ContactPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux">
        <SectionHeading eyebrow="Contact" title="Let's Talk About Your Story" accent="Your Story" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <InfoRow icon={MapPin} label="Studio" value="Sanaa Kivulini, Bamburi, Mombasa, Kenya" />
            <InfoRow icon={Phone} label="Phone" value={contact.phoneDisplay} />
            <InfoRow icon={Mail} label="Email" value={contact.email} />
            <InfoRow icon={Clock} label="Hours" value="Mon – Sat, 9:00 AM – 6:00 PM" />

            <a
              href={whatsappLink("Hi Naz! I'd like to get in touch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-[#25D366]/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#25D366] transition-colors hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-sm border border-line bg-charcoal p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-ash">{label}</p>
        <p className="mt-0.5 text-sm text-ivory">{value}</p>
      </div>
    </div>
  );
}
