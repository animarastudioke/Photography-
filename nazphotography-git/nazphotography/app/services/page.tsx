import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { services, formatKes } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Wedding, portrait, corporate, hotel & resort, commercial, events, and drone photography services in Mombasa, Kenya.",
};

export default function ServicesPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Services"
          title="Photography Services Tailored For You"
          accent="For You"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Camera;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 rounded-sm border border-line bg-charcoal p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <span className="whitespace-nowrap text-sm font-semibold text-gold">
                    From {formatKes(service.startingPrice)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-ivory">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">{service.description}</p>

                {service.deliverables && (
                  <ul className="mt-5 space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-ivory/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {d}
                      </li>
                    ))}
                  </ul>
                )}

                <Link href={`/book?service=${service.id}`} className="btn-outline mt-6 inline-flex">
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
