"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { services, formatKes } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Tell Your Story"
          accent="Your Story"
          action={
            <Link href="/services" className="text-xs font-medium uppercase tracking-widest text-gold hover:text-gold-light">
              View All Services →
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Camera;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-ink p-8 transition-colors hover:bg-charcoal"
              >
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg text-ivory">{service.title}</h3>
                <p className="mt-2 text-xs text-ash">From {formatKes(service.startingPrice)}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Learn More
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
