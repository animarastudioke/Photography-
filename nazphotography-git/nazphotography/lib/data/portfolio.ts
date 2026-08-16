import type { PortfolioCategory, PortfolioItem } from "@/types";

export const portfolioCategories: { id: PortfolioCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "portraits", label: "Portraits" },
  { id: "hotels-resorts", label: "Hotels" },
  { id: "corporate", label: "Corporate" },
  { id: "studio", label: "Studio" },
  { id: "events", label: "Events" },
  { id: "travel", label: "Travel" },
  { id: "drone", label: "Drone" },
];

/**
 * Real assets live in public/images/portfolio. Swap to Cloudinary delivery URLs
 * via cld() from lib/cloudinary.ts once these are uploaded to your Cloudinary
 * account — the <PortfolioImage> component (components/shared/PortfolioImage.tsx)
 * already falls back to a styled placeholder for any entry with image: "".
 *
 * NOTE: I don't know the actual venue/hotel names in these shots (signage in a
 * couple of the source photos was only partially legible), so locations below
 * are deliberately generic. Correct them before this goes live — a wrong hotel
 * name is worse than a vague one.
 */
export const portfolioItems: PortfolioItem[] = [
  { id: "p01", title: "Beach Proposal, Floral Arch", category: "weddings", image: "/images/portfolio/wedding-proposal-diani.webp", span: "tall", location: "Mombasa coast", year: 2026 },
  { id: "p02", title: "Golden Hour Under the Palms", category: "weddings", image: "/images/portfolio/wedding-couple-palm-sunset.webp", span: "tall", location: "Mombasa coast", year: 2026 },
  { id: "p03", title: "Evening Walk, Poolside", category: "weddings", image: "/images/portfolio/wedding-couple-pool-walk.webp", span: "normal", location: "Coastal resort", year: 2026 },
  { id: "p04", title: "Hotel Lounge, Ambient Light", category: "hotels-resorts", image: "/images/portfolio/hotel-lobby-lounge.webp", span: "wide", location: "Mombasa", year: 2026 },
  { id: "p05", title: "Water Feature Lounge", category: "hotels-resorts", image: "/images/portfolio/hotel-water-feature-lounge.webp", span: "wide", location: "Mombasa", year: 2026 },
  { id: "p06", title: "Poolside Bar, Blue Hour", category: "hotels-resorts", image: "/images/portfolio/hotel-poolside-bar-evening.webp", span: "wide", location: "Mombasa", year: 2026 },
  { id: "p07", title: "Reception & Front of House", category: "hotels-resorts", image: "/images/portfolio/hotel-reception-desk.webp", span: "wide", location: "Mombasa", year: 2026 },
  { id: "p08", title: "Gold Crown Editorial", category: "studio", image: "/images/portfolio/studio-gold-crown-editorial.webp", span: "tall", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p09", title: "Africa Charm, Close Portrait", category: "portraits", image: "/images/portfolio/portrait-africa-earring.webp", span: "tall", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p10", title: "Braided Updo, Studio Light", category: "portraits", image: "/images/portfolio/portrait-braided-updo.webp", span: "tall", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p11", title: "Big Five Charm Bracelets", category: "studio", image: "/images/portfolio/jewelry-animal-charm-bracelets.webp", span: "normal", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p12", title: "Red Hat, Graphic Print", category: "studio", image: "/images/portfolio/studio-red-hat-portrait.jpg", span: "tall", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p13", title: "Draped Pearl Editorial", category: "studio", image: "/images/portfolio/studio-pearl-drape-editorial.jpg", span: "tall", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p14", title: "Beachside, Midday Sun", category: "lifestyle", image: "/images/portfolio/lifestyle-beach-bikini.webp", span: "normal", location: "Mombasa coast", year: 2026 },
  { id: "p15", title: "Carved Doorway, Coastal Boho", category: "lifestyle", image: "/images/portfolio/lifestyle-ornate-door-boho.webp", span: "tall", location: "Swahili coast", year: 2026 },
  { id: "p16", title: "Gallery Doors, Leopard Print", category: "lifestyle", image: "/images/portfolio/lifestyle-leopard-gallery-door.webp", span: "tall", location: "Swahili coast", year: 2026 },
  { id: "p17", title: "Newborn, First Portraits", category: "portraits", image: "/images/portfolio/newborn-basket-roses.webp", span: "normal", location: "Sanaa Kivulini Studio", year: 2026 },
  { id: "p18", title: "Conference Hall, Ready for Delegates", category: "corporate", image: "/images/portfolio/corporate-conference-hall-setup.webp", span: "wide", location: "Mombasa", year: 2026 },
];

export function filterPortfolio(category: PortfolioCategory | "all"): PortfolioItem[] {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
