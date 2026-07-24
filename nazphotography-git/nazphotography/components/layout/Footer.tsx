"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react";
import { contact } from "@/lib/data/contact";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const moreLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/book", label: "Schedule Session" },
  { href: "/contact", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#wedding", label: "Wedding Photography" },
  { href: "/services#portrait", label: "Portrait Photography" },
  { href: "/services#corporate", label: "Corporate Photography" },
  { href: "/services#hotel-resort", label: "Hotel Photography" },
  { href: "/services#events", label: "Events Coverage" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-lux grid grid-cols-2 gap-10 py-16 md:grid-cols-6">
        <div className="col-span-2">
          <span className="font-script text-2xl text-ivory">Naz</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
            Nazphotography.ke is a premium photography brand based in Mombasa, Kenya. We specialize
            in capturing timeless moments and creating visual stories that last forever.
          </p>
          <div className="mt-5 flex gap-4">
            {[
              { Icon: Instagram, href: contact.instagramUrl, label: "Instagram" },
              { Icon: Facebook, href: contact.facebookUrl, label: "Facebook" },
              { Icon: Youtube, href: contact.youtubeUrl, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="More" links={moreLinks} />
        <FooterColumn title="Services" links={serviceLinks} />

        <div className="col-span-2 md:col-span-1">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ivory">Contact Info</h4>
          <ul className="space-y-3 text-sm text-ash">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Mombasa, Kenya
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {contact.phoneDisplay}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {contact.email}
            </li>
            <li className="flex items-start gap-2">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> www.nazphotography.co.ke
            </li>
          </ul>
        </div>
      </div>

      <div className="container-lux border-t border-line py-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-sm border border-line bg-charcoal p-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ivory">Newsletter</h4>
            <p className="mt-1 text-sm text-ash">Stay updated with my latest work and photography tips.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="flex w-full max-w-md gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-ivory placeholder:text-ash focus:border-gold focus:outline-none"
            />
            <button type="submit" className="btn-gold whitespace-nowrap">
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="container-lux flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs text-ash md:flex-row">
        <p>© {new Date().getFullYear()} Nazphotography.ke. All Rights Reserved.</p>
        <p>
          Designed with <span className="text-gold">♥</span> by Naz
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ivory">{title}</h4>
      <ul className="space-y-2.5 text-sm text-ash">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
