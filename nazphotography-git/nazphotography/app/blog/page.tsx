import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PortfolioImage from "@/components/shared/PortfolioImage";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, stories, and behind-the-scenes inspiration from Nazphotography.ke.",
};

export default function BlogPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux">
        <SectionHeading eyebrow="Blog" title="Tips, Stories & Inspiration" accent="Inspiration" />

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <PortfolioImage src={post.cover} alt={post.title} label={post.tags[0]} />
                </div>
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-widest text-gold">
                {formatDate(post.date)} · {post.readMinutes} min read
              </p>
              <h3 className="mt-1 font-display text-lg text-ivory transition-colors group-hover:text-gold-light">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{post.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-ivory/70">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
