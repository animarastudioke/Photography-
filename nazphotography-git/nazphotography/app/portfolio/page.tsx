import { Suspense } from "react";
import type { Metadata } from "next";
import PortfolioPageClient from "@/components/portfolio/PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Weddings, portraits, hotels & resorts, corporate, and travel photography from Nazphotography.ke in Mombasa, Kenya.",
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-ash">Loading portfolio…</div>}>
      <PortfolioPageClient />
    </Suspense>
  );
}
