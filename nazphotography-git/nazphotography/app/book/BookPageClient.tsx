"use client";

import { Suspense } from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import BookingForm from "@/components/booking/BookingForm";
import { CalendarCheck, ShieldCheck, Wallet, HeadphonesIcon } from "lucide-react";

const perks = [
  { icon: CalendarCheck, title: "Easy Booking" },
  { icon: ShieldCheck, title: "Secure Payment" },
  { icon: Wallet, title: "Deposit Option" },
  { icon: HeadphonesIcon, title: "24/7 Support" },
];

export default function BookPageClient() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux max-w-2xl">
        <SectionHeading eyebrow="Book Your Session" title="Let's Bring Your Vision to Life" accent="Vision to Life" align="center" />

        <div className="mt-10 grid grid-cols-4 gap-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col items-center gap-1.5 text-center">
              <perk.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <p className="text-[10px] uppercase tracking-widest text-ash">{perk.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-sm border border-line bg-charcoal p-8 sm:p-10">
          <Suspense fallback={<div className="text-center text-ash">Loading form…</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
