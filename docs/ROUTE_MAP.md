# ABTalks Redesign — Route Map

Use this document for automated screenshot capture at **390px viewport width**.

## How to Run

```bash
cd landing-page
npm install
npm run dev
```

**Local base URL:** `http://localhost:5173`

**Production preview:**

```bash
npm run build
npm run preview
```

**Base URL:** `http://localhost:4173`

---

## Routes

| Route | Screen | Purpose | Screenshot |
|-------|--------|---------|------------|
| `/` | Landing Page | First-time student experience — explains the 60-day challenge, tracks, proof-of-work, and CTA | **Full-page scroll** (all sections on one page) |

---

## Landing Page Sections (on `/`)

These are anchor sections on the same route. Scroll to capture each area, or capture one full-page screenshot.

| Anchor | Section | Content |
|--------|---------|---------|
| *(top)* | Hero | Headline, 60-day explanation, primary CTA |
| `#how-it-works` | How It Works | Pick track → Build daily → Submit proof |
| `#tracks` | Challenge Tracks | Web Dev, AI/ML, DSA |
| `#stories` | Social Proof | Student stats and achievement stories |
| `#start` | Final CTA | “Start Challenge” call to action |

---

## Mobile Viewport

- **Primary design width:** 390px
- **Viewport meta:** `width=device-width, initial-scale=1.0`
- **Touch targets:** minimum 48px height on buttons
- **Layout:** single column, stacked sections, hamburger nav on mobile

### Screenshot settings

```
Viewport width:  390px
Viewport height: 844px (or full-page capture)
Device scale:    1x
```

---

## Example URLs for Capture

```
http://localhost:5173/
http://localhost:5173/#how-it-works
http://localhost:5173/#tracks
http://localhost:5173/#stories
http://localhost:5173/#start
```

Replace the host with your deployed URL when submitting (e.g. Vercel, Netlify, GitHub Pages).

---

## Design Intent

Built **mobile-first at 390px** for students who use the platform on their phones, often late at night after college. Desktop layouts are a secondary enhancement via responsive breakpoints (`sm:`, `md:`, `lg:`).

A student who has never heard of ABTalks should understand within the hero:

1. What the challenge is (60 days)
2. What they do daily (build + submit GitHub commit + LinkedIn post)
3. Why it matters (consistency, portfolio, recruiter visibility)
