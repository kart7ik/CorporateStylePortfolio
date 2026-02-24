# Kartik Joshi — Portfolio (Angular 20)

## Project Structure

```
src/
├── app/
│   ├── components/         ← Reusable UI components
│   │   ├── nav/            ← Sticky navigation bar
│   │   ├── hero/           ← Hero section with photo + stats
│   │   ├── work/           ← Work/projects section
│   │   ├── skills/         ← Skills grid
│   │   ├── about/          ← About + experience timeline
│   │   ├── contact/        ← Contact links section
│   │   ├── gallery/        ← Photo gallery with lightbox
│   │   └── footer/         ← Footer
│   ├── pages/
│   │   ├── home/           ← Home page (assembles all components)
│   │   └── rxn-case-study/ ← RXN Sports case study page
│   ├── data/
│   │   └── portfolio.data.ts  ← ⭐ ALL CONTENT LIVES HERE
│   ├── models/
│   │   └── portfolio.models.ts ← TypeScript interfaces
│   ├── app.component.ts    ← Root shell (nav + router-outlet + footer)
│   ├── app.routes.ts       ← Route definitions
│   └── app.config.ts       ← App configuration
└── styles.scss             ← Global CSS variables + shared styles
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm start
# → http://localhost:4200

# 3. Build for production
npm run build:prod
# → output in dist/kartik-portfolio/browser/
```

## Updating Content

All portfolio content lives in **one file**:
```
src/app/data/portfolio.data.ts
```

- Add/edit work items → `WORK_ITEMS`
- Update skills → `SKILL_CATEGORIES`
- Edit experience → `EXPERIENCE_ITEMS`
- Update gallery images → `GALLERY_IMAGES`
- Change contact links → `CONTACT_LINKS`

## Adding Gallery Images (Cloudinary)

In `portfolio.data.ts`, update the `src` field in `GALLERY_IMAGES`:
```ts
{
  src: 'https://res.cloudinary.com/dkwiquxyb/image/upload/YOUR_IMAGE.jpg',
  alt: 'Description',
  caption: 'Caption shown on hover'
}
```

## Deploy to Vercel

### Option A — Via GitHub (Recommended)
1. Push this project to a GitHub repo
2. Connect repo to Vercel → auto-deploys on every push

### Option B — Via Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Angular and uses `vercel.json` config.
Build output: `dist/kartik-portfolio/browser/`

## Adding the RXN Case Study

The RXN case study page is at:
```
src/app/pages/rxn-case-study/rxn-case-study.component.ts
```

Copy the content sections from `rxn-casestudy.html` into this component's template.
