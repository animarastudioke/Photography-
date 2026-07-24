"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Camera, Briefcase, Star } from "lucide-react";
import { homeStats } from "@/lib/data/stats";

const icons = { clients: Users, photos: Camera, projects: Briefcase, rating: Star };

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function AnimatedStats() {
  return (
    <section className="border-y border-line bg-charcoal">
      <div className="container-lux grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {homeStats.map((stat, i) => {
          const Icon = icons[stat.id as keyof typeof icons] ?? Star;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <p className="font-display text-3xl text-ivory sm:text-4xl">
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-[11px] uppercase tracking-widest text-ash">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
