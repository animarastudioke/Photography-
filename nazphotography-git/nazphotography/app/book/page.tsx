import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book a Session",
  description: "Book your wedding, portrait, corporate, or event photography session with Nazphotography.ke.",
};

export default function BookPage() {
  return <BookPageClient />;
}
