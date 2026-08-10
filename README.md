# Md Iftakhar Ahmed Emon — 3D Portfolio

Interactive 3D developer portfolio with a keyboard where every keycap is a skill. Built with Next.js, React, TypeScript, GSAP, and Motion.

Forked from [Naresh Khatri's 3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) template and customized for [Md Iftakhar Ahmed Emon](https://github.com/MIftakharemon).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MIftakharemon/iftakhar-portfolio)

## Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Analytics** _(optional)_ — Umami analytics integration

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, @teispace/next-themes |

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/MIftakharemon/iftakhar-portfolio.git
    cd iftakhar-portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
    | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
    | `UMAMI_DOMAIN` | No | Umami analytics script URL |
    | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) and see the magic

---

## Personalization

All personal info is centralized in [`src/data/config.ts`](src/data/config.ts):

```ts
const config = {
  title: "Md Iftakhar Ahmed Emon | Full Stack & Mobile Developer",
  author: "Md Iftakhar Ahmed Emon",
  email: "iftakharahmed163@gmail.com",
  site: "https://iftakhar-portfolio.vercel.app",
  githubUsername: "MIftakharemon",
  githubRepo: "3d-portfolio-next",
  social: {
    linkedin: "https://www.linkedin.com/in/iftakharahmedemon/",
    github: "https://github.com/MIftakharemon",
    // ...
  },
};
```

Other files to customize:

| File | What to change |
|---|---|
| `src/data/projects.tsx` | Projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list and work experience |
| `public/Md_Iftakhar_Ahmed_Emon.pdf` | Resume PDF for the resume page |
| `public/assets/projects-screenshots/` | Project screenshots |
| `public/assets/seo/og-image.png` | Social share preview image |

---

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MIftakharemon/3d-portfolio-next)

This site is deployed on **Vercel**. To deploy your own:

1. Push your code to a GitHub repository
2. Connect the repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel handles the rest — automatic deployments on every push

---

## License & Credits

This project is open source and available under the [MIT License](LICENSE).

Built on the excellent [3d-portfolio](https://github.com/Naresh-Khatri/3d-portfolio) template by [Naresh Khatri](https://github.com/Naresh-Khatri). If you use this template, a credit or link back to the original repo would be much appreciated
