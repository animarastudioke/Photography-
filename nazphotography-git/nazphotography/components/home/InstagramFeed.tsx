"use client";

import { Instagram } from "lucide-react";
import PortfolioImage from "@/components/shared/PortfolioImage";
import { portfolioItems } from "@/lib/data/portfolio";
import { contact } from "@/lib/data/contact";

const FEATURED_IDS = ["p01", "p08", "p16", "p04", "p17"];

export default function InstagramFeed() {
  const posts = portfolioItems.filter((item) => FEATURED_IDS.includes(item.id));

  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-lux">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Instagram</span>
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">Follow My Journey</h2>
          </div>
          <span className="flex items-center gap-1.5 text-sm text-ash">
            <Instagram className="h-4 w-4 text-gold" /> @{contact.instagramHandle}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {posts.map((post) => (
            <a
              key={post.id}
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm"
              aria-label={post.title}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <PortfolioImage src={post.image} alt={post.title} label={post.title} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/50">
                <Instagram className="h-5 w-5 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View More on Instagram
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
