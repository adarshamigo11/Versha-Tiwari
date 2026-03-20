# Versha Tiwari — Portfolio Website

A clean, minimal Next.js portfolio for Versha Tiwari, Early Childhood Teacher (VIT Registered) and Safety Advocate.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
versha-portfolio/
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page
├── components/
│   ├── Navbar.tsx         # Fixed navigation bar
│   ├── Hero.tsx           # Hero / landing section
│   ├── About.tsx          # Professional summary + achievements
│   ├── NQSAreas.tsx       # 7 NQS Quality Areas (interactive accordion)
│   ├── Experience.tsx     # Work history, skills, digital platforms
│   ├── Education.tsx      # Qualifications + registrations
│   ├── Contact.tsx        # Contact details
│   └── Footer.tsx         # Footer
├── public/                # Static assets (add photos here)
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Sections

1. **Hero** — Name, title, key stats (7+ years, Top 3 Safety Champion Finalist, Exceeding NQS QA2)
2. **About** — Professional summary + 8 key leadership achievements
3. **NQS Areas** — Interactive accordion across all 7 National Quality Standard Areas with real details from Versha's work
4. **Experience** — Full role timeline at Goodstart Early Learning + skills + professional development + digital platforms
5. **Education** — 4 qualifications + professional registrations (VIT, WWCC, Police Check)
6. **Contact** — Phone, email, location

## Customisation

- **Add a photo**: Place an image in `/public/versha.jpg` and add an `<Image>` tag in `Hero.tsx`
- **Update NQS content**: Edit `components/NQSAreas.tsx` — each area has an `items` array
- **Colours**: The accent blue `#4a8fa8` can be changed in `tailwind.config.js` and inline styles
- **Add Bush Kinder photos**: Create a gallery section in a new component and import it in `app/page.tsx`

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Cormorant Garamond + DM Sans
