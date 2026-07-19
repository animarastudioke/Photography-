export type PortfolioCategory =
  | "weddings"
  | "portraits"
  | "lifestyle"
  | "hotels-resorts"
  | "corporate"
  | "studio"
  | "events"
  | "travel"
  | "drone";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  /** Cloudinary public URL or local /public path */
  image: string;
  /** Optional larger aspect ratio hint for masonry sizing */
  span?: "tall" | "wide" | "normal";
  location?: string;
  year?: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  startingPrice: number;
  priceUnit: "session" | "hour" | "day" | "event";
  slug: string;
  deliverables?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover: string;
  date: string;
  readMinutes: number;
  tags: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  location: string;
  budgetRange: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
