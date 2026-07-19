import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { services, formatKes } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent starting rates for wedding, portrait, corporate, hotel, and events photography in Mombasa, Kenya.",
};

export default function PricingPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux">
        <SectionHeading eyebrow="Pricing" title="Investment For Your Story" accent="Your Story" />
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ash">
          Every rate below is a starting point — final quotes depend on location, hours, and
          deliverables. A 30% deposit secures your date; the balance is due on delivery.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-sm border border-line bg-charcoal p-8 transition-colors hover:border-gold/50"
            >
              <h3 className="font-display text-xl text-ivory">{service.title}</h3>
              <p className="mt-3 font-display text-3xl text-gold">
                {formatKes(service.startingPrice)}
                <span className="ml-1 text-xs font-sans font-normal text-ash">/ {service.priceUnit}</span>
              </p>

              {service.deliverables && (
                <ul className="mt-6 flex-1 space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ivory/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {d}
                    </li>
                  ))}
                </ul>
              )}

              <Link href={`/book?service=${service.id}`} className="btn-gold mt-7 justify-center">
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-sm border border-line bg-charcoal p-8 text-center sm:p-12">
          <h3 className="font-display text-2xl text-ivory">Need Something Bespoke?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-ash">
            Multi-day shoots, brand retainers, and destination sessions are quoted individually.
            Tell me about your project and I&apos;ll put together a custom proposal.
          </p>
          <Link href="/contact" className="btn-outline mt-6 inline-flex">
            Request a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
