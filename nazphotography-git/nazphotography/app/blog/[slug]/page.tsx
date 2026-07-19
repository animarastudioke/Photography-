import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PortfolioImage from "@/components/shared/PortfolioImage";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-ash hover:text-gold">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
        </Link>

        <p className="mt-6 text-[11px] uppercase tracking-widest text-gold">
          {formatDate(post.date)} · {post.readMinutes} min read
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-ivory sm:text-5xl">{post.title}</h1>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm">
          <PortfolioImage src={post.cover} alt={post.title} label={post.tags[0]} tone="gold" />
        </div>

        <div className="prose-invert mt-10 max-w-none text-base leading-relaxed text-ivory/85">
          <p>{post.content}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-sm border border-line px-3 py-1 text-[11px] uppercase tracking-widest text-ash">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
