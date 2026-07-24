"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Wallet, HeadphonesIcon } from "lucide-react";
import PortfolioImage from "@/components/shared/PortfolioImage";

const perks = [
  { icon: CalendarCheck, title: "Easy Booking", desc: "Simple & fast booking process" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "Safe & secure transactions" },
  { icon: Wallet, title: "Deposit Option", desc: "Flexible deposit to secure your date" },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "We're here to help you anytime" },
];

export default function BookCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <PortfolioImage
          src="/images/portfolio/wedding-couple-palm-sunset.webp"
          alt="Couple at golden hour under palm trees on the Mombasa coast"
          tone="gold"
          className="opacity-45"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="container-lux relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Ready to Create Something Beautiful?</span>
          <h2 className="mt-2 font-display text-4xl text-ivory sm:text-5xl">Let's Tell Your Story</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ash">Bring your vision to life with luxury photography.</p>
          <Link href="/book" className="btn-gold mt-8 inline-flex">
            Schedule Your Session
          </Link>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col items-center gap-2 text-center">
              <perk.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <p className="text-xs font-semibold uppercase tracking-widest text-ivory">{perk.title}</p>
              <p className="text-[11px] text-ash">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
