import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "wedding",
    slug: "wedding-photography",
    title: "Wedding Photography",
    description: "Timeless memories of your beautiful day, told frame by frame from first look to last dance.",
    icon: "Heart",
    startingPrice: 40000,
    priceUnit: "event",
    deliverables: ["Full-day coverage", "300+ edited images", "Online gallery", "Optional same-day highlight reel"],
  },
  {
    id: "portrait",
    slug: "portrait-photography",
    title: "Portrait Photography",
    description: "Stunning portraits that showcase your best self, on location or in-studio.",
    icon: "UserRound",
    startingPrice: 8000,
    priceUnit: "session",
    deliverables: ["1-hour session", "20 edited images", "1 outfit change", "Print-ready files"],
  },
  {
    id: "studio",
    slug: "studio-sessions",
    title: "Studio Sessions",
    description: "Professional studio photoshoots with full lighting and backdrop control at Sanaa Kivulini.",
    icon: "Aperture",
    startingPrice: 8000,
    priceUnit: "session",
    deliverables: ["Studio hire included", "Lighting setup", "15 edited images", "Wardrobe rack access"],
  },
  {
    id: "hotel-resort",
    slug: "hotel-resort-photography",
    title: "Hotel & Resort Photography",
    description: "Showcasing the beauty of your property for bookings, brochures, and OTA listings.",
    icon: "Building2",
    startingPrice: 15000,
    priceUnit: "day",
    deliverables: ["Full property walkthrough", "Room & amenity sets", "Drone add-on available", "Licensed usage rights"],
  },
  {
    id: "corporate",
    slug: "corporate-photography",
    title: "Corporate Photography",
    description: "Elevate your brand with powerful headshots, team, and workplace imagery.",
    icon: "Briefcase",
    startingPrice: 12000,
    priceUnit: "session",
    deliverables: ["On-site or studio", "Headshot retouching", "Team & culture shots", "Fast 48-hour turnaround"],
  },
  {
    id: "commercial",
    slug: "commercial-photography",
    title: "Commercial Photography",
    description: "High-quality imagery for your business needs — product, campaign, and advertising work.",
    icon: "ShoppingBag",
    startingPrice: 18000,
    priceUnit: "day",
    deliverables: ["Product & lifestyle sets", "Usage-rights licensing", "Retouched deliverables", "Reel-ready video add-on"],
  },
  {
    id: "events",
    slug: "events-coverage",
    title: "Events Coverage",
    description: "Capturing every important moment of your gathering, launch, or celebration.",
    icon: "PartyPopper",
    startingPrice: 15000,
    priceUnit: "event",
    deliverables: ["Up to 4-hour coverage", "150+ edited images", "Same-week delivery", "Highlight reel add-on"],
  },
  {
    id: "drone",
    slug: "drone-photography",
    title: "Drone Photography",
    description: "Breathtaking aerial perspectives of the coast, your property, or your event.",
    icon: "Plane",
    startingPrice: 15000,
    priceUnit: "session",
    deliverables: ["Licensed KCAA operation", "4K aerial stills & video", "Property fly-throughs", "Rapid edited delivery"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export function formatKes(amount: number): string {
  return `Ksh ${amount.toLocaleString("en-KE")}`;
}
