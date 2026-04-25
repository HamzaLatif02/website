# hamzalatif.dev

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Syne (display) + DM Mono (body)
- **Deployment**: Render (auto-deploy on push to main)

## Getting Started

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview production build
```

## Project Structure

```
src/
├── components/
│   ├── LeftPanel.tsx         # Sticky left panel — name, nav, social links
│   ├── AboutSection.tsx      # About section
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── EducationSection.tsx  # Education timeline
│   ├── ProjectsSection.tsx   # Project cards grid
│   └── Footer.tsx
├── data/
│   └── projects.json         # Project content
├── hooks/
│   └── useSmooth.ts          # Smooth scroll helper
├── types/
│   └── index.ts
└── App.tsx                   # Two-column layout + IntersectionObserver nav
public/
├── CV_HamzaLatif.pdf
├── favicon.ico / favicon.png
└── screenshots/              # Local project screenshots
```

## Colour Palette

| Role | Hex |
|---|---|
| Background | `#04080F` |
| Accent | `#507DBC` |
| Surface / card | `#A1C6EA` |
| Light background | `#BBD1EA` |
| Foreground / muted | `#DAE3E5` |

## Adding a Project

Add an entry to `src/data/projects.json`:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "summary": "Short description.",
  "year": 2025,
  "featured": false,
  "tags": ["Full-Stack"],
  "technologies": ["Python", "React"],
  "image": "/screenshots/project/screenshot.png",
  "links": {
    "live": "https://example.com",
    "code": "https://github.com/HamzaLatif02/repo",
    "caseStudy": null
  }
}
```

Place any screenshots in `public/screenshots/<project-id>/`.

## Inspiration

Layout and navigation style inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).
