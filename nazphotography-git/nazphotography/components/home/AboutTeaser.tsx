"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { brandsWorkedWith } from "@/lib/data/stats";

export default function AboutTeaser() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            Hi, I&apos;m <span className="text-gold">Nazario</span>
          </h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-ash">Storyteller. Dreamer. Photographer.</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ash">
            Photography for me is not just about taking pictures — it&apos;s about capturing emotions,
            connections, and moments that can never be recreated. Every frame tells a story worth preserving.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ash">
            With over 6 years of experience working with premium brands and unforgettable clients, I specialize
            in creating luxury visual narratives across weddings, corporate work, hospitality, and editorial photography.
          </p>
          <span className="mt-6 block font-script text-3xl text-ivory">Nazario</span>
          <Link href="/about" className="btn-outline mt-6 inline-flex">
            More About Me
          </Link>

          <div className="mt-14">
            <p className="mb-5 text-[11px] uppercase tracking-widest text-ash">Brands I&apos;ve Worked With</p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {brandsWorkedWith.map((brand) => (
                <span key={brand} className="font-display text-lg text-ivory/50">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm"
        >
          <Image
            src="/images/about/nazario-portrait.jpg"
            alt="Nazario, luxury photographer based in Mombasa"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
