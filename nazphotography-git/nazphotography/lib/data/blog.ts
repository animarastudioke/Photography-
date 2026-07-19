import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b01",
    slug: "5-tips-for-the-perfect-wedding-photos",
    title: "5 Tips for the Perfect Wedding Photos",
    excerpt: "From timing your golden hour portraits to choosing a second shooter — small decisions that make a big difference on the day.",
    content:
      "Planning your wedding photography starts long before the big day. Here are five things every Mombasa couple should think about: build a realistic timeline with buffer time, scout your first-look location in advance, trust your photographer's lens choices, plan a golden-hour portrait window, and pick a second shooter for candid coverage during the reception.",
    cover: "/images/portfolio/wedding-couple-pool-walk.webp",
    date: "2026-05-12",
    readMinutes: 4,
    tags: ["weddings", "planning"],
  },
  {
    id: "b02",
    slug: "why-golden-hour-is-a-photographers-best-friend",
    title: "Why Golden Hour is a Photographer's Best Friend",
    excerpt: "The hour after sunrise and before sunset on the Kenyan coast produces light no studio setup can replicate.",
    content:
      "Golden hour along the Mombasa coastline offers a warm, diffused light that flatters skin tones and adds natural drama to the horizon. Understanding tide tables alongside sun position lets us plan beach sessions where the light, the water, and the composition all align.",
    cover: "/images/portfolio/wedding-couple-palm-sunset.webp",
    date: "2026-04-28",
    readMinutes: 3,
    tags: ["technique", "coastal-light"],
  },
  {
    id: "b03",
    slug: "behind-the-scenes-a-day-in-my-life",
    title: "Behind the Scenes: A Day in My Life",
    excerpt: "A look at what a real shoot day looks like — from gear checks at Sanaa Kivulini to the last export at midnight.",
    content:
      "A typical shoot day starts with a full gear and battery check at the Sanaa Kivulini studio in Bamburi, followed by a site visit, the shoot itself, and a first culling pass before the day ends. Editing and client delivery usually happen over the following 48 hours.",
    cover: "/images/portfolio/studio-gold-crown-editorial.webp",
    date: "2026-04-15",
    readMinutes: 5,
    tags: ["studio-life", "process"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
