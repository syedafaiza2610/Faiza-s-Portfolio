# Faiza Parveen — 3D Portfolio

A premium, animated, 3D-enhanced portfolio website built for Faiza Parveen (Junior Full Stack Developer).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **3D**: React Three Fiber + @react-three/drei + three.js
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Toasts**: sonner

## Quick Start

```bash
# 1. Install dependencies (use either bun or npm)
bun install
# OR
npm install

# 2. Run the dev server
bun run dev
# OR
npm run dev

# 3. Open http://localhost:3000 in your browser
```

## Build for Production

```bash
bun run build
bun run start
# OR
npm run build
npm run start
```

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── globals.css        # Custom dark theme + animations
│   │   ├── layout.tsx         # SEO metadata + toasters
│   │   └── page.tsx           # Main page assembly
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── navbar.tsx         # Sticky glass navbar
│   │   │   ├── hero-3d.tsx        # React Three Fiber 3D scene
│   │   │   ├── hero.tsx           # Hero section
│   │   │   ├── about.tsx          # About + animated stats
│   │   │   ├── skills.tsx         # Skills marquee + bars
│   │   │   ├── experience.tsx     # Experience timeline
│   │   │   ├── projects.tsx       # Projects showcase
│   │   │   ├── education.tsx      # Education + certificates
│   │   │   ├── contact.tsx        # Contact form
│   │   │   └── footer.tsx         # Footer + scroll progress
│   │   └── ui/                # shadcn/ui components
│   ├── lib/
│   │   └── portfolio-data.ts  # All CV content as typed data
│   └── hooks/
├── public/                    # Static assets
├── prisma/                    # Prisma schema (if using DB)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Customization

### Update Content
All portfolio content (name, bio, skills, experience, projects, education, certificates, contact info) lives in **`src/lib/portfolio-data.ts`**. Edit that single file to update anything.

### Change Colors
The color palette is defined as CSS variables in **`src/app/globals.css`** under `:root`:
- `--brand-fuchsia: #d946ef` (primary accent)
- `--brand-pink: #ec4899`
- `--brand-violet: #a855f7`
- `--brand-amber: #f59e0b`
- `--brand-cyan: #22d3ee`
- `--brand-bg: #07060d` (background)

### Adjust 3D Scene
The hero 3D scene is in **`src/components/portfolio/hero-3d.tsx`**:
- `Knot()` — the central torus knot (color, emissive, scale)
- `FloatingShape` — the orbiting geometric shapes
- `OrbitingDots` — the trail dots
- `Sparkles` — particle count and opacity
- Point lights — intensity and color

### Lighten/Dim 3D
To make the 3D even more subtle, reduce `emissiveIntensity` values and point light `intensity` values in `hero-3d.tsx`. To make it brighter, increase them.

## Features

- Dark premium theme with fuchsia/violet/pink/amber palette
- Real-time 3D hero scene (torus knot, floating geometry, orbiting dots, sparkles)
- Animated aurora gradient background + grid pattern + film grain
- Glassmorphism cards with gradient borders
- Sticky navbar with active-section detection + mobile menu
- Smooth scroll navigation
- Scroll progress bar
- Animated stat counters
- Skills marquee + progress bars
- Alternating experience timeline
- Project cards with hover glow
- Working contact form (opens email client)
- Fully responsive (mobile-first)
- Reduced-motion accessibility support

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com):
1. Push this folder to a GitHub repo
2. Import the repo into Vercel
3. Deploy — no env vars required

## License

Personal portfolio for Faiza Parveen. Free to customize and use.
