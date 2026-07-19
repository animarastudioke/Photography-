"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioImage from "@/components/shared/PortfolioImage";

const categories = [
  { number: "01", label: "Weddings", href: "/portfolio?category=weddings", image: "/images/portfolio/wedding-proposal-diani.webp" },
  { number: "02", label: "Portraits", href: "/portfolio?category=portraits", image: "/images/portfolio/portrait-braided-updo.webp" },
  { number: "03", label: "Lifestyle", href: "/portfolio?category=lifestyle", image: "/images/portfolio/lifestyle-leopard-gallery-door.webp" },
  { number: "04", label: "Hotels & Resorts", href: "/portfolio?category=hotels-resorts", image: "/images/portfolio/hotel-water-feature-lounge.webp" },
  { number: "05", label: "Corporate", href: "/portfolio?category=corporate", image: "" },
];

export default function CategoryStrip() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="container-lux">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={cat.href} className="group relative block aspect-[4/5] overflow-hidden bg-ink">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <PortfolioImage src={cat.image} alt={cat.label} label={cat.label} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10px] font-medium text-gold">{cat.number}</span>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-ivory">{cat.label}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
