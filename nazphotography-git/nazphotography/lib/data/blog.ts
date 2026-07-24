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
  {
    id: "b04",
    slug: "corporate-photography-trends-in-kenya-2026",
    title: "Corporate Photography Trends in Kenya 2026",
    excerpt: "How modern brands in Nairobi, Mombasa, and across Kenya are using authentic corporate imagery to stand out.",
    content:
      "Corporate photography has evolved beyond stiff boardroom portraits. Today's brands want authentic, candid moments that show team culture and mission. We're seeing a shift toward environmental portraits in natural light, diverse team representation, and behind-the-scenes content that humanizes the business. For Kenyan companies competing globally, investing in professional corporate imagery signals trust and professionalism. The best corporate shoots capture genuine moments—teams collaborating, leaders listening, products being crafted—rather than staged formality.",
    cover: "/images/portfolio/corporate-team-meeting.webp",
    date: "2026-06-20",
    readMinutes: 4,
    tags: ["corporate", "branding"],
  },
  {
    id: "b05",
    slug: "luxury-hotel-photography-capturing-experiences",
    title: "Luxury Hotel Photography: Capturing Experiences",
    excerpt: "How we work with premium hotels like Sarova and Radisson to showcase their spaces and tell their guest stories.",
    content:
      "Hotel photography goes beyond room tours. The goal is to evoke emotion—imagine the guest experience. For luxury properties, we focus on lifestyle moments: guests enjoying the spa, sunset from the terrace, culinary details that make dining memorable. Lighting, timing, and composition all work together to communicate exclusivity and comfort. We work closely with hotel teams to understand their brand voice, then craft imagery that drives bookings and justifies premium pricing. Details matter: the quality of linens, the warmth of the staff's smile, the way natural light fills a corridor.",
    cover: "/images/portfolio/hotel-spa-luxury.webp",
    date: "2026-06-05",
    readMinutes: 5,
    tags: ["hotels", "hospitality"],
  },
  {
    id: "b06",
    slug: "the-art-of-wedding-storytelling",
    title: "The Art of Wedding Storytelling Through Photography",
    excerpt: "How we capture the narrative arc of your wedding day—from anticipation to celebration.",
    content:
      "Every wedding has a story. Our job is to capture not just moments, but the emotions and connections that make your day unique. We start with the anticipation—getting-ready moments, nervous glances, family bonds. We document the ceremony with reverence for the ritual. Then we shift to celebration—genuine laughter, dancing, connection. By the end of the day, the images tell a complete narrative. The best wedding photographers disappear into the background while remaining alert for the decisive moments—the kiss, the first dance, the unguarded smile. We combine technical skill with emotional intelligence to ensure your album captures not just what happened, but how it felt.",
    cover: "/images/portfolio/wedding-couple-palm-sunset.webp",
    date: "2026-05-28",
    readMinutes: 6,
    tags: ["weddings", "storytelling"],
  },
  {
    id: "b07",
    slug: "photography-investment-roi-for-small-businesses",
    title: "Why Professional Photography is Worth the Investment",
    excerpt: "Data shows that quality product and brand photography directly impacts conversion rates and customer trust.",
    content:
      "Many small businesses hesitate on professional photography budgets, but the ROI is measurable. Studies show that product listings with professional photos have 27% higher click-through rates. For service businesses, professional headshots and team photos build credibility—clients want to know who they're working with. On social media, high-quality imagery drives engagement and follower growth. For e-commerce, professional product photography reduces returns and increases average order value. Think of professional photography not as a cost, but as an investment in your brand's ability to compete and convert. The upfront expense pays dividends through improved customer perception, higher sales, and stronger brand recognition.",
    cover: "/images/portfolio/product-photography-detail.webp",
    date: "2026-05-10",
    readMinutes: 4,
    tags: ["business", "roi"],
  },
  {
    id: "b08",
    slug: "editing-philosophy-authentic-vs-overprocessed",
    title: "Our Editing Philosophy: Authentic, Not Overprocessed",
    excerpt: "How we use post-processing to enhance, not fabricate—preserving the genuine moment while elevating the image.",
    content:
      "Editing is a craft. We enhance colors, refine tones, and remove distractions, but we never fabricate reality. Over-processing creates images that look artificial and dated. Our philosophy is to let the moment breathe. We adjust exposure, white balance, and contrast to bring out the story already present in the photograph. For skin tones, we preserve natural texture and character rather than creating plastic smoothness. For landscapes and events, we enhance what was there—richer colors in golden hour, more defined shadows—rather than creating an alternate reality. The goal is an image that looks better than the original but still feels true to what you experienced that day.",
    cover: "/images/portfolio/editing-before-after.webp",
    date: "2026-04-30",
    readMinutes: 4,
    tags: ["editing", "technique"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
