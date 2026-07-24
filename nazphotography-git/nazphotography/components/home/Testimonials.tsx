"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[index] ?? testimonials[0]!;

  return (
    <section id="testimonials" className="border-t border-line py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow="Testimonials" title="What My Clients Say" accent="Say" />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-sm border border-line bg-charcoal p-8">
              <Quote className="h-6 w-6 text-gold/50" />
              <p className="mt-4 text-sm leading-relaxed text-ivory/90">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-xs font-semibold text-ink">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">{item.name}</p>
                  <p className="text-xs text-ash">{item.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="relative mt-4 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            />
          </AnimatePresence>
          <div className="mt-4 flex justify-center gap-4">
            <button onClick={prev} aria-label="Previous testimonial" className="rounded-full border border-line p-2 text-ivory hover:border-gold hover:text-gold">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Next testimonial" className="rounded-full border border-line p-2 text-ivory hover:border-gold hover:text-gold">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
