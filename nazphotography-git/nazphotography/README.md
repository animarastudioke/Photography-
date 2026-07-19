# Nazphotography.ke

Production-ready Next.js 15 (App Router) rebuild of the Nazphotography.ke design — a luxury
black-and-gold photography & videography studio site based in Mombasa, Kenya.

## Stack

- **Next.js 15** (App Router, TypeScript, static generation)
- **Tailwind CSS** — black/gold luxury design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, page transitions, count-up stats
- **Lenis** — smooth inertial scrolling
- **Firebase (Firestore)** — booking & contact form submissions
- **Cloudinary** — image delivery helpers (`lib/cloudinary.ts`)
- **lucide-react** — icon set

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your real keys — see below
npm run dev
```

Open http://localhost:3000. First build requires internet access (Next.js fetches
Inter, Playfair Display, and Petit Formal Script from Google Fonts at build time via
`next/font/google` — this is normal and self-hosts the fonts into your build output,
no runtime calls to Google).

## What's real vs. what needs your input

**Real and working:**
- Every page and component in `app/` and `components/` — actual React/TypeScript, not mockups
- Navigation, routing, filtering, the masonry gallery + lightbox, forms with validation
- SEO: metadata, Open Graph, JSON-LD LocalBusiness schema, `sitemap.xml`, `robots.txt`
- Responsive layout, keyboard-accessible lightbox, `prefers-reduced-motion` support
- Type-checked (`tsc --noEmit`) and linted clean; `next build` verified end-to-end
- **17 real photos** in `public/images/portfolio/`, wired into the hero, category strip,
  portfolio grid, lightbox, Instagram preview, and blog covers via `lib/data/portfolio.ts`
  and `lib/data/blog.ts`. No corporate, events, or drone shots yet — those categories still
  show the styled placeholder until you have images for them.

**Needs your input before this is truly live:**
1. **Photo captions/locations** — I don't know the actual venue names in a couple of the
   hotel/lifestyle shots (signage was only partially legible in the source photos), so
   `location` fields in `lib/data/portfolio.ts` are deliberately generic ("Mombasa coast",
   "Swahili coast"). Fix these before publishing — a wrong hotel name is worse than a vague one.
2. **Nazario's own portrait** — none of the 17 uploaded photos are of you; the About page and
   homepage "About Me" section still use the placeholder for your own photo specifically.
3. **Move to Cloudinary (optional)** — images currently serve from `/public` via Next's
   built-in image optimization, which works fine at this size. If your library grows past
   a few hundred images, upload to Cloudinary and swap `image: "/images/..."` for
   `cld("public-id")` calls from `lib/cloudinary.ts` — `PortfolioImage` doesn't care which.
4. **Firebase** — create a Firebase project, enable Firestore, and fill in the
   `NEXT_PUBLIC_FIREBASE_*` values in `.env.local`. Until then, the booking and contact
   forms will show a friendly error asking people to WhatsApp instead — they won't crash,
   but they also won't save anywhere.
5. **Cloudinary env vars** — only needed once you migrate off local `/public` images.
6. **WhatsApp number / real contact details** — update `NEXT_PUBLIC_WHATSAPP_NUMBER` and the
   phone/email in `components/layout/Footer.tsx` and `app/contact/page.tsx`.
7. **Newborn photography** — I filed the one baby photo under the Portraits category rather
   than adding a new nav tab/service line for it. If newborn sessions are a real, ongoing
   service, say so and I'll add a proper category, service entry, and pricing tier.

## Deployment

This project is configured for **static export** (`output: "export"` in `next.config.mjs`),
producing a plain `out/` folder of HTML/CSS/JS with no server required. This works because
nothing here needs a Node runtime — Firestore and Cloudinary calls happen client-side.

- **Manual upload (fastest):** run `npm run build`, then drag the *contents* of the `out/`
  folder (not the folder itself — `index.html` needs to sit at the root) into
  [app.netlify.com/drop](https://app.netlify.com/drop), or your Netlify project's Deploys tab.
  A pre-built `out/` is also provided as a separate zip for this exact purpose.
- **Git-based deploy:** connect the repo in Netlify/Vercel and it'll auto-detect Next.js and
  run the build itself — same output either way.
- If you later add anything that needs a real server (API routes, server actions, ISR),
  remove `output: "export"` first — those don't work in a static export.

Fonts are self-hosted via `@fontsource/*` packages (not `next/font/google`), so the build
has zero external network dependency — it'll succeed in any CI/build sandbox, offline
sandboxes included, with no risk of a Google Fonts fetch failing your build.

Any Next.js host works. Set the env vars from `.env.example` in your host's dashboard —
note that for a static export, `NEXT_PUBLIC_*` vars are baked in at **build time**, so set
them before running `npm run build`, not after.

## Roadmap (not built in this pass)

This repo covers **Phase 1 (foundation) and Phase 2 (homepage + all core pages)**.
Still ahead, in the order I'd tackle them:

3. **Portfolio/gallery polish** — pagination or infinite scroll once there are 50+ real images
4. **Services/pricing CMS** — move `lib/data/*.ts` into Firestore or Sanity so you can edit
   copy and prices without redeploying
5. **Booking system hardening** — email/WhatsApp notifications on new Firestore bookings
   (Firebase Cloud Function trigger), calendar conflict checking
6. **Blog CMS** — same pattern as services; currently static data for 3 posts
7. **Contact** — spam protection (reCAPTCHA or honeypot) before going public
8. **Testing & deployment** — Playwright smoke tests, Lighthouse CI, Vercel preview deploys

## Notes on the code

- `.eslintrc.json` + `next lint` are used (Next.js 15's default). `next lint` is deprecated
  for Next.js 16 — when you upgrade, run `npx @next/codemod@canary next-lint-to-eslint-cli .`
- `tsconfig.json` uses `noUncheckedIndexedAccess: true` for stricter array-safety; keep this on.
