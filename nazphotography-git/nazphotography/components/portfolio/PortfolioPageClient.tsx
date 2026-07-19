"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SectionHeading from "@/components/shared/SectionHeading";
import MasonryGallery from "@/components/portfolio/MasonryGallery";
import { portfolioCategories, filterPortfolio } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/types";
import { cn } from "@/lib/utils";

export default function PortfolioPageClient() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<PortfolioCategory | "all">("all");

  useEffect(() => {
    const fromUrl = searchParams.get("category") as PortfolioCategory | null;
    if (fromUrl) setActive(fromUrl);
  }, [searchParams]);

  const items = filterPortfolio(active);

  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Portfolio"
          title="Every Frame Tells a Story"
          accent="Story"
        />

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4">
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

        <p className="mt-6 text-sm text-ash">
          {items.length} {items.length === 1 ? "piece" : "pieces"}
        </p>

        <div className="mt-8">
          {items.length > 0 ? (
            <MasonryGallery items={items} />
          ) : (
            <div className="rounded-sm border border-dashed border-line py-24 text-center">
              <p className="text-sm text-ash">No pieces in this category yet — check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
