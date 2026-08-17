import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import SectionHeading from "@/components/shared/SectionHeading";
import { brandsWorkedWith } from "@/lib/data/stats";
import { homeStats } from "@/lib/data/stats";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Nazario — storyteller, dreamer, and photographer behind Nazphotography.ke in Mombasa, Kenya.",
};

const milestones = [
  { year: "2020", text: "Picked up a camera for the first time and started shooting friends & family in Mombasa." },
  { year: "2022", text: "Began offering dedicated studio sessions for portrait & product work." },
  { year: "2024", text: "Began working with hotels, resorts, and corporate brands across the Kenyan coast." },
  { year: "2026", text: "Nazphotography.ke crosses 500 happy clients and 200 completed projects." },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="section-label">About Me</span>
          <h1 className="font-display text-4xl text-ivory sm:text-5xl">
            Hi, I&apos;m <span className="text-gold">Nazario</span>
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-ash">Storyteller. Dreamer. Photographer.</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ash">
            Photography for me is not just about taking pictures — it&apos;s about capturing emotions,
            connections, and moments that can never be recreated.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ash">
            Based in Mombasa, I work across weddings, portraits, hotels & resorts, and corporate brands
            who want imagery with a genuine sense of place — the coast, the light, the people.
          </p>
          <span className="mt-6 block font-script text-3xl text-ivory">Nazario</span>
          <Link href="/book" className="btn-gold mt-6 inline-flex">
            Book a Session
          </Link>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <PlaceholderImage label="Nazario, behind the lens" tone="gold" />
        </div>
      </div>

      <div className="container-lux mt-24 grid grid-cols-2 gap-8 border-y border-line py-12 md:grid-cols-4">
        {homeStats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="font-display text-3xl text-ivory">
              {stat.value}
              {stat.suffix}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-ash">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="container-lux mt-24">
        <SectionHeading eyebrow="Journey" title="How It Started" accent="Started" />
        <div className="mt-10 space-y-8 border-l border-line pl-8">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-gold" />
              <p className="text-sm font-semibold text-gold">{m.year}</p>
              <p className="mt-1 max-w-lg text-sm leading-relaxed text-ash">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-lux mt-24">
        <p className="mb-6 text-[11px] uppercase tracking-widest text-ash">Brands I&apos;ve Worked With</p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-4 border-t border-line pt-8">
          {brandsWorkedWith.map((brand) => (
            <span key={brand} className="font-display text-xl text-ivory/50">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
