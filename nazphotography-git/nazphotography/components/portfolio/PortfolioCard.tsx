"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import PortfolioImage from "@/components/shared/PortfolioImage";
import type { PortfolioItem } from "@/types";
import { cn } from "@/lib/utils";

const spanAspect: Record<NonNullable<PortfolioItem["span"]>, string> = {
  tall: "aspect-[3/4.4]",
  wide: "aspect-[4/2.6]",
  normal: "aspect-square",
};

interface PortfolioCardProps {
  item: PortfolioItem;
  onOpen: () => void;
  className?: string;
}

export default function PortfolioCard({ item, onOpen, className }: PortfolioCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative block w-full overflow-hidden rounded-sm text-left",
        spanAspect[item.span ?? "normal"],
        className
      )}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <PortfolioImage src={item.image} alt={item.title} label={item.category.replace("-", " ")} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium text-ivory">{item.title}</p>
        {item.location && <p className="text-[11px] text-ash">{item.location}</p>}
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/60 text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Expand className="h-3.5 w-3.5" />
      </div>
    </motion.button>
  );
}
