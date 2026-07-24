"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, Youtube, Mouse } from "lucide-react";
import PortfolioImage from "@/components/shared/PortfolioImage";
import { contact } from "@/lib/data/contact";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <PortfolioImage
          src="/images/portfolio/wedding-proposal-diani.webp"
          alt="Beach proposal at sunset on the Mombasa coast"
          tone="gold"
          className="opacity-80"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      {/* Signature tide-glow: a slow-breathing horizon light referencing the Mombasa coastline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 animate-tide bg-tide-glow" />

      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
        {[
          { Icon: Instagram, href: contact.instagramUrl, label: "Instagram" },
          { Icon: Facebook, href: contact.facebookUrl, label: "Facebook" },
          { Icon: Youtube, href: contact.youtubeUrl, label: "YouTube" },
        ].map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-ivory/70 transition-colors hover:text-gold">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-lux relative z-10 max-w-2xl"
      >
        <motion.span variants={item} className="section-label">
          Welcome to Nazphotography.ke
        </motion.span>

        <motion.h1 variants={item} className="font-display text-5xl leading-[1.08] text-ivory sm:text-6xl lg:text-7xl">
          We Don&apos;t Take
          <br />
          <span className="text-gold">Photos.</span>
          <br />
          We Tell Stories.
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-ash">
          Luxury photography for those who value timeless moments and unforgettable stories.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-5">
          <Link href="/book" className="btn-gold">
            Start Your Booking
          </Link>
          <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-ivory">
            Explore Our Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ivory/60"
      >
        <Mouse className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
        <span className="text-[10px] uppercase tracking-widest2">Scroll to Discover</span>
      </motion.div>
    </section>
  );
}
