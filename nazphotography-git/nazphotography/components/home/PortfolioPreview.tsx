"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import MasonryGallery from "@/components/portfolio/MasonryGallery";
import { portfolioCategories, filterPortfolio } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

export default function PortfolioPreview() {
  const [active, setActive] = useState<PortfolioCategory | "all">("all");
  const items = filterPortfolio(active).slice(0, 9);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow="Portfolio" title="Captured Moments That Last Forever" accent="Forever" />

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "text-xs font-medium uppercase tracking-widest text-ash transition-colors hover:text-gold",
                active === cat.id && "text-gold"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <MasonryGallery items={items} />
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="btn-outline">
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
