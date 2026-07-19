import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/petit-formal-script/400.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { contact } from "@/lib/data/contact";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nazphotography.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nazphotography.ke — Luxury Photography & Videography in Mombasa, Kenya",
    template: "%s | Nazphotography.ke",
  },
  description:
    "We don't take photos, we tell stories. Luxury wedding, portrait, corporate, and hotel & resort photography in Mombasa, Kenya, from Nazphotography.ke.",
  keywords: [
    "Mombasa photographer",
    "Kenya wedding photography",
    "corporate photography Mombasa",
    "hotel resort photography Kenya",
    "Nazphotography",
  ],
  openGraph: {
    title: "Nazphotography.ke — Luxury Photography & Videography in Mombasa, Kenya",
    description: "We don't take photos, we tell stories. Timeless photography for those who value unforgettable moments.",
    url: siteUrl,
    siteName: "Nazphotography.ke",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazphotography.ke — Luxury Photography & Videography in Mombasa, Kenya",
    description: "We don't take photos, we tell stories.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nazphotography.ke",
  image: `${siteUrl}/icons/logo.svg`,
  description: "Luxury commercial photography and videography studio based in Mombasa, Kenya.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mombasa",
    addressCountry: "KE",
  },
  telephone: `+${contact.whatsappNumber}`,
  url: siteUrl,
  priceRange: "Ksh Ksh Ksh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
