"use client";

import { useState } from "react";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Lightbox from "@/components/portfolio/Lightbox";
import type { PortfolioItem } from "@/types";

interface MasonryGalleryProps {
  items: PortfolioItem[];
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <PortfolioCard key={item.id} item={item} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>

      <Lightbox
        items={items}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
