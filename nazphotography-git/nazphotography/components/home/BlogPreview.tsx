"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PortfolioImage from "@/components/shared/PortfolioImage";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export default function BlogPreview() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="From the Blog"
          title="Tips, Stories & Inspiration"
          accent="Inspiration"
          action={
            <Link href="/blog" className="text-xs font-medium uppercase tracking-widest text-gold hover:text-gold-light">
              View All Posts →
            </Link>
          }
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <PortfolioImage src={post.cover} alt={post.title} label={post.tags[0]} />
                </div>
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-widest text-gold">{formatDate(post.date)}</p>
              <h3 className="mt-1 font-display text-lg text-ivory transition-colors group-hover:text-gold-light">
                {post.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-ivory/70">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
