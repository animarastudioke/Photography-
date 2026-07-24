"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Word(s) within the title to render in gold */
  accent?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:justify-center md:text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {eyebrow && <span className="section-label">{eyebrow}</span>}
        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
          {accent ? (
            <>
              {parts[0]}
              <span className="text-gold">{accent}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h2>
      </motion.div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
